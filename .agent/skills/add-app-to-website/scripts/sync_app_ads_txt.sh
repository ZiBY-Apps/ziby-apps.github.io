#!/bin/bash

# Витягує AdMob pub ID з Flutter-проєкту і дописує рядок у public/app-ads.txt,
# якщо такого pub ID там ще немає. Запускати з кореневої директорії apps-website.
# Нічого не комітить і не деплоїть.

FLUTTER_PROJECT_DIR="$1"
APP_ADS_FILE="public/app-ads.txt"

if [ -z "$FLUTTER_PROJECT_DIR" ]; then
    echo "Використання: $0 <шлях_до_flutter_проєкту>"
    exit 1
fi

if [ ! -f "$APP_ADS_FILE" ]; then
    echo "Помилка: $APP_ADS_FILE не знайдено. Запусти скрипт з кореневої директорії apps-website."
    exit 1
fi

PLIST_FILE="$FLUTTER_PROJECT_DIR/ios/Runner/Info.plist"
MANIFEST_FILE="$FLUTTER_PROJECT_DIR/android/app/src/main/AndroidManifest.xml"

PUB_ID=""

if [ -f "$PLIST_FILE" ]; then
    PUB_ID=$(grep -A1 "GADApplicationIdentifier" "$PLIST_FILE" | grep -o "ca-app-pub-[0-9]*" | head -n1 | sed 's/ca-app-pub-//')
fi

if [ -z "$PUB_ID" ] && [ -f "$MANIFEST_FILE" ]; then
    PUB_ID=$(grep -A1 "com.google.android.gms.ads.APPLICATION_ID" "$MANIFEST_FILE" | grep -o "ca-app-pub-[0-9]*" | head -n1 | sed 's/ca-app-pub-//')
fi

if [ -z "$PUB_ID" ]; then
    echo "Помилка: не вдалося знайти AdMob App ID ні в $PLIST_FILE, ні в $MANIFEST_FILE."
    exit 1
fi

LINE="google.com, pub-$PUB_ID, DIRECT, f08c47fec0942fa0"

if grep -q "pub-$PUB_ID" "$APP_ADS_FILE"; then
    echo "pub-$PUB_ID вже є в $APP_ADS_FILE — нічого не додаю."
else
    echo "$LINE" >> "$APP_ADS_FILE"
    echo "Додано рядок у $APP_ADS_FILE: $LINE"
fi

echo "Нагадування: зміни не закомічені. Перевір diff і закомить/задеплой вручну."
