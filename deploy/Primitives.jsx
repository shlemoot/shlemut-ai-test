// Shared primitives for Studio Shlemut AI site UI kit.
const Container = ({ children, style }) => (
  <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px', ...style }}>{children}</div>
);

const SectionTag = ({ children }) => (
  <div style={{
    position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 8,
    fontSize: '.72rem', fontWeight: 800,
    textTransform: 'uppercase', letterSpacing: '1.8px',
    color: '#0a0a0a',
    background: 'linear-gradient(90deg,#d4a843,#f5d87a,#d4a843,#f5d87a)',
    backgroundSize: '300% 100%',
    border: '1.5px solid rgba(212,168,67,.6)',
    padding: '7px 18px', borderRadius: 30, marginBottom: 14,
    boxShadow: '0 0 0 1px rgba(212,168,67,.2), 0 8px 24px -6px rgba(212,168,67,.6)',
    animation: 'tagBorderRun 3s linear infinite, tagFloat 4s ease-in-out infinite',
  }}>
    <span style={{
      width: 7, height: 7, borderRadius: '50%', background: '#0a0a0a',
      animation: 'tagPulse 1.8s ease-in-out infinite',
    }} />
    {children}
  </div>
);

const SectionHeader = ({ tag, title, subtitle, rgb }) => (
  <div style={{ textAlign: 'center' }}>
    <SectionTag>{tag}</SectionTag>
    <h2 style={{
      fontSize: '2rem', fontWeight: 800, margin: '0 0 10px',
      lineHeight: 1.3,
      ...(rgb ? {
        background: 'linear-gradient(90deg,#ff0000,#ff8000,#ffff00,#00ff00,#00ffff,#0080ff,#8000ff,#ff0080,#ff0000)',
        backgroundSize: '300% 100%',
        WebkitBackgroundClip: 'text', backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'rgbText 6s linear infinite',
      } : {}),
    }}>{title}</h2>
    {subtitle && <p style={{ color: 'var(--muted-light)', fontSize: '.95rem', maxWidth: 540, margin: '0 auto 40px' }}>{subtitle}</p>}
  </div>
);

const Button = ({ variant = 'primary', children, onClick, href, style }) => {
  const styles = {
    primary: {
      background: 'linear-gradient(135deg,#d4a843,#e8c460)', color: '#000',
      padding: '14px 36px', borderRadius: 40, fontSize: '.95rem', fontWeight: 700,
      boxShadow: '0 4px 20px rgba(212,168,67,.25)',
      border: 'none', cursor: 'pointer',
    },
    outline: {
      background: 'transparent', color: 'var(--text)',
      padding: '14px 36px', borderRadius: 40, fontSize: '.95rem', fontWeight: 600,
      border: '1.5px solid rgba(255,255,255,.08)', cursor: 'pointer',
    },
    ghost: {
      background: 'rgba(212,168,67,.1)', color: 'var(--gold)',
      padding: '10px', borderRadius: 14, fontSize: '.85rem', fontWeight: 700,
      border: '1px solid rgba(212,168,67,.2)', cursor: 'pointer', display: 'block', textAlign: 'center',
    },
    nav: {
      background: 'var(--gold)', color: '#000', padding: '6px 18px',
      borderRadius: 20, fontSize: '.8rem', fontWeight: 700, border: 'none', cursor: 'pointer',
    },
    popularGhost: {
      background: 'var(--gold)', color: '#000',
      padding: '10px', borderRadius: 14, fontSize: '.85rem', fontWeight: 700,
      border: 'none', cursor: 'pointer', display: 'block', textAlign: 'center',
    },
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', fontFamily: 'inherit', transition: 'all .3s', ...styles[variant], ...style }}>
      {children}
    </Tag>
  );
};

const GoldBadge = ({ children }) => (
  <div style={{
    display: 'inline-block', background: 'linear-gradient(135deg,#d4a843,#e8c460)',
    color: '#000', fontSize: '.8rem', fontWeight: 700,
    padding: '4px 14px', borderRadius: 20, marginBottom: 16,
  }}>{children}</div>
);

Object.assign(window, { Container, SectionTag, SectionHeader, Button, GoldBadge });
