import { kv } from '@vercel/kv'

import { NextResponse } from 'next/server'

type SpotifyResponse = {
  is_playing: boolean
  progress_ms: number
  timestamp: number
  item: {
    name: string
    external_urls: {
      spotify: string
    }
    duration_ms: number
    artists: {
      name: string
    }[]
    album: {
      images: {
        url: string
      }[]
    }
  }
}

export type NowPlaying = {
  title: string
  url: string
  cover_img: string
  artist: string
  live: boolean
  timestamp: number
}

export const revalidate = 60 // seconds

export async function GET(): Promise<NextResponse> {
  const token = await kv.get('spotify:token')

  if (!token)
    return NextResponse.json(
      { error: "Couldn't connect to Spotify." },
      { status: 401 }
    )

  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: { Authorization: `Bearer ${token}` },
      next: {
        revalidate: 0,
      },
    }
  )

  if (response.status == 401) {
    await refreshToken()
    return GET()
  }

  if (response.status == 204) {
    console.log({})

    const data = ((await kv.hgetall('spotify:now-playing')) ??
      {}) as SpotifyResponse

    const nowPlaying = {
      title: data.item.name,
      live: data.is_playing,
      url: data.item.external_urls.spotify,
      cover_img: data.item.album.images[0].url,
      artist: data.item.artists.map((artist) => artist.name).join(', '),
      timestamp: data.timestamp,
    } satisfies NowPlaying

    return NextResponse.json({
      ...nowPlaying,
      live: false,
    })
  }

  const data = (await response.json()) as SpotifyResponse

  const nowPlaying = {
    title: data.item.name,
    live: data.is_playing,
    url: data.item.external_urls.spotify,
    cover_img: data.item.album.images[0].url,
    artist: data.item.artists.map((artist) => artist.name).join(', '),
    timestamp: data.timestamp,
  } satisfies NowPlaying

  kv.hset('spotify:now-playing', data)

  return NextResponse.json(nowPlaying satisfies NowPlaying)
}

const refreshToken = async () => {
  const refreshToken = await kv.get('spotify:refresh')

  const { access_token } = await fetch(
    `https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=${refreshToken}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64_encode(
          `${process.env.SPOTIFY_ID}:${process.env.SPOTIFY_SECRET}`
        )}`,
      },
    }
  ).then((res) => res.json())

  await kv.set('spotify:token', access_token)
}

function base64_encode(str: string) {
  return Buffer.from(str).toString('base64')
}
