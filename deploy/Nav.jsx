// Fixed top nav with brand logo and gold CTA.
const Nav = ({ onDownload }) => (
  <nav style={{
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    background: 'rgba(0,0,0,.72)',
    backdropFilter: 'saturate(180%) blur(20px)',
    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
    borderBottom: '1px solid rgba(255,255,255,.08)',
  }}>
    <div style={{
      maxWidth: 1080, margin: '0 auto', padding: '0 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 52,
    }}>
      <div style={{ fontSize: '.95rem', fontWeight: 700, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <img src="assets/images/logo-nav.gif" alt="לוגו" style={{ height: 28, borderRadius: 6 }} />
        עורך AI אולטימטיבי
      </div>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        {['יכולות', 'צילומי מסך', 'חנות סקריפטים', 'מחירים', 'שאלות'].map(l =>
          <a key={l} href="#" style={{ fontSize: '.82rem', color: 'var(--muted)', fontWeight: 500, textDecoration: 'none' }}>{l}</a>
        )}
        <Button variant="nav" onClick={onDownload}>הורדה חינם</Button>
      </div>
    </div>
  </nav>
);
Object.assign(window, { Nav });
