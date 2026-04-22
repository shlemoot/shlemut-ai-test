// Download box with RGB border CTA.
const Download = () => (
  <section id="download" style={{ padding: '80px 0' }}>
    <Container>
      <div style={{
        maxWidth: 600, margin: '0 auto', textAlign: 'center',
        background: 'var(--card)', border: '1px solid var(--glass-border)',
        borderRadius: 20, padding: '48px 36px', backdropFilter: 'blur(20px)',
      }}>
        <GoldBadge>🎁 גרסה 10 — חינם לתקופה מוגבלת!</GoldBadge>
        <h2 style={{ fontSize: '1.6rem', marginBottom: 8 }}>הורדה חינם</h2>
        <p style={{ color: 'var(--muted-light)', fontSize: '.92rem', marginBottom: 24, lineHeight: 1.6 }}>
          הורידו את התוסף + מפתח רישיון אישי + מדריך התקנה מלא בעברית.
        </p>
        <a href="#" style={{
          display: 'inline-block', textAlign: 'center', textDecoration: 'none',
          background: 'rgba(20,20,24,.8)', color: '#fff',
          border: '2px solid rgba(212,168,67,.4)',
          padding: '18px 44px', borderRadius: 12,
          fontSize: '1.1rem', fontWeight: 700, position: 'relative', overflow: 'hidden',
          backdropFilter: 'blur(10px)', letterSpacing: '.5px', marginTop: 18,
        }}>
          <span style={{
            background: 'linear-gradient(90deg,#ff0000,#ff8000,#ffff00,#00ff00,#00ffff,#8000ff,#ff0080,#ff0000)',
            backgroundSize: '300% 100%',
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'rgbText 5s linear infinite',
          }}>הורדה חינם — Studio Shlemut AI v10</span>
        </a>
        <div style={{ marginTop: 14, fontSize: '.72rem', color: 'var(--muted)' }}>
          ✅ כולל מפתח רישיון • ✅ התקנה בלחיצה אחת • ✅ תמיכה מלאה בעברית
        </div>
      </div>
    </Container>
  </section>
);
Object.assign(window, { Download });
