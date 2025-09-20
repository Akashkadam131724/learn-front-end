# HTML Basics – Important Tags and Attributes

This guide explains some essential HTML tags and attributes that every webpage should include.

---

## 1. `<!DOCTYPE html>`

- Tells the browser which version of HTML you are using.
- `<!DOCTYPE html>` = HTML5 (the modern standard).
- If omitted, the browser may switch to **quirks mode**, causing unexpected styling/layout issues.

✅ **Best practice:** Always include it.

---

## 2. `lang="en"` on `<html>`

- Not strictly required, but **recommended**.
- Helps with:
  - Screen readers (accessibility).
  - Search engines (SEO).
  - Browsers (spell checking, language selection).

✅ **Best practice:** Always set the `lang` attribute to your document’s main language.

---

## 3. `<meta charset="UTF-8">`

- Defines how characters are interpreted.
- `UTF-8` supports almost all characters (English, Hindi, Japanese, emojis, etc.).
- If missing, special characters may break (₹, é, ö, 😊).

✅ **Best practice:** Always include it at the top of `<head>`.

---

## 4. `<meta name="viewport">`

- Very important for **mobile responsiveness**.
- Without it, mobile browsers assume desktop width (~980px), making sites look tiny.
- Correct usage:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
