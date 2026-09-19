import React, { useState } from 'react';
import { Play, Sparkles, Info, Video } from 'lucide-react';
import { INITIAL_VIDEOS, type VideoProject } from '../data/portfolioData';
import { VideoModal } from './VideoModal';

export const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<VideoProject | null>(null);
  const [showHelper, setShowHelper] = useState<boolean>(false);

  const categories = ['All', 'UGC Ads', 'Product Videos', 'AI Avatars', 'Short-Form'];

  const filteredVideos = selectedCategory === 'All'
    ? INITIAL_VIDEOS
    : INITIAL_VIDEOS.filter((v) => v.category === selectedCategory);

  return (
    <section className="section" id="work">
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head">
          <div>
            <div className="section-tag">
              <Video size={14} />
              03 — Selected Work
            </div>
            <h2 className="section-title">
              Watch the finished clips.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
            <div className="section-note">
              Vertical 9:16 ads engineered for maximum scroll-stopping power and e-commerce conversions.
            </div>
            <button
              onClick={() => setShowHelper(!showHelper)}
              className="mono"
              style={{
                fontSize: '11px',
                color: 'var(--violet)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(139, 92, 246, 0.1)',
                padding: '4px 10px',
                borderRadius: '3px',
                border: '1px solid var(--violet-dim)',
              }}
            >
              <Info size={12} />
              {showHelper ? 'Hide Video Setup Guide' : 'How to Add Your Videos'}
            </button>
          </div>
        </div>

        {/* Video Guide Drawer */}
        {showHelper && (
          <div
            style={{
              marginBottom: '36px',
              padding: '20px 24px',
              background: 'var(--panel)',
              border: '1px solid var(--violet-dim)',
              borderRadius: '6px',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--violet)', marginBottom: '8px' }}>
              <Sparkles size={16} />
              <strong style={{ fontSize: '14px', letterSpacing: '0.5px' }}>
                Video Template Guide for Christian
              </strong>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '10px' }}>
              Your 9:16 video cards are fully structured and ready! When you have your videos, open 
              <code style={{ color: 'var(--flame)', background: 'var(--bg)', padding: '2px 6px', margin: '0 4px', borderRadius: '3px' }}>
                src/data/portfolioData.ts
              </code> 
              and paste your Google Drive preview links, YouTube Shorts, or MP4 URLs into <code>videoUrl</code>.
            </p>
            <div className="mono" style={{ fontSize: '11px', color: 'var(--muted)', background: 'var(--bg)', padding: '10px 14px', borderRadius: '4px' }}>
              Example Google Drive link: <code>https://drive.google.com/file/d/YOUR_VIDEO_ID/preview</code>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '36px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="mono"
                style={{
                  fontSize: '12px',
                  padding: '8px 18px',
                  borderRadius: '2px',
                  border: isActive ? '1px solid var(--violet)' : '1px solid var(--line)',
                  background: isActive ? 'rgba(139, 92, 246, 0.15)' : 'var(--panel)',
                  color: isActive ? '#ffffff' : 'var(--muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3-Column 9:16 Video Grid */}
        <div
          className="video-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '26px',
          }}
        >
          {filteredVideos.map((video) => {
            const hasVideo = !!video.videoUrl;
            return (
              <div
                key={video.id}
                className="vcard"
                onClick={() => setActiveProject(video)}
                style={{
                  background: 'var(--panel)',
                  border: '1px solid var(--line)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                {/* 9:16 Vertical Video Frame */}
                <div
                  className="vframe"
                  style={{
                    aspectRatio: '9/16',
                    position: 'relative',
                    background: 'linear-gradient(165deg, var(--panel-2) 0%, var(--bg) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid var(--line)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Top Timecode Bar */}
                  <div
                    className="tc-bar mono"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      fontSize: '10.5px',
                      color: 'var(--flame)',
                      background: 'rgba(11, 11, 14, 0.8)',
                      backdropFilter: 'blur(6px)',
                      padding: '3px 8px',
                      borderRadius: '2px',
                      border: '1px solid rgba(255, 90, 54, 0.3)',
                      zIndex: 3,
                    }}
                  >
                    {video.timecode}
                  </div>

                  {/* Top Right Tag */}
                  {video.tag && (
                    <div
                      className="mono"
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        fontSize: '9.5px',
                        color: 'var(--text)',
                        background: 'rgba(22, 22, 27, 0.8)',
                        backdropFilter: 'blur(6px)',
                        padding: '3px 7px',
                        borderRadius: '2px',
                        border: '1px solid var(--line)',
                        zIndex: 3,
                      }}
                    >
                      {video.tag}
                    </div>
                  )}

                  {/* If direct video exists */}
                  {hasVideo ? (
                    video.videoUrl?.includes('drive.google.com') ? (
                      <iframe
                        src={video.videoUrl}
                        width="100%"
                        height="100%"
                        allow="autoplay; fullscreen"
                        style={{ border: 'none', pointerEvents: 'none' }}
                        title={video.title}
                      />
                    ) : (
                      <video
                        src={video.videoUrl}
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    )
                  ) : (
                    /* Elegant Interactive Placeholder */
                    <>
                      {/* Subtle Grid Backdrop */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
                          `,
                          backgroundSize: '24px 24px',
                        }}
                      />

                      {/* Play Button Node */}
                      <div
                        className="play-node"
                        style={{
                          width: '54px',
                          height: '54px',
                          borderRadius: '50%',
                          border: '1.5px solid var(--muted)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--muted)',
                          transition: 'all 0.25s ease',
                          zIndex: 2,
                          background: 'rgba(11, 11, 14, 0.5)',
                        }}
                      >
                        <Play size={20} fill="currentColor" style={{ marginLeft: '3px' }} />
                      </div>

                      {/* Bottom placeholder label */}
                      <div
                        className="mono placeholder-label"
                        style={{
                          position: 'absolute',
                          bottom: '16px',
                          left: '12px',
                          right: '12px',
                          fontSize: '10px',
                          color: 'var(--muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          textAlign: 'center',
                          opacity: 0.85,
                          zIndex: 2,
                        }}
                      >
                        Click to Preview Template
                      </div>
                    </>
                  )}
                </div>

                {/* Card Meta Description */}
                <div
                  className="vmeta"
                  style={{
                    padding: '18px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      className="mono"
                      style={{
                        fontSize: '10.5px',
                        color: 'var(--violet)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                      }}
                    >
                      {video.category}
                    </span>

                    <span className="mono" style={{ fontSize: '10px', color: 'var(--muted)' }}>
                      9:16 UGC
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: '16px',
                      color: 'var(--text)',
                      marginBottom: '8px',
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {video.title}
                  </h4>

                  <p
                    className="desc"
                    style={{
                      fontSize: '13px',
                      color: 'var(--muted)',
                      lineHeight: 1.55,
                      marginBottom: '16px',
                      flexGrow: 1,
                    }}
                  >
                    {video.description}
                  </p>

                  {/* Tool chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {video.toolsUsed.map((t) => (
                      <span
                        key={t}
                        className="mono"
                        style={{
                          fontSize: '9.5px',
                          padding: '2px 7px',
                          borderRadius: '2px',
                          border: '1px solid var(--line)',
                          color: 'var(--text)',
                          background: 'var(--bg)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Modal Viewer */}
      <VideoModal project={activeProject} onClose={() => setActiveProject(null)} />

      <style>{`
        .vcard:hover {
          border-color: var(--violet-dim) !important;
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);
        }
        .vcard:hover .play-node {
          border-color: var(--violet) !important;
          color: var(--violet) !important;
          transform: scale(1.08);
          box-shadow: 0 0 16px rgba(139, 92, 246, 0.35);
        }
        @media (max-width: 960px) {
          .video-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .video-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
