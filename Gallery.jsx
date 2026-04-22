// Screenshots gallery — 8 real product screenshots.
const Gallery = () => {
  const shots = [
    { img: 'home-screen.jpg', title: "מסך פתיחה — הצ'אט החכם", body: "ממשק נקי ואלגנטי. שאלו כל שאלה בעברית — תקנו מרכאות, סדרו טקסט לפי סגנונות, ייצאו PDF לדפוס, או נקו שגיאות עיצוב." },
    { img: 'editor-tools.jpg', title: 'העורך — 40+ כלים בגריד אחד', body: 'חיפוש והחלפה, סוגריים ומרכאות, צבעים ודוגמיות, ניקוי מתקדם, ביטויי GREP, סגנונות, אוטומציה AI ועוד.' },
    { img: 'quick-actions.jpg', title: 'כלים מהירים — Quick Actions', body: '6 פעולות שימושיות בגישה מיידית: סוגריים חכמים, החלפה אולטימטיבית, ניקוי טקסט, צבעים, אוטומציה ודוגם עיצוב.' },
    { img: 'grep-search.jpg', title: 'חיפוש מתקדם — GREP', body: 'מצאו כל דבר במסמך: מיילים, מספרים, טלפונים, לינקים, תאריכים — או הזינו ביטוי GREP חופשי.' },
    { img: 'script-creator.jpg', title: 'יוצר סקריפטים — AI', body: 'צרו סקריפט חדש עם AI, תקנו סקריפט קיים, הפעילו שרשרת פעולות אוטומטית, או קבלו הסבר על קוד.' },
    { img: 'image-creator.jpg', title: 'תמונות ויזואל', body: 'צרו תמונות AI ישירות לתוך המסמך, שנו גודל תמונות, הציבו בעמוד, או צרו פלטת צבעים לפרויקט.' },
    { img: 'doc-analyzer.jpg', title: 'מנתח מסמך', body: 'ניתוח מלא אוף-ליין, ייצוא PDF לדפוס, יצירת תוכן עניינים אוטומטית, ודוח שגיאות.' },
    { img: 'text-processor.jpg', title: 'מעבד טקסט — 12 כלי AI', body: 'כתיב ודקדוק, קיצור והרחבה, שיפור ניסוח, שפה רשמית או ידידותית, תיקון פיסוק, ניקוד לעברית, סיכום, שכתוב.' },
  ];
  return (
    <section id="gallery" style={{ padding: '80px 0' }}>
      <Container>
        <SectionHeader tag="הצצה מבפנים" title="ראו בעצמכם — כך זה נראה" subtitle="צילומי מסך אמיתיים מתוך התוסף — כל כלי, כל יכולת, בפעולה" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
          {shots.map((s, i) => (
            <div key={s.img} style={{
              position: 'relative', overflow: 'hidden',
              background: 'var(--card)', border: '1px solid var(--glass-border)',
              borderRadius: 18, padding: 18,
              animation: `featureFloat 6s ease-in-out infinite ${-i * 0.35}s`,
            }}>
              <img src={`assets/screenshots/${s.img}`} alt={s.title}
                style={{ width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,.06)', display: 'block', marginBottom: 14 }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 6, color: 'var(--gold)' }}>{s.title}</h3>
              <p style={{ fontSize: '.85rem', color: 'var(--muted-light)', lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
Object.assign(window, { Gallery });
