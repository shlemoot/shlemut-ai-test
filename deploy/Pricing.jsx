// 5-tier pricing grid.
const PricingPlan = ({ name, price, per, features, popular, cta }) => (
  <div style={{
    background: 'var(--card)',
    border: popular ? '2px solid var(--gold)' : '1px solid var(--glass-border)',
    borderRadius: 20, padding: '32px 20px', textAlign: 'center',
    display: 'flex', flexDirection: 'column', position: 'relative',
  }}>
    {popular && (
      <div style={{
        position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
        background: 'var(--gold)', color: '#000', fontSize: '.68rem', fontWeight: 700,
        padding: '3px 14px', borderRadius: 20, whiteSpace: 'nowrap',
      }}>הכי פופולרי</div>
    )}
    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{name}</h3>
    <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--gold)', marginBottom: 4 }}>
      {price} {per && <small style={{ fontSize: '.8rem', fontWeight: 500, color: 'var(--muted)' }}>/{per.split('/')[0]}</small>}
    </div>
    <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginBottom: 18 }}>{per}</div>
    <ul style={{ listStyle: 'none', textAlign: 'right', marginBottom: 24, flexGrow: 1, padding: 0 }}>
      {features.map(f => (
        <li key={f} style={{ fontSize: '.8rem', color: 'var(--muted-light)', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,.03)' }}>
          <span style={{ color: 'var(--green)', fontWeight: 700 }}>✓ </span>{f}
        </li>
      ))}
    </ul>
    <Button variant={popular ? 'popularGhost' : 'ghost'}>{cta}</Button>
  </div>
);

const Pricing = () => {
  const plans = [
    { name: 'חינמי', price: '$0', per: '10 נקודות ביום — לנצח', cta: 'הורד בחינם',
      features: ['Gemini Flash AI', 'מונה שעות ללא הגבלה', 'כלים בסיסיים מוגבלים', '1 סקריפט ביום'] },
    { name: 'Starter', price: '$5', per: '$48/שנה (חיסכון 20%)', cta: 'שדרג ל-Starter',
      features: ['200 נקודות AI בחודש', 'GPT-4o mini + Claude Haiku', 'כלים ללא הגבלה', 'עימוד Gemma 4', 'חנות סקריפטים'] },
    { name: 'Pro', price: '$10', per: '$96/שנה (חיסכון 20%)', popular: true, cta: 'שדרג ל-Pro',
      features: ['500 נקודות AI בחודש', 'כל המנועים כולל Claude Sonnet', 'Claude באינדיזיין', 'Smart Routing', 'יצירת תמונות AI'] },
    { name: 'Advanced', price: '$15', per: '$144/שנה (חיסכון 20%)', cta: 'שדרג ל-Advanced',
      features: ['1,000 נקודות AI בחודש', 'כל המנועים + עדיפות', 'Claude מתקדם', 'תמיכה מועדפת', 'עימוד ספרים שלמים'] },
    { name: 'Premium', price: '$20', per: '$192/שנה (חיסכון 20%)', cta: 'שדרג ל-Premium',
      features: ['2,000 נקודות AI בחודש', 'כל המנועים + Claude Opus', 'Claude Ultra באינדיזיין', 'תמיכה VIP תוך שעה', 'גישה מוקדמת'] },
  ];
  return (
    <section id="pricing" style={{ padding: '80px 0' }}>
      <Container>
        <SectionHeader tag="מחירים" title="תוכניות שמתאימות לכל אחד" subtitle="התחילו בחינם עם 10 נקודות ביום. שדרגו כשמוכנים." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, maxWidth: 1100, margin: '0 auto' }}>
          {plans.map(p => <PricingPlan key={p.name} {...p} />)}
        </div>
        <ComparisonTable />
      </Container>
    </section>
  );
};

const ComparisonTable = () => {
  const rows = [
    ['מונה שעות', '✓ ללא הגבלה', '✓', '✓', '✓', '✓'],
    ['נקודות AI', '10/יום', '200/חודש', '500/חודש', '1,000/חודש', '2,000/חודש'],
    ['מנוע AI', 'Gemini Flash', 'Flash + GPT mini', 'כל המנועים', 'כל המנועים', 'כל המנועים'],
    ['Claude באינדיזיין', '—', '—', '✓ Sonnet', '✓ Sonnet', '✓ Opus'],
    ['עימוד Gemma 4', '—', '✓', '✓', '✓', '✓'],
    ['ניקוי טקסט', '3/יום', '✓ ללא הגבלה', '✓', '✓', '✓'],
    ['חיפוש GREP', '5/יום', '✓ ללא הגבלה', '✓', '✓', '✓'],
    ['יצירת סקריפט', '1/יום', '✓', '✓', '✓', '✓'],
    ['יצירת תמונות AI', '—', '—', '✓', '✓', '✓'],
    ['חנות סקריפטים', '—', '✓', '✓', '✓', '✓'],
    ['Smart Routing', '—', '—', '✓', '✓', '✓'],
    ['תמיכה', 'פורום', '24 שעות', '24 שעות', 'מועדפת', 'VIP תוך שעה'],
  ];
  const heads = ["פיצ'ר", 'חינמי', 'Starter', 'Pro', 'Advanced', 'Premium'];
  return (
    <div style={{ marginTop: 48, overflow: 'hidden', borderRadius: 18, border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,.02)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
        <thead>
          <tr style={{ background: 'rgba(212,168,67,.08)' }}>
            {heads.map((h, i) => (
              <th key={h} style={{
                padding: '14px 12px', textAlign: 'right', fontWeight: 700,
                color: i === 3 ? 'var(--gold)' : 'var(--text)',
                borderBottom: '1px solid rgba(255,255,255,.06)',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} style={{ borderBottom: '1px solid rgba(255,255,255,.04)' }}>
              {r.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '11px 12px', textAlign: 'right',
                  color: ci === 0 ? 'var(--text)' : (cell === '—' ? 'var(--muted)' : 'var(--muted-light)'),
                  fontWeight: ci === 0 ? 600 : 400,
                  background: ci === 3 ? 'rgba(212,168,67,.04)' : 'transparent',
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
Object.assign(window, { Pricing, PricingPlan, ComparisonTable });
