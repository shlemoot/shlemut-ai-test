// Contact + final CTA.
const Contact = () => (
  <section id="contact" style={{ padding: '80px 0' }}>
    <Container>
      <SectionHeader tag="צור קשר" title="תמיכה מלאה תוך 24 שעות בימי א-ה" subtitle="אנחנו כאן בשבילכם בימי ראשון עד חמישי — שאלות, בעיות, בקשות פיצ'רים." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, maxWidth: 760, margin: '0 auto' }}>
        {[
          { icon: '✉', title: 'אימייל', body: 'שלחו לנו מייל ונחזור אליכם תוך 24 שעות בימי א-ה.', link: 'לחצו לחשיפת כתובת המייל', href: 'mailto:shlmut@otzmashelkesher.co.il' },
          { icon: '📚', title: 'מדריכים והדרכה', body: 'מדריכי וידאו, תיעוד מלא ומדריך התחלה מהירה — הכל בעברית.', link: 'למרכז הידע', href: '#' },
        ].map((c, i) => (
          <div key={c.title} style={{
            background: 'var(--card)', border: '1px solid var(--glass-border)',
            borderRadius: 18, padding: 28, textAlign: 'center',
            animation: `featureFloat 6s ease-in-out infinite ${-i * 0.5}s`,
          }}>
            <div style={{ fontSize: '1.8rem', marginBottom: 10 }}>{c.icon}</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 6 }}>{c.title}</h3>
            <p style={{ fontSize: '.85rem', color: 'var(--muted-light)', marginBottom: 12 }}>{c.body}</p>
            <a href={c.href} style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '.9rem' }}>{c.link}</a>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const FinalCTA = () => (
  <section style={{ padding: '60px 0 80px' }}>
    <Container>
      <div style={{
        position: 'relative', overflow: 'hidden',
        borderRadius: 24, padding: '64px 32px', textAlign: 'center',
        background: 'linear-gradient(135deg,#1a1a22,#0f0f14)',
        border: '1.5px solid rgba(212,168,67,.3)',
      }}>
        <div style={{
          position: 'absolute', width: 400, height: 400, borderRadius: '50%', filter: 'blur(100px)', opacity: .35,
          background: 'var(--gold)', top: -150, left: '50%', transform: 'translateX(-50%)',
          animation: 'orbPulse 4s ease-in-out infinite',
        }} />
        <h2 style={{
          position: 'relative', fontSize: '2.2rem', fontWeight: 900, marginBottom: 14,
          background: 'linear-gradient(90deg,#ff0000,#ff8000,#ffff00,#00ff00,#00ffff,#0080ff,#8000ff,#ff0080,#ff0000)',
          backgroundSize: '300% 100%',
          WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          animation: 'rgbText 6s linear infinite',
        }}>מוכנים לשנות את דרך העבודה?</h2>
        <p style={{ position: 'relative', color: 'var(--muted-light)', fontSize: '1rem', maxWidth: 640, margin: '0 auto 24px' }}>
          הצטרפו למעמדים, מעצבים והוצאות לאור שכבר עובדים חכם. עימוד ספר שלם בלחיצת כפתור — זו לא עתידנות, זו המציאות.
        </p>
        <Button variant="primary" href="#download">התחילו בחינם עכשיו</Button>
      </div>
    </Container>
  </section>
);
Object.assign(window, { Contact, FinalCTA });
