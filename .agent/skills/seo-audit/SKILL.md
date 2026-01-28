---
name: seo-audit
description: Checks the website for SEO best practices, including meta tags, canonical links, sitemaps, and keyword optimization.
---

# SEO Аудит та Оптимізація

## When to use this skill

Використовуйте цей скіл для регулярної перевірки сайту на відповідність сучасним стандартам SEO. Це включає перевірку наявності мета-тегів, коректність карти сайту, наявність канонічних посилань та щільність ключових слів.

## How to use it

1. **Перевірка Meta-тегів**:
   - Перевірити `index.html` на наявність загальних тегів (description, keywords, OG tags).
   - Перевірити використання `Helmet` у компонентах сторінок (`Home.tsx`, `PrivacyPolicy.tsx`) для динамічних заголовків та описів.
2. **Перевірка Канонічних Посилань**:
   - Переконатися, що кожна мовна версія сторінки має свій `<link rel="canonical">`.
3. **Технічні файли**:
   - Перевірити актуальність `public/sitemap.xml` та `public/robots.txt`.
4. **Оптимізація Ключових Слів**:
   - Аналізувати контент у `src/data/apps.ts`.
   - Додавати релевантні ключові слова в описи (наприклад: "educational apps for kids", "mobile deck assistant", "learning clock app").
5. **Атрибути зображень**:
   - Перевірити наявність `alt` текстів для всіх зображень додатків.

## Validation

- Кожна сторінка має унікальний `<title>` та `<meta name="description">`.
- Файл `sitemap.xml` містить актуальні URL для всіх мов.
- Рівень SEO-оптимізації контенту дозволяє пошуковим системам легко індексувати додатки за категоріями.
