import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'NORO.WORK - High-Performance Web Development Studio'
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
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: '#050505',
          position: 'relative',
          overflow: 'hidden',
          padding: '80px',
        }}
      >
        {/* Background Gradient Orbs - Subtle */}
        <div
          style={{
            position: 'absolute',
            top: '-300px',
            right: '-200px',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 101, 76, 0.15) 0%, rgba(212, 101, 76, 0) 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-200px',
            left: '-300px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 101, 76, 0.1) 0%, rgba(212, 101, 76, 0) 70%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Noise Texture Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Top Section - Logo & Badge */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            zIndex: 10,
            width: '100%',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            {/* Logo Icon */}
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(212, 101, 76, 0.2) 0%, rgba(212, 101, 76, 0.05) 100%)',
                border: '1px solid rgba(212, 101, 76, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 700,
                color: '#D4654C',
              }}
            >
              N
            </div>
            <div
              style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
              }}
            >
              NORO.WORK
            </div>
          </div>

          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '100px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#D4654C',
              }}
            />
            <div
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.7)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              High-Performance Web Development
            </div>
          </div>
        </div>

        {/* Main Content - Center */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            zIndex: 10,
            maxWidth: '900px',
            marginTop: '-60px',
          }}
        >
          {/* Main Headline */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}
          >
            Your Brand Deserves
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#D4654C',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              marginBottom: '32px',
            }}
          >
            More Than a Template.
          </div>

          {/* Subheadline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '2px',
                background: 'linear-gradient(90deg, #D4654C 0%, transparent 100%)',
              }}
            />
            <div
              style={{
                fontSize: '24px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.6)',
                letterSpacing: '0.01em',
              }}
            >
              Strategy-first development. Built to perform.
            </div>
          </div>
        </div>

        {/* Bottom Section - Stats & CTA */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            zIndex: 10,
          }}
        >
          {/* Stats Grid */}
          <div
            style={{
              display: 'flex',
              gap: '56px',
            }}
          >
            {/* Stat 1 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  fontSize: '40px',
                  fontWeight: 700,
                  color: '#D4654C',
                  lineHeight: '1',
                  marginBottom: '8px',
                }}
              >
                +240%
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Avg Growth
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                width: '1px',
                height: '60px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            />

            {/* Stat 2 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  fontSize: '40px',
                  fontWeight: 700,
                  color: '#D4654C',
                  lineHeight: '1',
                  marginBottom: '8px',
                }}
              >
                &lt;1.2s
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Load Time
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                width: '1px',
                height: '60px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            />

            {/* Stat 3 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  fontSize: '40px',
                  fontWeight: 700,
                  color: '#D4654C',
                  lineHeight: '1',
                  marginBottom: '8px',
                }}
              >
                95+
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Lighthouse
              </div>
            </div>
          </div>

          {/* CTA Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 24px',
              borderRadius: '100px',
              background: 'linear-gradient(135deg, rgba(212, 101, 76, 0.2) 0%, rgba(212, 101, 76, 0.1) 100%)',
              border: '1px solid rgba(212, 101, 76, 0.3)',
            }}
          >
            <div
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#D4654C',
                letterSpacing: '0.05em',
              }}
            >
              noro.work
            </div>
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'rgba(212, 101, 76, 0.2)',
                border: '1px solid #D4654C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                color: '#D4654C',
              }}
            >
              →
            </div>
          </div>
        </div>

        {/* Decorative Corner Accents */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
            width: '120px',
            height: '120px',
            borderTop: '2px solid rgba(212, 101, 76, 0.2)',
            borderRight: '2px solid rgba(212, 101, 76, 0.2)',
            borderTopRightRadius: '24px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            width: '120px',
            height: '120px',
            borderBottom: '2px solid rgba(212, 101, 76, 0.2)',
            borderLeft: '2px solid rgba(212, 101, 76, 0.2)',
            borderBottomLeftRadius: '24px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}