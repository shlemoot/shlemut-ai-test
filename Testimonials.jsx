// Testimonial cards with source-colored right border.
const Testimonial = ({ source, sourceIcon, author, role, quote, color }) => (
  <div style={{
    background: 'rgba(255,255,255,.03)', border: '1px solid var(--glass-border)',
    borderRadius: 20, padding: 20, direction: 'rtl',
    borderRight: `3px solid ${color}`,
  }}>
    <div style={{
      display: 'inline-block', fontSize: '.68rem', fontWeight: 600, color: 'var(--gold)',
      background: 'rgba(212,168,67,.08)', border: '1px solid rgba(212,168,67,.15)',
      padding: '3px 10px', borderRadius: 20, marginBottom: 10,
    }}>{sourceIcon} {source}</div>
    <div style={{ fontSize: '.88rem', color: 'var(--muted-light)', lineHeight: 1.7, marginBottom: 10, fontStyle: 'italic' }}>"{quote}"</div>
    <div style={{ fontSize: '.8rem', fontWeight: 600 }}>{author}</div>
    {role && <div style={{ fontSize: '.72rem', color: 'var(--muted)' }}>{role}</div>}
  </div>
);

const Testimonials = () => {
  const items = [
    { source: 'פורום', sourceIcon: '📨', author: 'ישראלה', role: 'מעמדת ספרים', color: '#6c63ff',
      quote: 'הואו! אין מילים לשכלול המטאורי של העורך האולטימטיבי — חלום של כל מעמד באינדיזיין!' },
    { source: 'טופס יצירת קשר', sourceIcon: '✉', author: 'מרדכי', color: '#d4a843',
      quote: 'תודה רבה על הסקריפט המטורף ועוד בכזה מחיר! אתמול קניתי וכבר הספקתי להשתמש יותר מסקריפטים אחרים' },
    { source: 'הודעה', sourceIcon: '💬', author: 'סטודיו רימון', role: 'סטודיו עיצוב', color: '#25d366',
      quote: 'מהשימוש הראשוני זה נראה מדהים ביותר... הסקריפט הזה הולך להרוויח למשתמשים הרבה' },
  ];
  return (
    <section style={{ padding: '80px 0' }}>
      <Container>
        <SectionHeader tag="מה אומרים" title="מה כותבים עלינו בשטח" subtitle="צילומי מסך אמיתיים מלקוחות — פורומים, הודעות ומיילים" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {items.map(i => <Testimonial key={i.author} {...i} />)}
        </div>
      </Container>
    </section>
  );
};
Object.assign(window, { Testimonials, Testimonial });
