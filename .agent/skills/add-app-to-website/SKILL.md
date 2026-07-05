---
name: add-app-to-website
description: Creates a new app entry on the ZiBY Apps portfolio website (apps-website) from a Flutter project — new per-app data file, apps.ts wiring, logo check, and app-ads.txt sync for AdMob. Use whenever a new Flutter app needs its page added to the website, or an existing app is missing from src/data/apps/.
---

# Додавання нового додатку на сайт

## When to use this skill

Використовуй цей скіл, коли новий Flutter-додаток на GameKit-стеку готовий отримати сторінку на сайті-портфоліо `apps-website` — наприклад, одразу після реєстрації в Play Console/App Store Connect через скіл `publishing-accounts-setup` з `flutter_my_library`. Також підходить, коли додаток вже існує, але відсутній у `src/data/apps/`.

## How to use it

1. **Схема даних**: орієнтуйся виключно на `src/data/apps/types.ts` — це джерело правди для полів (`id`, `appleId`, `googleId`, `logo`, `name`, `subtitle`, `description`, `forChild`, `withAdmob`, `withAnalytics`, `withCrashlytics`, `comingSoon`, `translations`). README проєкту описує стару пласку структуру `apps.ts` — не використовуй її як приклад, дивись на реальні файли (`deck-keeper.ts`, `baby-learn.ts`, `alphabet-of-time.ts`).
2. **Логотип**: перед створенням файлу переконайся, що `public/logos/<id>.png` вже існує. Скрипт не може згенерувати логотип — якщо файлу нема, зупинись і попроси користувача його надати.
3. **Тексти та переклади**: для назви/підзаголовка/опису і перекладів бери дані з `store_descriptions`/`assets/translations` Flutter-проєкту (той самий підхід, що й скіл `sync-app-metadata`), адаптуючи текст під SEO. Перекладай лише на мови, реально підключені в `src/i18n.ts` (`supportedLngs`): `en`, `uk`, `de`, `es`, `fr`, `it`, `pl`. `ru` сайт не обслуговує (немає `src/locales/ru.json`), навіть якщо в старіших файлах додатків трапляються `ru`-переклади — не додавай нові.
4. **Створення файлу додатку**: створи `src/data/apps/<id>.ts` за зразком існуючих файлів, з усіма полями з кроків 1 і 3.
5. **Підключення в `apps.ts`**: додай `import { <camelCaseId> } from './apps/<id>';` та `<camelCaseId>` у масив `apps` в `src/data/apps.ts`. Сам масив даних додатку там більше не зберігається — тільки агрегація імпортів.
6. **AdMob → app-ads.txt**: якщо `withAdmob: true`, синхронізуй `public/app-ads.txt` зі скриптом (запускай з кореневої директорії `apps-website`):
   ```bash
   .agent/skills/add-app-to-website/scripts/sync_app_ads_txt.sh <шлях_до_flutter_проєкту>
   ```
   Скрипт сам знаходить AdMob pub ID у `GADApplicationIdentifier` (iOS `Info.plist`) або `com.google.android.gms.ads.APPLICATION_ID` (Android `AndroidManifest.xml` — той самий pub ID, інший суфікс), перевіряє, чи рядок `google.com, pub-<ID>, DIRECT, f08c47fec0942fa0` вже є в `app-ads.txt` (у портфоліо вже кілька різних pub ID від різних AdMob-акаунтів — дублювати не потрібно), і дописує його лише за відсутності.
7. **Нічого не комітити і не деплоїти самостійно**: скіл лише готує зміни в робочій директорії `apps-website`. `git add`/`git commit` і `npm run deploy` (= публікація на живий сайт через `gh-pages`) виконує користувач вручну, після перегляду diff.

## Validation

- `src/data/apps/<id>.ts` відповідає схемі `types.ts`, логотип за вказаним шляхом фізично існує.
- `src/data/apps.ts` імпортує новий додаток і додає його в масив `apps`.
- Якщо `withAdmob: true` — рядок з правильним pub ID присутній у `public/app-ads.txt` без дублікатів.
- Жодних змін не закомічено і сайт не задеплоєно без явної команди користувача.

## Decision trees

- Логотип відсутній у `public/logos/` → зупинись і попроси користувача надати файл, не створюй запис із неробочим шляхом.
- pub ID з Flutter-проєкту вже є в `app-ads.txt` (наприклад, той самий AdMob-акаунт, що й в іншого додатку) → нічого не дописувати, скрипт це визначить сам.
- `withAdmob: false` → крок 6 повністю пропускається.
- Потрібно оновити лише тексти/переклади вже існуючого додатку (файл вже є в `src/data/apps/`) → використовуй `sync-app-metadata`, а не цей скіл.
