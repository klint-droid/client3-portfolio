import React, { useState, useEffect } from 'react';
import { X, Mail, Send, Copy, Check, Sparkles, ExternalLink, Edit3 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface EmailInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

interface TemplateOption {
  id: string;
  label: string;
  icon: string;
  subject: string;
  body: string;
}

const TEMPLATES: TemplateOption[] = [
  {
    id: 'ugc-ad',
    label: 'E-Com UGC Ads',
    icon: '🛍️',
    subject: 'Inquiry: E-Commerce UGC Video Ads',
    body: `Hi Christian,

I'm interested in working with you on AI-powered UGC video ads for our e-commerce store.

Brand / Product: [Your Brand Name or Product Link]
Target Platform: [TikTok / Meta / Instagram Reels]
Quantity Needed: [e.g., 3-5 video variations]
Timeline: [e.g., 1-2 weeks]

Looking forward to hearing about your process and pricing!

Best,
[Your Name]`
  },
  {
    id: 'product-showcase',
    label: 'Product Showcase',
    icon: '📦',
    subject: 'Inquiry: AI Product Showcase Video',
    body: `Hi Christian,

We have a product launching soon and would love high-end AI visuals and dynamic product videos to showcase its features.

Product Link / Assets: [Link or details]
Primary Goal: [Website conversion / Ad campaign / Social media]
Estimated Budget: [Optional]

Could you share your availability and turnaround time?

Thanks,
[Your Name]`
  },
  {
    id: 'ai-avatar',
    label: 'AI Spokesperson / Avatar',
    icon: '🤖',
    subject: 'Inquiry: AI Avatar & Spokesperson UGC',
    body: `Hi Christian,

We need realistic AI avatar / spokesperson videos for customer-facing product reviews and testimonials.

Format: [Customer review / How-to demo / Promotional pitch]
Language / Accent: [e.g., US English / Neutral]
Script status: [We have scripts / Need you to write scripts]

Let me know what you need from our end to get started!

Best regards,
[Your Name]`
  },
  {
    id: 'retainer',
    label: 'Monthly Retainer',
    icon: '⚡',
    subject: 'Inquiry: Monthly Video Production Retainer',
    body: `Hi Christian,

Our team is looking for an ongoing AI Video Specialist on a monthly retainer basis to generate continuous ad creatives and short-form content.

Monthly Volume: [e.g., 8-15 clips per month]
Brand Niche: [e.g., Fashion / Beauty / Tech / Fitness]
Start Date: [e.g., Immediate / Next Month]

Let's schedule a call or discussion about retainer packages.

Cheers,
[Your Name]`
  }
];

export const EmailInquiryModal: React.FC<EmailInquiryModalProps> = ({
  isOpen,
  onClose,
  initialSubject,
}) => {
  const [activeTab, setActiveTab] = useState<'templated' | 'manual'>('templated');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('ugc-ad');
  
  // Form State
  const [subject, setSubject] = useState(initialSubject || TEMPLATES[0].subject);
  const [message, setMessage] = useState(TEMPLATES[0].body);
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

  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
      setMessage(`Hi Christian,\n\nI'm reaching out regarding: ${initialSubject}.\n\nBrand / Product Details:\n[Insert details here]\n\nLet me know your availability!`);
      setActiveTab('manual');
    }
  }, [initialSubject]);

  if (!isOpen) return null;

  const handleSelectTemplate = (template: TemplateOption) => {
    setSelectedTemplateId(template.id);
    setSubject(template.subject);
    setMessage(template.body);
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.contact.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  const handleCopyMessage = () => {
    const fullText = `To: ${PERSONAL_INFO.contact.email}\nSubject: ${subject}\n\n${message}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(5, 5, 8, 0.90)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          background: 'var(--panel)',
          border: '1px solid var(--line)',
          borderRadius: '8px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          animation: 'modalSlideUp 0.2s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 22px',
            borderBottom: '1px solid var(--line)',
            background: 'var(--bg)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '6px',
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid var(--violet-dim)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--violet)',
              }}
            >
              <Mail size={18} />
            </div>
            <div>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: '15px', color: 'var(--text)' }}>
                Send Inquiry to Christian
              </div>
              <div className="mono" style={{ fontSize: '11px', color: 'var(--muted)' }}>
                {PERSONAL_INFO.contact.email}
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

        {/* Mode Selector Tabs */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid var(--line)',
            background: 'rgba(11, 11, 14, 0.5)',
          }}
        >
          <button
            onClick={() => setActiveTab('templated')}
            style={{
              flex: 1,
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              cursor: 'pointer',
              background: activeTab === 'templated' ? 'var(--panel)' : 'transparent',
              color: activeTab === 'templated' ? 'var(--violet)' : 'var(--muted)',
              borderBottom: activeTab === 'templated' ? '2px solid var(--violet)' : '2px solid transparent',
              transition: 'all 0.2s ease',
            }}
          >
            <Sparkles size={14} />
            Pre-Made Templates
          </button>

          <button
            onClick={() => setActiveTab('manual')}
            style={{
              flex: 1,
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              cursor: 'pointer',
              background: activeTab === 'manual' ? 'var(--panel)' : 'transparent',
              color: activeTab === 'manual' ? 'var(--violet)' : 'var(--muted)',
              borderBottom: activeTab === 'manual' ? '2px solid var(--violet)' : '2px solid transparent',
              transition: 'all 0.2s ease',
            }}
          >
            <Edit3 size={14} />
            Custom Message
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div style={{ padding: '20px 22px', overflowY: 'auto', flex: 1 }}>
          {activeTab === 'templated' && (
            <div style={{ marginBottom: '18px' }}>
              <div className="mono" style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
                Select Project Template:
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '8px',
                }}
              >
                {TEMPLATES.map((tmpl) => {
                  const isSelected = selectedTemplateId === tmpl.id;
                  return (
                    <button
                      key={tmpl.id}
                      onClick={() => handleSelectTemplate(tmpl)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '4px',
                        border: isSelected ? '1px solid var(--violet)' : '1px solid var(--line)',
                        background: isSelected ? 'rgba(139, 92, 246, 0.12)' : 'var(--bg)',
                        color: isSelected ? '#ffffff' : 'var(--muted)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '12px',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>{tmpl.icon}</span>
                      <span style={{ fontWeight: isSelected ? 600 : 400 }}>{tmpl.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Subject Field */}
          <div style={{ marginBottom: '14px' }}>
            <label className="mono" style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                background: 'var(--bg)',
                border: '1px solid var(--line)',
                borderRadius: '4px',
                color: 'var(--text)',
                fontSize: '13.5px',
                fontFamily: "'Inter', sans-serif",
                outline: 'none',
              }}
              placeholder="Inquiry Subject..."
            />
          </div>

          {/* Message Field */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <label className="mono" style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase' }}>
                Message
              </label>
              <span className="mono" style={{ fontSize: '10px', color: 'var(--muted)' }}>
                Editable text
              </span>
            </div>
            <textarea
              rows={7}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                background: 'var(--bg)',
                border: '1px solid var(--line)',
                borderRadius: '4px',
                color: 'var(--text)',
                fontSize: '13px',
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.6,
                outline: 'none',
                resize: 'vertical',
              }}
              placeholder="Write your message here..."
            />
          </div>
        </div>

        {/* Modal Action Footer */}
        <div
          style={{
            padding: '16px 22px',
            background: 'var(--bg)',
            borderTop: '1px solid var(--line)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {/* Action 1: Send via Default Mail Client */}
            <a
              href={mailtoUrl}
              onClick={onClose}
              className="btn btn-flame"
              style={{ flex: 1, minWidth: '160px', padding: '12px 16px', fontSize: '12px' }}
            >
              <Send size={14} />
              <span>Send via Email App</span>
            </a>

            {/* Action 2: Open Gmail Web */}
            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="btn btn-line"
              style={{ flex: 1, minWidth: '140px', padding: '12px 16px', fontSize: '12px' }}
              title="Open Gmail in your web browser tab"
            >
              <ExternalLink size={14} />
              <span>Open in Gmail Web</span>
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
            <span className="mono" style={{ fontSize: '10.5px', color: 'var(--muted)' }}>
              Or copy text &amp; paste into any email app
            </span>

            <button
              onClick={handleCopyMessage}
              className="mono"
              style={{
                fontSize: '11px',
                color: copied ? 'var(--green)' : 'var(--violet)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 8px',
              }}
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Full Message'}</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};
