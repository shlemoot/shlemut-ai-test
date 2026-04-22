# Studio Shlemut AI — Landing Page

אתר השיווק של Studio Shlemut AI — דף נחיתה ריאקטיבי עם אנימציות RGB, עכבר מסוגנן, מוזיקת רקע, וסרטון פרומו מוטמע.

## קבצים עיקריים

- `index.html` — נקודת הכניסה
- `colors_and_type.css` — טוקני עיצוב + טעינת פונט Assistant
- `fonts/` — משקלי פונט Assistant (Regular / Bold / ExtraBold)
- `assets/images/` — לוגואים + mockup
- `assets/screenshots/` — צילומי מסך של התוסף
- `promo.html` + `promo-embed.html` — סרטון הפרומו
- `shots/` — תמונות עבור הסרטון
- `bg-music.mp3` — מוזיקת רקע
- `*.jsx` — רכיבי React (נטענים דרך Babel)

## העלאה ל-GitHub

1. העתקת את כל תוכן התיקייה הזאת ל-root של הריפו `shlemut-ai-site`
2. commit & push
3. אם יש לך GitHub Pages — האתר יעלה אוטומטית

## הרצה מקומית

לא צריך שרת — פתיחה של `index.html` בדפדפן עובדת (אם כי מומלץ שרת סטטי כדי להימנע מבעיות CORS עם ה-JSX).

פתרון מהיר עם Python:
```
python -m http.server 8000
```
ואז `http://localhost:8000`.
