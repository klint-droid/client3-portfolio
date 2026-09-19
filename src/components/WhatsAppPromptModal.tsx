import React, { useState, useEffect } from 'react';
import { X, Smartphone, Globe, MessageCircle, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface WhatsAppPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppPromptModal: React.FC<WhatsAppPromptModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const phoneFormatted = "639165341310";
  const defaultMessage = encodeURIComponent("Hi Christian, I saw your portfolio and would like to discuss an AI video project!");
  
  // App deep link (opens native desktop/mobile app)
  const appUrl = `whatsapp://send?phone=${phoneFormatted}&text=${defaultMessage}`;
  // Web browser URL (opens WhatsApp Web directly in a browser tab)
  const webUrl = `https://web.whatsapp.com/send?phone=${phoneFormatted}&text=${defaultMessage}`;
  // Universal fallback link
  const universalUrl = `https://wa.me/${phoneFormatted}?text=${defaultMessage}`;

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.whatsappNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenApp = () => {
    // Attempt to open the app protocol, with fallback
    window.location.href = appUrl;
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(5, 5, 8, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          background: 'var(--panel)',
          border: '1px solid var(--line)',
          borderRadius: '8px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
          overflow: 'hidden',
          animation: 'modalFadeIn 0.2s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '18px 22px',
            borderBottom: '1px solid var(--line)',
            background: 'var(--bg)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(37, 211, 102, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#25D366',
              }}
            >
              <MessageCircle size={18} />
            </div>
            <div>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '15px', color: 'var(--text)' }}>
                Connect on WhatsApp
              </div>
              <div className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>
                Choose your preferred way to chat
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '6px',
              color: 'var(--muted)',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Options Body */}
        <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Option 1: WhatsApp App */}
          <button
            onClick={handleOpenApp}
            className="whatsapp-option-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 18px',
              borderRadius: '6px',
              background: 'rgba(22, 22, 27, 0.8)',
              border: '1px solid var(--line)',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '6px',
                  background: 'rgba(37, 211, 102, 0.12)',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25D366',
                  flexShrink: 0,
                }}
              >
                <Smartphone size={22} />
              </div>
              <div>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '15px', color: 'var(--text)', marginBottom: '3px' }}>
                  Use WhatsApp App
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.4 }}>
                  Launch installed app on mobile or desktop
                </div>
              </div>
            </div>
            <ArrowUpRight size={18} color="#25D366" />
          </button>

          {/* Option 2: WhatsApp Web (Browser) */}
          <a
            href={webUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="whatsapp-option-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 18px',
              borderRadius: '6px',
              background: 'rgba(22, 22, 27, 0.8)',
              border: '1px solid var(--line)',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '6px',
                  background: 'rgba(139, 92, 246, 0.12)',
                  border: '1px solid var(--violet-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--violet)',
                  flexShrink: 0,
                }}
              >
                <Globe size={22} />
              </div>
              <div>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '15px', color: 'var(--text)', marginBottom: '3px' }}>
                  Use WhatsApp Web
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.4 }}>
                  Open directly in your web browser tab
                </div>
              </div>
            </div>
            <ArrowUpRight size={18} color="var(--violet)" />
          </a>

          {/* Fallback Universal Link */}
          <a
            href={universalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mono"
            style={{
              fontSize: '11px',
              color: 'var(--muted)',
              textAlign: 'center',
              marginTop: '4px',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Or open via standard wa.me link
          </a>
        </div>

        {/* Modal Footer: Copy Number */}
        <div
          style={{
            padding: '14px 22px',
            background: 'var(--bg)',
            borderTop: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>
            Phone: <span style={{ color: 'var(--text)' }}>{PERSONAL_INFO.contact.whatsappNumber}</span>
          </div>

          <button
            onClick={handleCopyNumber}
            className="btn btn-line btn-sm"
            style={{
              padding: '6px 12px',
              fontSize: '11px',
              color: copied ? 'var(--green)' : 'var(--text)',
              borderColor: copied ? 'var(--green)' : 'var(--line)',
            }}
          >
            {copied ? <Check size={13} /> : <Copy size={13} />}
            <span>{copied ? 'Copied!' : 'Copy Number'}</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .whatsapp-option-btn:hover {
          border-color: var(--line-light) !important;
          background: var(--panel-2) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};
