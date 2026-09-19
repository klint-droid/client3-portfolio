import React from 'react';
import { Sparkles, ShoppingBag, Zap, TrendingUp, CheckCircle2, ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="radial-glow-top" />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-head">
          <div>
            <div className="section-tag">
              <Sparkles size={14} />
              01 — About Myself
            </div>
            <h2 className="section-title">
              Creative storytelling meets AI precision.
            </h2>
          </div>
          <div className="section-note">
            Crafting video content that feels authentic, engaging, and aligned with e-commerce growth goals.
          </div>
        </div>

        {/* Content Layout */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Left: Bio Narrative */}
          <div
            style={{
              background: 'var(--panel)',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Accent Pill */}
            <div
              className="mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                color: 'var(--violet)',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid var(--violet-dim)',
                padding: '4px 10px',
                borderRadius: '3px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '24px',
              }}
            >
              Christian James Amar • Video Specialist
            </div>

            {/* Exact User Text Paragraph 1 */}
            <p
              style={{
                fontSize: '16.5px',
                color: 'var(--text)',
                lineHeight: 1.7,
                marginBottom: '20px',
                fontWeight: 400,
              }}
            >
              {PERSONAL_INFO.aboutParagraphs[0]}
            </p>

            {/* Exact User Text Paragraph 2 */}
            <p
              style={{
                fontSize: '15.5px',
                color: 'var(--muted)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              {PERSONAL_INFO.aboutParagraphs[1]}
            </p>

            {/* Value checklist */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '14px',
                paddingTop: '24px',
                borderTop: '1px solid var(--line)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px' }}>
                <CheckCircle2 size={16} color="var(--violet)" />
                <span>Over 1 Year in Production</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px' }}>
                <CheckCircle2 size={16} color="var(--flame)" />
                <span>E-Commerce UGC Focused</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px' }}>
                <CheckCircle2 size={16} color="var(--violet)" />
                <span>End-to-End Delivery</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px' }}>
                <CheckCircle2 size={16} color="var(--flame)" />
                <span>Data-Driven Retention</span>
              </div>
            </div>

            {/* CTA row */}
            <div
              style={{
                marginTop: '32px',
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
              }}
            >
              <a href="#work" className="btn btn-solid btn-sm">
                Explore Portfolio
                <ArrowRight size={14} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="btn btn-line btn-sm"
              >
                <Mail size={14} />
                Send an Email
              </a>
            </div>
          </div>

          {/* Right: Core Specializations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Card 1 */}
            <div
              className="about-pillar-card"
              style={{
                background: 'var(--panel)',
                border: '1px solid var(--line)',
                borderRadius: '6px',
                padding: '26px 28px',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '4px',
                    background: 'rgba(255, 90, 54, 0.1)',
                    border: '1px solid rgba(255, 90, 54, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--flame)',
                  }}
                >
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <div className="mono" style={{ fontSize: '10px', color: 'var(--flame)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Pillar 01
                  </div>
                  <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '17px', color: 'var(--text)' }}>
                    E-Commerce UGC Ads
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
                Crafting authentic, high-converting product videos, customer reactions, and problem-solution angles tailored for TikTok, Instagram Reels, and Meta ad campaigns.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="about-pillar-card"
              style={{
                background: 'var(--panel)',
                border: '1px solid var(--line)',
                borderRadius: '6px',
                padding: '26px 28px',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '4px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid var(--violet-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--violet)',
                  }}
                >
                  <Zap size={20} />
                </div>
                <div>
                  <div className="mono" style={{ fontSize: '10px', color: 'var(--violet)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Pillar 02
                  </div>
                  <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '17px', color: 'var(--text)' }}>
                    Next-Gen AI Pipeline
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
                Combining Higgsfield, Google Flow, and HeyGen for prompt-directed scene generation, photorealistic movement, and avatars without physical production bottlenecks.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="about-pillar-card"
              style={{
                background: 'var(--panel)',
                border: '1px solid var(--line)',
                borderRadius: '6px',
                padding: '26px 28px',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '4px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--green)',
                  }}
                >
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="mono" style={{ fontSize: '10px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Pillar 03
                  </div>
                  <h3 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '17px', color: 'var(--text)' }}>
                    Retention &amp; Performance
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
                Every edit is built with retention science: 3-second scroll-stopping hooks, kinetic captions, precise audio sync, and clear call-to-actions that convert visitors into buyers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-pillar-card:hover {
          border-color: var(--violet-dim) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};
