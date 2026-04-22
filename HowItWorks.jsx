// 4-step how-it-works row.
const HowItWorks = () => {
  const steps = [
    { n: 1, title: 'הורדה', body: 'מורידים את הקובץ ומעתיקים לתיקיית התוספים' },
    { n: 2, title: 'הפעלה', body: 'פותחים אינדיזיין מחדש ומפעילים את הפאנל' },
    { n: 3, title: 'חיבור AI', body: 'מתחילים עם 10 נקודות חינם — מיד עם ההתקנה' },
    { n: 4, title: 'עובדים חכם', body: 'AI + 40 כלים = עימוד מקצועי בזמן שיא' },
  ];
  return (
    <section id="how" style={{ padding: '80px 0' }}>
      <Container>
        <SectionHeader tag="איך זה עובד" title="4 צעדים וזהו" subtitle="מהתקנה ועד עימוד אוטומטי — בפחות מ-5 דקות" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 20 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              position: 'relative', padding: '36px 24px 28px',
              background: 'linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.015))',
              border: '1px solid rgba(255,255,255,.08)', borderRadius: 18,
              textAlign: 'center',
              animation: `featureFloat 6s ease-in-out infinite ${-i * 0.5}s`,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(135deg,#d4a843,#e8c460)',
                color: '#0a0a0a', fontWeight: 900, fontSize: '1.2rem',
                marginBottom: 14,
                boxShadow: '0 6px 24px -4px rgba(212,168,67,.6)',
                animation: 'orbPulse 3.5s ease-in-out infinite',
              }}>{s.n}</div>
              <h3 style={{ fontSize: '1.08rem', fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--muted-light)', lineHeight: 1.65 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
Object.assign(window, { HowItWorks });
