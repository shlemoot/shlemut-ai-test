// 3-col feature grid — animated: float, glow orb, icon wiggle+sparkles, gradient-border march.
const FeatureCard = ({ icon, title, body, variant, index = 0 }) => {
  const base = {
    position: 'relative', overflow: 'hidden',
    background: 'var(--card)', border: '1px solid var(--glass-border)',
    borderRadius: 20, padding: 32, backdropFilter: 'blur(20px)',
    transition: 'transform .4s cubic-bezier(.2,.8,.2,1), border-color .4s, box-shadow .4s',
    animation: `featureFloat 6s ease-in-out infinite ${-index * 0.4}s`,
  };
  const variants = {
    claude: {
      border: '1.5px solid transparent',
      backgroundImage: 'linear-gradient(rgba(28,28,30,.94),rgba(28,28,30,.94)),linear-gradient(135deg,#6c63ff,#a78bfa,#6c63ff,#a78bfa)',
      backgroundSize: '100% 100%, 300% 300%',
      backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box',
      animation: `featureFloat 6s ease-in-out infinite ${-index * 0.4}s, gradShift 5s linear infinite`,
    },
    gemma: {
      border: '1.5px solid transparent',
      backgroundImage: 'linear-gradient(rgba(28,28,30,.94),rgba(28,28,30,.94)),linear-gradient(135deg,#30d158,#60e085,#30d158,#60e085)',
      backgroundSize: '100% 100%, 300% 300%',
      backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box',
      animation: `featureFloat 6s ease-in-out infinite ${-index * 0.4}s, gradShift 5s linear infinite`,
    },
  };
  const accent = variant === 'claude' ? '#a78bfa' : variant === 'gemma' ? '#60e085' : '#d4a843';
  return (
    <div style={{ ...base, ...(variants[variant] || {}) }}>
      <div style={{
        position: 'absolute', width: 180, height: 180, borderRadius: '50%', filter: 'blur(40px)', opacity: .3,
        top: -60, right: -40,
        background: `radial-gradient(circle,${accent},transparent 70%)`,
        animation: 'orbit 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 52, height: 52, borderRadius: 12, marginBottom: 14,
        background: `linear-gradient(135deg,${accent}28,${accent}08)`,
        border: `1px solid ${accent}40`,
      }}>
        <span style={{ fontSize: '1.7rem', animation: 'iconWiggle 3.5s ease-in-out infinite' }}>{icon}</span>
      </div>
      <h3 style={{ position: 'relative', fontSize: '1.08rem', fontWeight: 700, marginBottom: 8 }}>{title}</h3>
      <p style={{ position: 'relative', fontSize: '.87rem', color: 'var(--muted-light)', lineHeight: 1.65 }}>{body}</p>
    </div>
  );
};

const Features = () => {
  const items = [
    { icon: '🤖', title: 'AI שמבין עברית', body: 'שאלו שאלות, תנו הוראות בעברית — ה-AI מבין, מבצע, ומחזיר תשובה.' },
    { icon: '📚', title: 'ניקוי טקסט חכם', body: 'מנקה רווחים כפולים, מתקן פיסוק, ממיר מספרים — 20+ כללי ניקוי בלחיצה אחת.' },
    { icon: '🔍', title: 'חיפוש GREP מתקדם', body: 'חיפוש והחלפה עם ביטויים רגולריים ישירות מהפאנל.' },
    { icon: '🎤', title: 'תמלול קולי', body: 'דברו — והטקסט מופיע ישירות באינדיזיין. תמלול בזמן אמת בעברית.' },
    { icon: '⏱', title: 'מונה שעות חכם', body: 'עוקב אחרי זמן העבודה על כל מסמך, מחשב עלות ומייצא דוחות.' },
    { icon: '💻', title: 'יוצר סקריפטים', body: 'תיאור בעברית — ה-AI כותב סקריפט ExtendScript ומריץ. אוטומציה ללא ידע בתכנות.' },
    { icon: '🧐', title: 'Claude באינדיזיין', body: 'עורך חכם שיושב בתוך אינדיזיין. מנתח את המסמך, כותב קוד, ומבצע משימות מורכבות. זמין מ-Pro.', variant: 'claude' },
    { icon: '📖', title: 'עימוד Gemma 4', body: 'מנוע AI ייעודי לעימוד. מנתח כל עמוד ב-300ms ומתקן אלמנות, יתומים, ונהרות.', variant: 'gemma' },
    { icon: '🎨', title: 'יצירת תמונות AI', body: 'תיאור טקסטואלי הופך לתמונה באיכות גבוהה — ישירות לתוך המסמך.' },
  ];
  return (
    <section id="features" style={{ padding: '80px 0', position: 'relative' }}>
      <Container>
        <SectionHeader tag="יכולות" title="הכל בתוך תוסף אחד" subtitle="מעל 40 כלים חכמים שהופכים את אינדיזיין למכונת עימוד מושלמת" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {items.map((it, i) => <FeatureCard key={it.title} index={i} {...it} />)}
        </div>
      </Container>
    </section>
  );
};
Object.assign(window, { Features, FeatureCard });
