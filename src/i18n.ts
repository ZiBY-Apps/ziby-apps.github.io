import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      'ZiBY Apps': 'ZiBY Apps',
      Contact: 'Contact',
      'Showcase of Awesome Apps': 'Showcase of <br />Awesome Apps',
      'Hero Description':
        'Explore our collection of educational and utility applications designed to make life easier and learning fun.',
      'SEO Keywords':
        'educational apps, kids learning, mobile games, flashcards, clock learning, deck assistant, board game tools, ZiBY Apps',
      'Contact us': 'Contact us',
      'All rights reserved': 'All rights reserved.',
      'Back to Home': 'Back to Home',
      'Privacy Policy': 'Privacy Policy',
      'Information Collection and Use': 'Information Collection and Use',
      'Log Data': 'Log Data',
      Cookies: 'Cookies',
      'Service Providers': 'Service Providers',
      Security: 'Security',
      'Data Deletion': 'Data Deletion',
      'Links to Other Sites': 'Links to Other Sites',
      "Children's Privacy": "Children's Privacy",
      'Changes to This Privacy Policy': 'Changes to This Privacy Policy',
      'Contact Us': 'Contact us',
      'Coming Soon': 'Coming Soon',
      'Get on App Store': 'Get on App Store',
      'Get on Play Store': 'Get on Play Store',
      'View QR Code': 'View QR Code',
      'Scan to download': 'Scan to download',
      'Back to Info': 'Back to Info',
      'Available soon in App Store & Google Play': 'Available soon in App Store & Google Play',
      'Privacy Policy Intro':
        'This Privacy Policy describes how your personal information is collected, used, and shared when you use the {{appName}} application.',
      'Privacy Policy App Provided':
        'The {{appName}} app is provided by Yashin Pavlo as a Freemium service. This Service is provided at no cost and is intended for use "AS IS".',
      'Privacy Policy Agreement':
        'If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.',
      'Privacy Policy Terms Definitions':
        'The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, unless otherwise defined in this Privacy Policy.',
      'Information Collection Desc 1':
        'For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained on your device and is not collected by us in any way.',
      'Information Collection Desc 2':
        'The app does use third-party services that may collect information used to identify you.',
      'Service Privacy Links': 'Link to the privacy policy of third-party service providers used by the app:',
      'Log Data Desc':
        'We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.',
      'Cookies Desc 1':
        "Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.",
      'Cookies Desc 2':
        'This Service does not use these "cookies" explicitly. However, the app may use third-party code and libraries that use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.',
      'Service Providers Desc 1': 'We may employ third-party companies and individuals due to the following reasons:',
      'Service Providers List 1': 'To facilitate our Service;',
      'Service Providers List 2': 'To provide the Service on our behalf;',
      'Service Providers List 3': 'To perform Service-related services; or',
      'Service Providers List 4': 'To assist us in analyzing how our Service is used.',
      'Service Providers Desc 2':
        'We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.',
      'Security Desc':
        'We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.',
      'Data Deletion Desc':
        'Since we do not collect or store any personal data on our servers, there is generally no data for us to delete. However, if you have any concerns or wish to inquire about data privacy, you may contact us at yashin.ziby@icloud.com.',
      'Links to Other Sites Desc':
        'This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.',
      'Children Privacy Kids App':
        'Our Application is designed for children and families. We are committed to protecting the privacy of children. We do not knowingly collect, store, or process any personal information from children under the age of 13. If you believe that we have inadvertently collected such information, please contact us immediately, and we will take steps to remove it.',
      'Children Privacy Standard App':
        'These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.',
      'Changes Desc':
        'We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.',
      'Effect Date': 'This policy is effective as of 2025-12-11',
      'Contact Us Desc':
        'If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at yashin.ziby@icloud.com.',
    },
  },
  uk: {
    translation: {
      'ZiBY Apps': 'ZiBY Apps',
      Contact: 'Контакти',
      'Showcase of Awesome Apps': 'Вітрина <br />чудових додатків',
      'Hero Description':
        'Досліджуйте нашу колекцію освітніх та утилітних додатків, створених для того, щоб зробити життя простішим, а навчання – захоплюючим.',
      'SEO Keywords':
        'освітні додатки для дітей, навчання дітей, мобільні ігри, картки для навчання, вчимо годинник, помічник для настільних ігор, ZiBY Apps',
      'Contact us': "Зв'яжіться з нами",
      'All rights reserved': 'Всі права захищені.',
      'Back to Home': 'На головну',
      'Privacy Policy': 'Політика конфіденційності',
      'Information Collection and Use': 'Збір та використання інформації',
      'Log Data': 'Дані журналу',
      Cookies: 'Cookies',
      'Service Providers': 'Постачальники послуг',
      Security: 'Безпека',
      'Data Deletion': 'Видалення даних',
      'Links to Other Sites': 'Посилання на інші сайти',
      "Children's Privacy": 'Конфіденційність дітей',
      'Changes to This Privacy Policy': 'Зміни до цієї Політики конфіденційності',
      'Contact Us': "Зв'яжіться з нами",
      'Coming Soon': 'Скоро',
      'Get on App Store': 'Завантажити в App Store',
      'Get on Play Store': 'Завантажити в Play Store',
      'View QR Code': 'Показати QR-код',
      'Scan to download': 'Відскануйте для завантаження',
      'Back to Info': 'Назад до опису',
      'Available soon in App Store & Google Play': 'Незабаром у App Store та Google Play',
      'Privacy Policy Intro':
        'Ця Політика конфіденційності описує, як ваша особиста інформація збирається, використовується та поширюється під час використання додатка {{appName}}.',
      'Privacy Policy App Provided':
        'Додаток {{appName}} надається Павлом Яшиним як Freemium-послуга. Ця Послуга надається безкоштовно і призначена для використання "ЯК Є".',
      'Privacy Policy Agreement':
        'Вибираючи нашу Послугу, ви погоджуєтесь на збір та використання інформації відповідно до цієї політики. Особиста інформація, яку ми збираємо, використовується для надання та покращення Послуги. Ми не будемо використовувати або ділитися вашою інформацією ні з ким, окрім як описано в цій Політиці конфіденційності.',
      'Privacy Policy Terms Definitions':
        'Терміни, що використовуються в цій Політиці конфіденційності, мають ті самі значення, що й у наших Правилах та умовах, якщо інше не визначено в цій Політиці конфіденційності.',
      'Information Collection Desc 1':
        'Для кращого досвіду під час використання нашої Послуги ми можемо попросити вас надати нам певну особисту інформацію. Інформація, яку ми запитуємо, зберігатиметься на вашому пристрої і жодним чином не збирається нами.',
      'Information Collection Desc 2':
        'Додаток використовує сторонні сервіси, які можуть збирати інформацію, що використовується для вашої ідентифікации.',
      'Service Privacy Links':
        'Посилання на політику конфіденційності сторонніх постачальників послуг, що використовуються додатком:',
      'Log Data Desc':
        'Ми хочемо повідомити вам, що щоразу, коли ви користуєтеся нашою Послугою, у разі помилки в додатку ми збираємо дані та інформацію (через сторонні продукти) на вашому телефоні, які називаються Log Data. Ці дані можуть включати таку інформацію, як IP-адреса вашого пристрою, назва пристрою, версія операційної системи, конфігурація додатка під час використання нашої Послуги, час і дата вашого використання Послуги та інша статистика.',
      'Cookies Desc 1':
        'Cookies — це файли з невеликою кількістю даних, які зазвичай використовуються як анонімні унікальні ідентифікатори. Вони надсилаються у ваш браузер із веб-сайтів, які ви відвідуєте, і зберігаються у внутрішній пам’яті вашого пристрою.',
      'Cookies Desc 2':
        'Ця Послуга не використовує ці файли "cookie" явно. Однак додаток може використовувати сторонні коди та бібліотеки, які використовують "cookie" для збору інформації та покращення своїх послуг. У вас є можливість прийняти або відхилити ці файли cookie та знати, коли файл cookie надсилається на ваш пристрій. Якщо ви вирішите відмовитися від наших файлів cookie, можливо, ви не зможете використовувати деякі частини цієї Послуги.',
      'Service Providers Desc 1': 'Ми можемо наймати сторонні компанії та фізичних осіб з наступних причин:',
      'Service Providers List 1': 'Для полегшення нашої Послуги;',
      'Service Providers List 2': 'Надавати Послугу від нашого імені;',
      'Service Providers List 3': 'Для надання послуг, пов’язаних із Послугою; або',
      'Service Providers List 4': 'Щоб допомогти нам проаналізувати, як використовується наша Послуга.',
      'Service Providers Desc 2':
        'Ми хочемо повідомити користувачам цієї Послуги, що ці треті сторони мають доступ до їхньої особистої інформації. Причина — виконання покладених на них завдань від нашого імені. Однак вони зобов’язані не розголошувати та не використовувати інформацію для будь-яких інших цілей.',
      'Security Desc':
        'Ми цінуємо вашу довіру до надання нам вашої особистої інформації, тому ми прагнемо використовувати комерційно прийнятні засоби її захисту. Але пам’ятайте, що жоден метод передачі через Інтернет або метод електронного зберігання не є на 100% безпечним і надійним, і ми не можемо гарантувати його абсолютну безпеку.',
      'Data Deletion Desc':
        'Оскільки ми не збираємо та не зберігаємо жодних особистих даних на наших серверах, для нас зазвичай немає даних, які потрібно видаляти. Однак, якщо у вас є будь-які занепокоєння або ви хочете запитати про конфіденційність даних, ви можете зв’язатися з нами за адресою yashin.ziby@icloud.com.',
      'Links to Other Sites Desc':
        'Ця Послуга може містити посилання на інші сайти. Якщо ви натиснете на посилання третьої сторони, ви будете спрямовані на цей сайт. Зауважте, що ці зовнішні сайти не керуються нами. Тому ми настійно рекомендуємо вам переглянути Політику конфіденційності цих веб-сайтів. Ми не контролюємо та не несемо відповідальності за вміст, політику конфіденційності чи практику будь-яких сторонніх сайтів або послуг.',
      'Children Privacy Kids App':
        'Наш додаток розроблено для дітей та сімей. Ми прагнемо захищати конфіденційність дітей. Ми свідомо не збираємо, не зберігаємо та не обробляємо будь-яку особисту інформацію дітей віком до 13 років. Якщо ви вважаєте, що ми випадково зібрали таку інформацію, негайно зв’яжіться з нами, і ми вживемо заходів для її видалення.',
      'Children Privacy Standard App':
        'Ці Послуги не розраховані на осіб віком до 13 років. Ми свідомо не збираємо особисту інформацію дітей віком до 13 років. У випадку, якщо ми виявимо, що дитина віком до 13 років надала нам особисту інформацію, ми негайно видаляємо її з наших серверів. Якщо ви є батьком або опікуном і знаєте, що ваша дитина надала нам особисту інформацію, будь ласка, зв’яжіться з нами, щоб ми могли вжити необхідних заходів.',
      'Changes Desc':
        'Ми можемо час від часу оновлювати нашу Політику конфіденційності. Тому радимо періодично переглядати цю сторінку на предмет будь-яких змін. Ми повідомимо вас про будь-яких змінах, розмістивши нову Політику конфіденційності на цій сторінці.',
      'Effect Date': 'Ця політика діє з 2025-12-11',
      'Contact Us Desc':
        'Якщо у вас виникли запитання чи пропозиції щодо нашої Політики конфіденційності, не соромтеся звертатися до нас за адресою yashin.ziby@icloud.com.',
    },
  },
  de: {
    translation: {
      'ZiBY Apps': 'ZiBY Apps',
      Contact: 'Kontakt',
      'Showcase of Awesome Apps': 'Showcase für <br />tolle Apps',
      'Hero Description':
        'Entdecken Sie unsere Sammlung von Bildungs- und Hilfsprogrammen, die das Leben einfacher und das Lernen unterhaltsam machen.',
      'Contact us': 'Kontaktiere uns',
      'All rights reserved': 'Alle Rechte vorbehalten.',
      'Back to Home': 'Zurück zur Startseite',
      'Privacy Policy': 'Datenschutz-Bestimmungen',
      'Information Collection and Use': 'Informationserhebung und -verwendung',
      'Log Data': 'Protokolldaten',
      Cookies: 'Cookies',
      'Service Providers': 'Dienstleister',
      Security: 'Sicherheit',
      'Data Deletion': 'Datenlöschung',
      'Links to Other Sites': 'Links zu anderen Websites',
      "Children's Privacy": 'Privatsphäre von Kindern',
      'Changes to This Privacy Policy': 'Änderungen an dieser Datenschutzrichtlinie',
      'Contact Us': 'Kontaktiere uns',
      'Coming Soon': 'Demnächst',
      'Get on App Store': 'Im App Store laden',
      'Get on Play Store': 'Im Play Store laden',
      'View QR Code': 'QR-Code anzeigen',
      'Scan to download': 'Zum Herunterladen scannen',
      'Back to Info': 'Zurück zur Info',
      'Available soon in App Store & Google Play': 'Demnächst im App Store und Google Play',
    },
  },
  ru: {
    translation: {
      'ZiBY Apps': 'ZiBY Apps',
      Contact: 'Контакт',
      'Showcase of Awesome Apps': 'Витрина <br />крутых приложений',
      'Hero Description':
        'Изучите нашу коллекцию образовательных и полезных приложений, призванных сделать жизнь проще, а обучение — увлекательнее.',
      'Contact us': 'Свяжитесь с нами',
      'All rights reserved': 'Все права защищены.',
      'Back to Home': 'На главную',
      'Privacy Policy': 'Политика конфиденциальности',
      'Information Collection and Use': 'Сбор и использование информации',
      'Log Data': 'Лог-данные',
      Cookies: 'Cookies',
      'Service Providers': 'Провайдеры услуг',
      Security: 'Безопасность',
      'Data Deletion': 'Удаление данных',
      'Links to Other Sites': 'Ссылки на другие сайты',
      "Children's Privacy": 'Конфиденциальность детей',
      'Changes to This Privacy Policy': 'Изменения в этой Политике конфиденциальности',
      'Contact Us': 'Свяжитесь с нами',
      'Coming Soon': 'Скоро',
      'Get on App Store': 'Загрузить в App Store',
      'Get on Play Store': 'Загрузить в Play Store',
      'View QR Code': 'Показать QR-код',
      'Scan to download': 'Отсканируйте для загрузки',
      'Back to Info': 'Назад к информации',
      'Available soon in App Store & Google Play': 'Скоро в App Store и Google Play',
    },
  },
  es: {
    translation: {
      'ZiBY Apps': 'ZiBY Apps',
      Contact: 'Contacto',
      'Showcase of Awesome Apps': 'Escaparate de <br />aplicaciones increíbles',
      'Hero Description':
        'Explore nuestra colección de aplicaciones educativas y utilitarias diseñadas para facilitar la vida y hacer que el aprendizaje sea divertido.',
      'Contact us': 'Contáctenos',
      'All rights reserved': 'Todos los derechos reservados.',
      'Back to Home': 'Volver al inicio',
      'Privacy Policy': 'Política de privacidad',
      'Information Collection and Use': 'Recopilación y uso de información',
      'Log Data': 'Datos de registro',
      Cookies: 'Galletas',
      'Service Providers': 'Proveedores de servicio',
      Security: 'Seguridad',
      'Data Deletion': 'Eliminación de datos',
      'Links to Other Sites': 'Enlaces a otros sitios',
      "Children's Privacy": 'Privacidad infantil',
      'Changes to This Privacy Policy': 'Cambios en esta política de privacidad',
      'Contact Us': 'Contáctenos',
      'Coming Soon': 'Próximamente',
      'Get on App Store': 'Descargar en App Store',
      'Get on Play Store': 'Descargar en Play Store',
      'View QR Code': 'Ver código QR',
      'Scan to download': 'Escanear para descargar',
      'Back to Info': 'Volver a la información',
      'Available soon in App Store & Google Play': 'Próximamente en App Store y Google Play',
    },
  },
  fr: {
    translation: {
      'ZiBY Apps': 'ZiBY Apps',
      Contact: 'Contact',
      'Showcase of Awesome Apps': "Vitrine <br />d'applications géniales",
      'Hero Description':
        "Explorez notre collection d'applications éducatives et utilitaires conçues pour faciliter la vie et rendre l'apprentissage amusant.",
      'Contact us': 'Contactez-nous',
      'All rights reserved': 'Tous droits réservés.',
      'Back to Home': "Retour à l'accueil",
      'Privacy Policy': 'Politique de confidentialité',
      'Information Collection and Use': 'Collecte et utilisation des informations',
      'Log Data': 'Données du journal',
      Cookies: 'Cookies',
      'Service Providers': 'Fournisseurs de services',
      Security: 'Sécurité',
      'Data Deletion': 'Suppression de données',
      'Links to Other Sites': "Liens vers d'autres sites",
      "Children's Privacy": 'Confidentialité des enfants',
      'Changes to This Privacy Policy': 'Modifications de cette politique de confidentialité',
      'Contact Us': 'Contactez-nous',
      'Coming Soon': 'Bientôt disponible',
      'Get on App Store': 'Télécharger sur App Store',
      'Get on Play Store': 'Télécharger sur Play Store',
      'View QR Code': 'Voir le code QR',
      'Scan to download': 'Scanner pour télécharger',
      'Back to Info': 'Retour aux informations',
      'Available soon in App Store & Google Play': "Bientôt disponible sur l'App Store et Google Play",
    },
  },
  it: {
    translation: {
      'ZiBY Apps': 'ZiBY Apps',
      Contact: 'Contatto',
      'Showcase of Awesome Apps': 'Vetrina di <br /> fantastiche app',
      'Hero Description':
        "Esplora la nostra collezione di applicazioni didattiche e utility progettate per rendere la vita più facile e l'apprendimento divertente.",
      'Contact us': 'Contattaci',
      'All rights reserved': 'Tutti i diritti riservati.',
      'Back to Home': 'Torna alla Home',
      'Privacy Policy': 'Informativa sulla privacy',
      'Information Collection and Use': 'Raccolta e utilizzo delle informazioni',
      'Log Data': 'Dati di registro',
      Cookies: 'Cookie',
      'Service Providers': 'Fornitori di servizi',
      Security: 'Sicurezza',
      'Data Deletion': 'Cancellazione dei dati',
      'Links to Other Sites': 'Collegamenti ad altri siti',
      "Children's Privacy": 'Privacy dei minori',
      'Changes to This Privacy Policy': 'Modifiche alla presente Informativa sulla privacy',
      'Contact Us': 'Contattaci',
      'Coming Soon': 'Prossimamente',
      'Get on App Store': 'Scarica su App Store',
      'Get on Play Store': 'Scarica su Play Store',
      'View QR Code': 'Visualizza codice QR',
      'Scan to download': 'Scansiona per scaricare',
      'Back to Info': 'Torna alle informazioni',
      'Available soon in App Store & Google Play': 'Prossimamente su App Store e Google Play',
    },
  },
  pl: {
    translation: {
      'ZiBY Apps': 'ZiBY Apps',
      Contact: 'Kontakt',
      'Showcase of Awesome Apps': 'Prezentacja <br />niesamowitych aplikacji',
      'Hero Description':
        'Poznaj naszą kolekcję aplikacji edukacyjnych i użytkowych, które ułatwiają życie i sprawiają, że nauka staje się zabawą.',
      'Contact us': 'Skontaktuj się з nami',
      'All rights reserved': 'Wszelkie prawa zastrzeżone.',
      'Back to Home': 'Powrót do strony głównej',
      'Privacy Policy': 'Polityka prywatności',
      'Information Collection and Use': 'Gromadzenie i wykorzystywanie informacji',
      'Log Data': 'Dane logowania',
      Cookies: 'Pliki cookie',
      'Service Providers': 'Dostawcy usług',
      Security: 'Bezpieczeństwo',
      'Data Deletion': 'Usuwanie danych',
      'Links to Other Sites': 'Linki do innych stron',
      "Children's Privacy": 'Prywatność dzieci',
      'Changes to This Privacy Policy': 'Zmiany w niniejszej Polityce prywatności',
      'Contact Us': 'Skontaktuj się з nami',
      'Coming Soon': 'Wkrótce',
      'Get on App Store': 'Pobierz в App Store',
      'Get on Play Store': 'Pobierz в Play Store',
      'View QR Code': 'Pokaż kod QR',
      'Scan to download': 'Zeskanuj, aby pobrać',
      'Back to Info': 'Powrót do informacji',
      'Available soon in App Store & Google Play': 'Wkrótce в App Store i Google Play',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'uk', 'de', 'ru', 'es', 'fr', 'it', 'pl'],
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Update html lang attribute on language change
i18n.on('languageChanged', lng => {
  const shortLng = lng.split('-')[0];
  document.documentElement.lang = shortLng;
});

export default i18n;
