import React, { useState, useEffect } from 'react';
import { X, Play, Mail } from 'lucide-react';
import type { VideoProject } from '../data/portfolioData';
import { EmailInquiryModal } from './EmailInquiryModal';

interface VideoModalProps {
  project: VideoProject | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isEmbed = project.videoUrl && (project.videoUrl.includes('drive.google.com') || project.videoUrl.includes('youtube.com') || project.videoUrl.includes('vimeo.com'));

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        background: 'rgba(5, 5, 8, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '520px',
          background: 'var(--panel)',
          border: '1px solid var(--line)',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px',
            borderBottom: '1px solid var(--line)',
            background: 'var(--bg)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              className="mono"
              style={{
                fontSize: '11px',
                color: 'var(--flame)',
                background: 'rgba(255, 90, 54, 0.1)',
                padding: '2px 8px',
                borderRadius: '2px',
              }}
            >
              {project.timecode}
            </span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>
              {project.title}
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '6px',
              color: 'var(--muted)',
              borderRadius: '4px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Area (Vertical 9:16) */}
        <div
          style={{
            aspectRatio: '9/16',
            width: '100%',
            maxHeight: '65vh',
            background: 'var(--bg)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {project.videoUrl ? (
            isEmbed ? (
              <iframe
                src={project.videoUrl}
                title={project.title}
                width="100%"
                height="100%"
                allow="autoplay; fullscreen"
                style={{ border: 'none', width: '100%', height: '100%' }}
              />
            ) : (
              <video
                src={project.videoUrl}
                controls
                autoPlay
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            )
          ) : (
            /* Template Placeholder Viewport */
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '30px',
                textAlign: 'center',
                height: '100%',
                width: '100%',
                background: 'radial-gradient(circle at center, var(--panel-2) 0%, var(--bg) 90%)',
              }}
            >
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--violet)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--violet)',
                  marginBottom: '20px',
                  boxShadow: '0 0 24px rgba(139, 92, 246, 0.2)',
                }}
              >
                <Play size={28} fill="currentColor" style={{ marginLeft: '3px' }} />
              </div>

              <div
                className="mono"
                style={{
                  fontSize: '12px',
                  color: 'var(--flame)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Video Slot Ready
              </div>

              <h4 style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '18px', color: 'var(--text)', marginBottom: '8px' }}>
                {project.title}
              </h4>

              <p style={{ fontSize: '13px', color: 'var(--muted)', maxWidth: '320px', lineHeight: 1.5, marginBottom: '24px' }}>
                {project.description}
              </p>

              <div
                className="mono"
                style={{
                  fontSize: '11px',
                  color: 'var(--muted)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px dashed var(--line)',
                  padding: '10px 16px',
                  borderRadius: '4px',
                  maxWidth: '300px',
                }}
              >
                📁 To link your video file, drop your Google Drive or MP4 URL into <code>portfolioData.ts</code>
              </div>
            </div>
          )}
        </div>

        {/* Footer Meta */}
        <div
          style={{
            padding: '18px 20px',
            background: 'var(--panel)',
            borderTop: '1px solid var(--line)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span
              className="mono"
              style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                color: 'var(--violet)',
                letterSpacing: '1px',
              }}
            >
              Category: {project.category}
            </span>
            <div style={{ display: 'flex', gap: '6px' }}>
              {project.toolsUsed.map((t) => (
                <span
                  key={t}
                  className="mono"
                  style={{
                    fontSize: '10px',
                    padding: '2px 6px',
                    background: 'var(--bg)',
                    border: '1px solid var(--line)',
                    borderRadius: '2px',
                    color: 'var(--text)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '14px' }}>
            {project.description}
          </p>

          <button
            onClick={() => setShowEmailModal(true)}
            className="btn btn-flame btn-sm"
            style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
          >
            <Mail size={14} />
            Inquire via Email
          </button>
        </div>
      </div>

      {/* Email Inquiry Modal */}
      <EmailInquiryModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        initialSubject={`Inquiry regarding ${project.title}`}
      />
    </div>
  );
};
