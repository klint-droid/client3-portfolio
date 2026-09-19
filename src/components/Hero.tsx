import React from 'react';
import { Sparkles, Play } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <header
      className="hero-section"
      style={{
        padding: '170px 0 90px',
        position: 'relative',
        borderBottom: '1px solid var(--line)',
        background: `
          radial-gradient(650px 320px at 85% 12%, rgba(139, 92, 246, 0.16), transparent 70%),
          radial-gradient(550px 280px at 8% 85%, rgba(255, 90, 54, 0.09), transparent 70%),
          var(--bg)
        `,
      }}
    >
      <div className="wrap">
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Text & CTAs */}
          <div>
            <div
              className="eyebrow"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '12px',
                fontFamily: "'JetBrains Mono', monospace",
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--flame)',
                marginBottom: '22px',
                background: 'rgba(255, 90, 54, 0.08)',
                padding: '6px 14px',
                borderRadius: '999px',
                border: '1px solid rgba(255, 90, 54, 0.25)',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--flame)',
                  boxShadow: '0 0 8px var(--flame)',
                  animation: 'pulse 2s infinite',
                }}
              />
              AI VIDEO PRODUCTION • E-COMMERCE UGC
            </div>

            <h1
              className="hero-title"
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: 'clamp(38px, 6.2vw, 76px)',
                lineHeight: 0.98,
                letterSpacing: '-1.5px',
                maxWidth: '900px',
                color: 'var(--text)',
              }}
            >
              From script <br />
              to <span style={{ color: 'var(--violet)' }}>screen.</span>
            </h1>

            <p
              className="hero-sub"
              style={{
                marginTop: '26px',
                maxWidth: '560px',
                fontSize: '17px',
                color: 'var(--muted)',
                lineHeight: 1.6,
              }}
            >
              I plan, generate, voice, and edit AI-produced video content for brands — 
              every clip built through the same five-stage process, start to finish.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                gap: '16px',
                marginTop: '38px',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <a href="#work" className="btn btn-solid">
                <Play size={14} fill="currentColor" />
                See the work
              </a>
              <a href="#about" className="btn btn-line">
                About Myself
              </a>
              <a href="#process" className="btn btn-line">
                How it's made
              </a>
            </div>

            {/* Quick stats ribbon */}
            <div
              style={{
                display: 'flex',
                gap: '28px',
                marginTop: '46px',
                paddingTop: '28px',
                borderTop: '1px solid var(--line)',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: '22px',
                    color: 'var(--text)',
                  }}
                >
                  1+ Year
                </div>
                <div
                  className="mono"
                  style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase' }}
                >
                  Video Production
                </div>
              </div>
              <div style={{ borderLeft: '1px solid var(--line)', paddingLeft: '28px' }}>
                <div
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: '22px',
                    color: 'var(--violet)',
                  }}
                >
                  E-Com UGC
                </div>
                <div
                  className="mono"
                  style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase' }}
                >
                  Performance Ads
                </div>
              </div>
              <div style={{ borderLeft: '1px solid var(--line)', paddingLeft: '28px' }}>
                <div
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: '22px',
                    color: 'var(--flame)',
                  }}
                >
                  5-Stage
                </div>
                <div
                  className="mono"
                  style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase' }}
                >
                  End-to-End Pipeline
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Media Showcase */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              className="hero-media-card"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                borderRadius: '6px',
                overflow: 'hidden',
                border: '1px solid var(--line)',
                background: 'var(--panel)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px var(--line)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
            >
              {/* Top Viewfinder Bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 14px',
                  background: 'rgba(11, 11, 14, 0.85)',
                  borderBottom: '1px solid var(--line)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--flame)' }}>
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--flame)',
                      animation: 'pulse 1.5s infinite',
                    }}
                  />
                  REC 00:01:24:18
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '10px', letterSpacing: '1px' }}>
                  4K • 24 FPS • RAW
                </div>
              </div>

              {/* Main Image View */}
              <div
                style={{
                  aspectRatio: '4/3',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--panel-2)',
                }}
              >
                <img
                  src="/hero-preview.jpg"
                  alt="Christian James Amar — AI Video Specialist Studio"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                
                {/* Visual watermark overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    background: 'rgba(11, 11, 14, 0.85)',
                    padding: '4px 10px',
                    borderRadius: '3px',
                    border: '1px solid var(--line)',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10.5px',
                    color: 'var(--text)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Sparkles size={12} color="var(--violet)" />
                  AI STUDIO • UGC PIPELINE
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div
                style={{
                  padding: '14px 16px',
                  background: 'var(--panel)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--line)',
                }}
              >
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>
                    {PERSONAL_INFO.role}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="btn btn-flame btn-sm"
                  style={{ borderRadius: '3px', padding: '6px 12px', fontSize: '10px' }}
                >
                  Hire Christian
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Filmstrip */}
        <div
          className="filmstrip"
          style={{
            marginTop: '70px',
            display: 'flex',
            gap: '6px',
            height: '14px',
            alignItems: 'center',
            opacity: 0.85,
          }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="hole" />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-section {
            padding: 130px 0 60px !important;
          }
        }
      `}</style>
    </header>
  );
};
