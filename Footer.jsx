// Footer.
const Footer = () => (
  <footer style={{ padding: '48px 0 32px', borderTop: '1px solid var(--glass-border)' }}>
    <Container>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, marginBottom: 32 }}>
        <div>
          <img src="assets/images/logo-nav.gif" alt="לוגו" style={{ height: 36, borderRadius: 8, marginBottom: 6, display: 'block' }} />
          <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 4 }}>עורך AI אולטימטיבי</h4>
          <p style={{ fontSize: '.8rem', color: 'var(--muted)', lineHeight: 1.6 }}>התוסף החכם ביותר לאדובי אינדיזיין</p>
        </div>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {['יכולות', 'מחירים', 'שאלות נפוצות', 'צור קשר'].map(l => (
            <a key={l} href="#" style={{ fontSize: '.82rem', color: 'var(--muted)', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center', paddingTop: 24, borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ fontSize: '.78rem', color: 'var(--muted)' }}>© 2024-2026 עורך AI אולטימטיבי. כל הזכויות שמורות.</p>
      </div>
    </Container>
  </footer>
);
Object.assign(window, { Footer });
