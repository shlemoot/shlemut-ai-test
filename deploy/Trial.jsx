// Free-trial band.
const Trial = () => (
  <section style={{ padding: '40px 0' }}>
    <Container>
      <div style={{
        position: 'relative', overflow: 'hidden',
        borderRadius: 22, padding: '40px 32px', textAlign: 'center',
        background: 'linear-gradient(135deg,rgba(212,168,67,.12),rgba(108,99,255,.08))',
        border: '1.5px solid rgba(212,168,67,.3)',
      }}>
        <div style={{
          position: 'absolute', width: 260, height: 260, borderRadius: '50%', filter: 'blur(80px)', opacity: .35,
          background: 'var(--gold)', top: -100, right: -60,
          animation: 'orbit 10s ease-in-out infinite',
        }} />
        <h3 style={{ position: 'relative', fontSize: '1.4rem', fontWeight: 800, marginBottom: 8 }}>
          חינם לנצח — 10 נקודות AI כל יום, בלי התחייבות
        </h3>
        <p style={{ position: 'relative', color: 'var(--muted-light)', fontSize: '.95rem', maxWidth: 640, margin: '0 auto 18px' }}>
          מונה שעות ללא הגבלה + כלים בסיסיים + Gemini Flash AI. נגמרו הנקודות? שדרגו מ-$5 בלבד או קנו חבילת נקודות חד-פעמית.
        </p>
        <Button variant="primary" href="#download">אני רוצה לנסות</Button>
      </div>
    </Container>
  </section>
);
Object.assign(window, { Trial });
