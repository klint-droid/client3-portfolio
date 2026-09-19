import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, ArrowUpRight, ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { WhatsAppPromptModal } from './WhatsAppPromptModal';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{
        padding: '110px 0 60px',
        position: 'relative',
        background: `
          radial-gradient(600px 300px at 50% 0%, rgba(139, 92, 246, 0.12), transparent 70%),
          var(--bg)
        `,
        borderTop: '1px solid var(--line)',
      }}
    >
      <div className="wrap">
        {/* Section Header */}
        <div className="section-tag" style={{ marginBottom: '20px' }}>
          <Sparkles size={14} />
          05 — Get In Touch
        </div>

        <h2
          className="contact-title"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: 'clamp(32px, 5.5vw, 64px)',
            letterSpacing: '-1.5px',
            lineHeight: 1.05,
            maxWidth: '820px',
            color: 'var(--text)',
          }}
        >
          Have an E-commerce or UGC video in mind?
        </h2>

        <p
          className="contact-sub"
          style={{
            color: 'var(--muted)',
            marginTop: '22px',
            maxWidth: '560px',
            fontSize: '16px',
            lineHeight: 1.6,
          }}
        >
          Send a brief or product link, and I'll outline what the script-to-screen AI video process looks like for your brand.
        </p>

        {/* Contact Action Cards */}
        <div
          style={{
            display: 'flex',
            gap: '18px',
            marginTop: '44px',
            flexWrap: 'wrap',
          }}
        >
          {/* WhatsApp Button with App / Web Prompt */}
          <button
            onClick={() => setShowWhatsAppModal(true)}
            className="btn btn-flame"
            style={{
              padding: '16px 28px',
              fontSize: '13px',
              borderRadius: '3px',
              cursor: 'pointer',
            }}
          >
            <MessageCircle size={18} />
            <span>WhatsApp: {PERSONAL_INFO.contact.whatsappNumber}</span>
            <ArrowUpRight size={16} />
          </button>

          {/* Email Direct Link */}
          <a
            href={`mailto:${PERSONAL_INFO.contact.email}`}
            className="btn btn-line"
            style={{
              padding: '16px 24px',
              fontSize: '13px',
              borderRadius: '3px',
            }}
          >
            <Mail size={18} />
            <span>{PERSONAL_INFO.contact.email}</span>
          </a>

          {/* Quick Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="btn btn-line"
            style={{
              padding: '16px 20px',
              fontSize: '13px',
              borderRadius: '3px',
              color: copied ? 'var(--green)' : 'var(--text)',
              borderColor: copied ? 'var(--green)' : 'var(--line)',
            }}
            title="Copy email address"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
          </button>
        </div>

        {/* Availability Badge */}
        <div
          style={{
            marginTop: '34px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'var(--panel)',
            border: '1px solid var(--line)',
            padding: '8px 16px',
            borderRadius: '4px',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--green)',
              boxShadow: '0 0 8px var(--green)',
            }}
          />
          <span className="mono" style={{ fontSize: '11px', color: 'var(--text)', letterSpacing: '0.5px' }}>
            {PERSONAL_INFO.contact.availability} • {PERSONAL_INFO.contact.location}
          </span>
        </div>

        {/* Decorative Filmstrip */}
        <div
          className="filmstrip"
          style={{
            marginTop: '80px',
            display: 'flex',
            gap: '6px',
            height: '14px',
            alignItems: 'center',
            opacity: 0.7,
          }}
        >
          {Array.from({ length: 45 }).map((_, i) => (
            <div key={i} className="hole" />
          ))}
        </div>

        {/* Bottom Footer Bar */}
        <div
          className="foot-bottom"
          style={{
            marginTop: '28px',
            paddingTop: '28px',
            borderTop: '1px solid var(--line)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
          }}
        >
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name} — AI Video Specialist
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>E-Commerce UGC &amp; Digital Video Production</span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--violet)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--violet)')}
            >
              Back to top
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp App vs Web Prompt Modal */}
      <WhatsAppPromptModal
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
      />
    </footer>
  );
};
