import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'TestMate';
  const sub = searchParams.get('sub') || '나를 알아가는 재미있는 여정';
  const emoji = searchParams.get('emoji') || '🧪';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1035 0%, #0f0a1e 50%, #1a0a2e 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(168, 85, 247, 0.15)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -40,
            left: -40,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(236, 72, 153, 0.12)',
            display: 'flex',
          }}
        />

        {/* Emoji */}
        <div style={{ fontSize: 96, marginBottom: 16, display: 'flex' }}>{emoji}</div>

        {/* Title */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            background: 'linear-gradient(90deg, #a855f7, #ec4899)',
            backgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            padding: '0 40px',
            display: 'flex',
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.7)',
            marginTop: 12,
            textAlign: 'center',
            display: 'flex',
          }}
        >
          {sub}
        </div>

        {/* Brand */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            fontSize: 22,
            color: 'rgba(255,255,255,0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          🧪 TestMate
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
