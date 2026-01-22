import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Professional Web Development & Design Agency'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Build Your Vision
          </div>
          <div
            style={{
              fontSize: 36,
              opacity: 0.9,
              fontWeight: 'normal',
            }}
          >
            Professional Web Development & Design
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
