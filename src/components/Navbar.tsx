import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { EmailInquiryModal } from './EmailInquiryModal';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(11, 11, 14, 0.92)' : 'rgba(11, 11, 14, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--line)',
        transition: 'background 0.2s ease, border-color 0.2s ease',
      }}
    >
      <div className="wrap">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: '16px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>CHRISTIAN</span>
            <span style={{ color: 'var(--flame)' }}>JAMES</span>
            <span
              className="mono"
              style={{
                fontSize: '10px',
                padding: '2px 6px',
                borderRadius: '3px',
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid var(--violet-dim)',
                color: 'var(--violet)',
                marginLeft: '6px',
                letterSpacing: '0.8px',
                fontWeight: 600,
              }}
            >
              AI UGC
            </span>
          </a>

          {/* Desktop Navlinks */}
          <div
            className="navlinks-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
              fontSize: '12px',
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
            }}
          >
            <a
              href="#about"
              style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              About
            </a>
            <a
              href="#process"
              style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              Process
            </a>
            <a
              href="#work"
              style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              Work
            </a>
            <a
              href="#tools"
              style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              Tools
            </a>
            <a
              href="#contact"
              style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              Contact
            </a>

            <button
              onClick={() => setShowEmailModal(true)}
              className="btn btn-solid btn-sm"
              style={{ marginLeft: '12px', cursor: 'pointer' }}
            >
              <Mail size={14} />
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              padding: '8px',
              color: 'var(--text)',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--panel)',
            borderBottom: '1px solid var(--line)',
            padding: '24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text)', padding: '6px 0' }}
          >
            01 — About
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text)', padding: '6px 0' }}
          >
            02 — Process
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text)', padding: '6px 0' }}
          >
            03 — Selected Work
          </a>
          <a
            href="#tools"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text)', padding: '6px 0' }}
          >
            04 — Tools
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: 'var(--text)', padding: '6px 0' }}
          >
            05 — Contact
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setShowEmailModal(true);
            }}
            className="btn btn-flame"
            style={{ marginTop: '10px', textAlign: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <Mail size={16} />
            Let's Talk ({PERSONAL_INFO.contact.email})
          </button>
        </div>
      )}

      {/* Email Inquiry Modal (Templated or Custom) */}
      <EmailInquiryModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
      />

      <style>{`
        @media (max-width: 768px) {
          .navlinks-desktop {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};
