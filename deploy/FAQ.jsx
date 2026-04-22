// FAQ accordion.
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: 'מה זה נקודות AI?', a: 'כל פעולת AI צורכת נקודות. שאלה פשוטה = 1 נקודה, Claude Sonnet = 5 נקודות, יצירת תמונה = 10. במסלול חינמי מקבלים 10 נקודות ביום עם Gemini Flash. מנויים מקבלים 200-2,000 נקודות בחודש עם גישה לכל המנועים.' },
    { q: 'מה קורה כשנגמרות הנקודות?', a: 'במסלול חינמי — הנקודות מתחדשות כל יום. במנויים בתשלום — הנקודות מתחדשות כל חודש. רוצים עוד? אפשר לקנות חבילות נקודות חד-פעמיות החל מ-$3. הכלים המקומיים (ניקוי, חיפוש, מונה שעות) עובדים תמיד.' },
    { q: 'מה זה Claude באינדיזיין?', a: 'בדיוק כמו ש-Claude עובד בתוך Word, אצלנו הוא עובד ישירות באינדיזיין. Claude מבין את המסמך שלכם, מנתח את העימוד, כותב סקריפטים, מתקן סגנונות, ומבצע משימות מורכבות בכמה צעדים — הכל בעברית. זמין ממסלול Pro ומעלה.' },
    { q: 'מה זה עימוד Gemma 4?', a: 'Gemma 4 הוא מנוע AI ייעודי של גוגל שאנחנו שילבנו לעימוד מקצועי. הוא מנתח כל עמוד ב-300 מילישניות ומתקן אוטומטית בעיות כמו אלמנות, יתומים, נהרות, וצפיפות שורות — תוצאה ברמת מעמד מנוסה. עובד מושלם עם עברית, ניקוד ו-RTL.' },
    { q: 'מתאים להוצאות לאור?', a: 'בהחלט. הוצאות לאור שעובדות עם כמה מעמדים חוסכות תקציבים משמעותיים. עימוד Gemma 4 מעבד ספר שלם של 300 עמודים בפחות מ-2 דקות. כל מעמד עובד מהר יותר, עם פחות טעויות, ויכול לקחת יותר פרויקטים.' },
    { q: 'זה עובד בלי אינטרנט?', a: 'חלק גדול מהכלים עובד אופליין. רק פיצ\'רים שדורשים AI צריכים חיבור. גם אם נפל האינטרנט — ממשיכים לעבוד.' },
    { q: 'באיזה גרסה של אינדיזיין זה עובד?', a: 'Adobe InDesign CC 2019 ומעלה (גרסה 14+). Windows ו-Mac.' },
    { q: 'איך מתקינים?', a: 'מורידים, מעתיקים לתיקיית התוספים, ופותחים מחדש. פחות מדקה. מדריך מלא מגיע עם הקובץ.' },
    { q: 'אני מפתח — אפשר להתחבר עם מפתח API עצמי?', a: 'כן! למפתחים ומשתמשים מתקדמים יש אזור מפתחים ייעודי בתוך התוסף. שם ניתן לחבר מפתחות API עצמיים של OpenAI, Google, Anthropic ועוד — וליהנות מגישה חופשית ללא מגבלת נקודות. צרו קשר לפרטים על גישת מפתחים.' },
  ];
  return (
    <section id="faq" style={{ padding: '80px 0' }}>
      <Container>
        <SectionHeader tag="שאלות נפוצות" title="יש שאלות? יש תשובות" />
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {items.map((it, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
              <div onClick={() => setOpen(open === i ? -1 : i)} style={{
                padding: '18px 0', fontSize: '.95rem', fontWeight: 600, cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                color: open === i ? 'var(--gold)' : 'var(--text)',
              }}>
                <span>{it.q}</span>
                <span style={{ fontSize: '1.2rem', color: open === i ? 'var(--gold)' : 'var(--muted)', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform .3s' }}>+</span>
              </div>
              <div style={{ maxHeight: open === i ? 400 : 0, overflow: 'hidden', transition: 'max-height .35s ease' }}>
                <p style={{ fontSize: '.85rem', color: 'var(--muted-light)', lineHeight: 1.7, paddingBottom: 18 }}>{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
Object.assign(window, { FAQ });
