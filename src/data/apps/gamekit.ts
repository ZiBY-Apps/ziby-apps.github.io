import { AppData } from './types';

export const gameKit: AppData = {
  id: 'GameKit',
  // appleId: '', // TODO додати, коли опублікують у App Store
  // googleId: 'ua.zibyapp.gamekit', // TODO розкоментувати, коли опублікують у Google Play
  comingSoon: true,
  logo: '/logos/GameKit.png',
  name: 'GameKit',
  subtitle: 'Board Game Collection: Rules, Dice & Decks',
  description:
    'GameKit is a digital collection and toolkit for tabletop and card game lovers. Build a library of your games, keep rules, dice, and decks at hand, and swap physical accessories for convenient digital ones.',
  forChild: false,
  withAdmob: true,
  withAnalytics: true,
  withCrashlytics: true,
  translations: {
    uk: {
      subtitle: 'Колекція настільних ігор: правила, кубики, колоди',
      description:
        'GameKit — це цифрова колекція та набір інструментів для всіх любителів настільних і карткових ігор. Створіть бібліотеку своїх ігор, тримайте правила, кубики та колоди під рукою, а фізичні аксесуари замініть зручними цифровими аналогами.',
    },
    de: {
      subtitle: 'Brettspielsammlung: Regeln, Würfel & Decks',
      description:
        'GameKit ist eine digitale Sammlung und ein Werkzeugkasten für Brett- und Kartenspiel-Fans. Baue eine Bibliothek deiner Spiele auf, halte Regeln, Würfel und Decks griffbereit und ersetze physisches Zubehör durch praktische digitale Alternativen.',
    },
    es: {
      subtitle: 'Colección de juegos de mesa: reglas, dados y mazos',
      description:
        'GameKit es una colección digital y un conjunto de herramientas para los amantes de los juegos de mesa y de cartas. Crea una biblioteca de tus juegos, ten reglas, dados y mazos a mano, y sustituye los accesorios físicos por cómodas alternativas digitales.',
    },
    fr: {
      subtitle: 'Collection de jeux de société : règles, dés et decks',
      description:
        'GameKit est une collection numérique et une boîte à outils pour les amateurs de jeux de société et de cartes. Constituez une bibliothèque de vos jeux, gardez règles, dés et decks à portée de main, et remplacez les accessoires physiques par des équivalents numériques pratiques.',
    },
    it: {
      subtitle: 'Collezione di giochi da tavolo: regole, dadi e mazzi',
      description:
        'GameKit è una collezione digitale e un kit di strumenti per gli appassionati di giochi da tavolo e di carte. Crea una libreria dei tuoi giochi, tieni regole, dadi e mazzi a portata di mano e sostituisci gli accessori fisici con comodi equivalenti digitali.',
    },
    pl: {
      subtitle: 'Kolekcja gier planszowych: zasady, kości i talie',
      description:
        'GameKit to cyfrowa kolekcja i zestaw narzędzi dla miłośników gier planszowych i karcianych. Zbuduj bibliotekę swoich gier, trzymaj zasady, kości i talie pod ręką, a fizyczne akcesoria zamień na wygodne cyfrowe odpowiedniki.',
    },
  },
};
