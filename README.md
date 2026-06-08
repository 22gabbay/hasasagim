# Hasasagim Links

עמוד קישורים חד-עמודי ב-React + Vite.

## הרצה מקומית

```bash
npm install
npm run dev
```

## Build לפרסום

```bash
npm run build
```

ב-Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

## שינוי / הוספת קישורים

כל הקישורים נמצאים בקובץ:

```text
src/links.js
```

כדי להוסיף קישור חדש, מוסיפים אובייקט נוסף למערך `links`.

## החלפת תמונות

התמונות נמצאות כאן:

```text
src/assets/
```

- `background-mobile.webp` - רקע לפלאפון לאורך
- `background-desktop.webp` - רקע למחשב / מסך לרוחב
- `profile-logo.webp` - תמונת הכותרת
- `icon-*.webp` - אייקונים לכפתורים
