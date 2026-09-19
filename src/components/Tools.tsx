import React from 'react';
import { Wrench, Scissors, Sparkles, Clapperboard, Cpu, Mic, MessageSquare, UserCheck } from 'lucide-react';
import { TOOLS_LIST } from '../data/portfolioData';

export const Tools: React.FC = () => {
  const getToolIcon = (iconName: string, color: string) => {
    const iconProps = { size: 28, strokeWidth: 1.8, color };
    switch (iconName) {
      case 'Scissors':
        return <Scissors {...iconProps} />;
      case 'Sparkles':
        return <Sparkles {...iconProps} />;
      case 'Clapperboard':
        return <Clapperboard {...iconProps} />;
      case 'Cpu':
        return <Cpu {...iconProps} />;
      case 'Mic':
        return <Mic {...iconProps} />;
      case 'MessageSquare':
        return <MessageSquare {...iconProps} />;
      case 'UserCheck':
        return <UserCheck {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  return (
    <section className="section" id="tools">
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head">
          <div>
            <div className="section-tag">
              <Wrench size={14} />
              04 — Tools &amp; Stack
            </div>
            <h2 className="section-title">
              What's actually running under the hood.
            </h2>
          </div>
          <div className="section-note">
            The specialized toolchain I use to research, script, generate, voice, and assemble high-retention AI videos.
          </div>
        </div>

        {/* 4-Column Border Grid matching Reference Site */}
        <div
          className="tool-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'var(--line)',
            border: '1px solid var(--line)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          {TOOLS_LIST.map((tool) => {
            const toolColor = tool.color || 'var(--violet)';
            return (
              <div
                key={tool.name}
                className="tool-cell"
                style={{
                  background: 'var(--bg)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'background 0.2s ease',
                }}
              >
                <div>
                  {/* Category Pill */}
                  <div
                    className="k mono"
                    style={{
                      fontSize: '10px',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span>{tool.category}</span>
                    {tool.badge && (
                      <span
                        style={{
                          fontSize: '9px',
                          color: toolColor,
                          background: 'rgba(255, 255, 255, 0.04)',
                          padding: '2px 5px',
                          borderRadius: '2px',
                          border: '1px solid var(--line)',
                        }}
                      >
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  {/* Tool Icon & Name */}
                  <div
                    className="v-row"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      marginBottom: '14px',
                    }}
                  >
                    <div
                      className="tool-icon"
                      style={{
                        position: 'relative',
                        flex: 'none',
                        width: '54px',
                        height: '54px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--panel)',
                        border: '1px solid var(--line)',
                        boxShadow: `0 0 15px ${toolColor}15`,
                      }}
                    >
                      {getToolIcon(tool.iconName, toolColor)}
                    </div>

                    <div
                      className="v"
                      style={{
                        fontFamily: "'Archivo Black', sans-serif",
                        fontSize: '18px',
                        letterSpacing: '-0.3px',
                        color: 'var(--text)',
                      }}
                    >
                      {tool.name}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div
                  className="d"
                  style={{
                    fontSize: '12.5px',
                    color: 'var(--muted)',
                    lineHeight: 1.5,
                    marginTop: '8px',
                  }}
                >
                  {tool.description}
                </div>
              </div>
            );
          })}

          {/* 8th cell to complete 2x4 grid aesthetically */}
          <div
            className="tool-cell"
            style={{
              background: 'var(--panel)',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              border: '1px dashed var(--line)',
            }}
          >
            <div className="mono" style={{ fontSize: '10px', color: 'var(--flame)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Custom Stack
            </div>
            <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '16px', color: 'var(--text)', marginBottom: '8px' }}>
              Tailored For Your Brand
            </div>
            <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '14px' }}>
              Need a specific AI generator, voice clone, or custom format? I integrate whatever tools best fit your campaign.
            </p>
            <a
              href="#contact"
              className="mono"
              style={{
                fontSize: '11px',
                color: 'var(--violet)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
              }}
            >
              Discuss Your Stack →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .tool-cell:hover {
          background: var(--panel) !important;
        }
        @media (max-width: 960px) {
          .tool-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .tool-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
