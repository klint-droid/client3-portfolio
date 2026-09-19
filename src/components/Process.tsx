import React from 'react';
import { Film } from 'lucide-react';
import { PROCESS_STAGES } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section className="section" id="process">
      <div className="wrap">
        {/* Section Head */}
        <div className="section-head">
          <div>
            <div className="section-tag">
              <Film size={14} />
              02 — Process
            </div>
            <h2 className="section-title">
              Every video follows the same timeline.
            </h2>
          </div>
          <div className="section-note">
            No shortcuts from prompt to post. Five stages, every project, so quality stays consistent and conversions stay high.
          </div>
        </div>

        {/* Signature Timeline Grid */}
        <div className="process-timeline" style={{ position: 'relative' }}>
          <div
            className="timeline-track"
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '46px',
              height: '1px',
              background: 'var(--line)',
              zIndex: 0,
            }}
          />

          <div
            className="stages-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '20px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {PROCESS_STAGES.map((stage, idx) => (
              <div
                key={stage.step}
                className="stage-item"
                style={{
                  position: 'relative',
                  paddingRight: idx === PROCESS_STAGES.length - 1 ? 0 : '14px',
                }}
              >
                {/* Stage Number & Glowing Node */}
                <div
                  className="mono"
                  style={{
                    fontSize: '11px',
                    color: 'var(--muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '26px',
                    letterSpacing: '1px',
                  }}
                >
                  <span
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: 'var(--bg)',
                      border: '2px solid var(--violet)',
                      boxShadow: '0 0 0 5px var(--bg)',
                      flexShrink: 0,
                    }}
                  />
                  <span>{stage.step}</span>
                </div>

                {/* Stage Title */}
                <h3
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: '16px',
                    marginBottom: '10px',
                    letterSpacing: '-0.3px',
                    color: 'var(--text)',
                  }}
                >
                  {stage.title}
                </h3>

                {/* Stage Description */}
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--muted)',
                    marginBottom: '16px',
                    lineHeight: 1.6,
                  }}
                >
                  {stage.description}
                </p>

                {/* Stage Tools Chips */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                  }}
                >
                  {stage.tools.map((t) => (
                    <span
                      key={t}
                      className="mono"
                      style={{
                        fontSize: '10.5px',
                        color: 'var(--text)',
                        border: '1px solid var(--line)',
                        padding: '3px 8px',
                        borderRadius: '2px',
                        background: 'var(--panel)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Timecode */}
                <div
                  className="mono"
                  style={{
                    marginTop: '16px',
                    fontSize: '11px',
                    color: 'var(--flame)',
                    letterSpacing: '0.5px',
                  }}
                >
                  TC {stage.timecode}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .stages-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .timeline-track {
            display: none !important;
          }
          .stage-item {
            padding-right: 0 !important;
            border-left: 1px solid var(--line);
            padding-left: 20px;
          }
          .stage-item .mono span:first-child {
            margin-left: -27px;
          }
        }
      `}</style>
    </section>
  );
};
