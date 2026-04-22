// Script marketplace section.
const Marketplace = () => {
  const cards = [
    { icon: '🚀', title: 'צרו סקריפטים ומכרו', body: 'העלו סקריפטים לחנות, קבעו מחיר — והתחילו להרוויח.' },
    { icon: '💰', title: '70% עמלה ליוצרים', body: 'בלי עלויות הצטרפות, בלי מינימום. הכסף מגיע ישירות אליכם.' },
    { icon: '🌱', title: 'קהילה של יוצרים', body: 'הצטרפו לקהילת מפתחים ומעצבים שמשתפים ידע ובונים כלים.' },
  ];
  return (
    <section id="marketplace" style={{ padding: '80px 0' }}>
      <Container>
        <SectionHeader tag="חנות סקריפטים" title="שוק הסקריפטים הראשון לאינדיזיין" subtitle="מהפכה בעולם האוטומציה — כל אחד יכול ליצור, למכור ולהרוויח" rgb />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 32 }}>
          {cards.map(c => (
            <div key={c.title} style={{ background: 'var(--card)', border: '1px solid var(--glass-border)', borderRadius: 20, padding: 32, textAlign: 'center', backdropFilter: 'blur(20px)' }}>
              <div style={{ fontSize: '2.4rem', marginBottom: 14 }}>{c.icon}</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{c.title}</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--muted-light)', lineHeight: 1.65 }}>{c.body}</p>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 40, textAlign: 'center', padding: '40px 32px', maxWidth: 800, marginInline: 'auto',
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(rgba(28,28,30,.9),rgba(28,28,30,.9)),linear-gradient(90deg,#ff0000,#ff8000,#ffff00,#00ff00,#00ffff,#8000ff,#ff0080,#ff0000)',
          backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box',
          backgroundSize: '100% 100%, 300% 100%',
          borderRadius: 20,
          animation: 'rgbHighlight 6s linear infinite',
        }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 10, color: 'var(--gold)' }}>💡 למה זה מהפכני?</h3>
          <p style={{ fontSize: '.9rem', color: 'var(--muted-light)', lineHeight: 1.75 }}>
            הפלטפורמה הראשונה שמאחדת הכל — חנות אפליקציות לסקריפטים, ישירות מתוך אינדיזיין. כמו App Store, רק לעימוד.
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 24, flexWrap: 'wrap' }}>
            {[['70%','עמלה ליוצרים'],['$0','עלות הצטרפות'],['1-Click','התקנה מיידית'],['✅','בדיקת איכות']].map(([n,l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold)', display: 'block' }}>{n}</span>
                <span style={{ fontSize: '.75rem', color: 'var(--muted)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
Object.assign(window, { Marketplace });
