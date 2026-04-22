// Hero: centered text on top, big promo video below buttons (full width).
const Hero = () => (
  <section style={{ padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
    <div style={{
      position: 'absolute', inset: 0, zIndex: 0,
      background: 'radial-gradient(ellipse 60% 50% at 50% 0%,rgba(212,168,67,.08),transparent), radial-gradient(ellipse 40% 40% at 20% 80%,rgba(108,99,255,.06),transparent), radial-gradient(ellipse 40% 40% at 80% 80%,rgba(212,168,67,.04),transparent)',
    }}>
      <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', filter: 'blur(80px)', opacity: .3, background: 'var(--gold)', top: -80, right: '10%', animation: 'float 8s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', filter: 'blur(80px)', opacity: .3, background: 'var(--accent)', bottom: '10%', left: '5%', animation: 'float 8s ease-in-out infinite', animationDelay: '3s' }} />
    </div>
    <Container style={{ position: 'relative', zIndex: 1 }}>
      {/* Headline block — centered */}
      <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'inline-block', fontSize: '.75rem', fontWeight: 600, color: 'var(--gold)', background: 'rgba(212,168,67,.1)', border: '1px solid rgba(212,168,67,.2)', padding: '6px 20px', borderRadius: 40, marginBottom: 22 }}>
          התוסף שכבש את שוק העימוד בישראל
        </div>
        <h1 style={{
          fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.12, margin: '0 0 22px',
          background: 'linear-gradient(90deg,#ff0000,#ff8000,#ffff00,#00ff00,#00ffff,#0080ff,#8000ff,#ff0080,#ff0000)',
          backgroundSize: '300% 100%',
          WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'rgbText 6s linear infinite',
        }}>עימוד ספר שלם בלחיצת כפתור</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--muted-light)', maxWidth: 720, margin: '0 auto 34px', lineHeight: 1.8 }}>
          שכחו מעבודה ידנית. עורך AI אולטימטיבי הופך את אדובי אינדיזיין למכונה אוטומטית — AI חכם שמבין עברית, 40+ כלים אוטומטיים, ותמלול קולי.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="primary" href="#download">התחילו בחינם — 10 נקודות ביום</Button>
          <Button variant="outline" href="#features">גלו את היכולות</Button>
        </div>
        <div style={{ display: 'flex', gap: 28, marginTop: 28, fontSize: '.82rem', color: 'var(--muted)', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['10 נקודות AI חינם כל יום', 'כלים אופליין ללא הגבלה', 'תמיכה תוך 24 שעות'].map(t => (
            <span key={t}><span style={{ display: 'inline-block', width: 6, height: 6, background: 'var(--green)', borderRadius: '50%', marginLeft: 6, verticalAlign: 'middle' }} />{t}</span>
          ))}
        </div>
      </div>

      {/* ════════ PROMO VIDEO — large, below buttons ════════ */}
      <div style={{
        marginTop: 70,
        display: 'flex', justifyContent: 'center',
        position: 'relative',
      }}>
        {/* Glow behind video */}
        <div style={{
          position: 'absolute', inset: -30,
          background: 'radial-gradient(ellipse at center, rgba(212,168,67,.28), rgba(108,99,255,.15) 40%, transparent 65%)',
          filter: 'blur(50px)', zIndex: 0, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'relative', zIndex: 1,
          width: '100%', maxWidth: 1080,
          aspectRatio: '16 / 9',
          borderRadius: 24,
          overflow: 'hidden',
          background: '#0a0a0a',
          border: '1.5px solid rgba(212,168,67,.35)',
          boxShadow: '0 30px 90px rgba(0,0,0,.7), 0 0 0 1px rgba(212,168,67,.12), 0 0 80px rgba(212,168,67,.15)',
        }}>
          <iframe
            src="promo-embed.html"
            title="סרטון הפרומו של שלמות AI"
            allow="autoplay; fullscreen"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          />
          {/* Corner label */}
          <div style={{
            position: 'absolute', top: 14, right: 14,
            fontSize: '.7rem', color: 'rgba(255,255,255,.85)', fontWeight: 700,
            background: 'rgba(0,0,0,.55)', padding: '5px 14px', borderRadius: 999,
            border: '1px solid rgba(212,168,67,.35)',
            backdropFilter: 'blur(8px)', pointerEvents: 'none',
            letterSpacing: '.3px',
          }}>🎬 סרטון הצגה</div>
        </div>
      </div>
    </Container>
  </section>
);
Object.assign(window, { Hero });
