import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { apps } from '../data/apps';
import AppCard from '../components/AppCard';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const supportedLangs = ['en', 'uk', 'de', 'ru', 'es', 'fr', 'it', 'pl'];
    if (lang && supportedLangs.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      const detectLang = i18n.language.split('-')[0];
      const targetLang = supportedLangs.includes(detectLang) ? detectLang : 'en';
      navigate(`/${targetLang}`, { replace: true });
    }
  }, [lang, i18n, navigate]);

  return (
    <div className="min-h-screen">
      <Helmet htmlAttributes={{ lang: lang || i18n.language.split('-')[0] }}>
        <title>
          {t('ZiBY Apps')} - {t('Showcase of Awesome Apps').replace('<br />', '')}
        </title>
        <meta name="description" content={t('Hero Description')} />
        <meta name="keywords" content={t('SEO Keywords')} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://ziby-apps.github.io/#/${lang || 'en'}`} />
        <meta
          property="og:title"
          content={`${t('ZiBY Apps')} - ${t('Showcase of Awesome Apps').replace('<br />', '')}`}
        />
        <meta property="og:description" content={t('Hero Description')} />
        <meta property="og:image" content="https://ziby-apps.github.io/favicon.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://ziby-apps.github.io/#/${lang || 'en'}`} />
        <meta
          name="twitter:title"
          content={`${t('ZiBY Apps')} - ${t('Showcase of Awesome Apps').replace('<br />', '')}`}
        />
        <meta name="twitter:description" content={t('Hero Description')} />
        <meta name="twitter:image" content="https://ziby-apps.github.io/favicon.png" />

        <link rel="canonical" href={`https://ziby-apps.github.io/#/${lang || 'en'}`} />
      </Helmet>

      <header className="main-header animate-fade-in">
        <div className="header-content">
          <div className="flex items-center gap-4">
            <img src="/favicon.png" alt="ZiBY Apps icon" className="md:hidden max-h-[40px]" />
            <img src="/logo.png" alt="ZiBY Apps Logo" className="hidden md:block max-h-[54px]" />
          </div>
          <div className="flex items-center gap-8">
            <LanguageSwitcher />
            <a
              href="mailto:yashin.ziby@icloud.com"
              className="text-text-secondary text-[0.9rem] font-semibold hover:text-accent transition-colors"
            >
              {t('Contact')}
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-8">
        <main>
          <div className="hero animate-fade-in mb-16 text-center">
            <h1
              className="text-5xl md:text-[3.5rem] mb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: t('Showcase of Awesome Apps') }}
            ></h1>
            <p className="max-w-[600px] mx-auto text-text-secondary text-xl">{t('Hero Description')}</p>
          </div>

          <div className="apps-grid">
            {apps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </main>

        <footer className="main-footer animate-fade-in">
          <p className="mb-4">
            {t('Contact us')}:{' '}
            <a href="mailto:yashin.ziby@icloud.com" className="text-accent underline hover:no-underline">
              yashin.ziby@icloud.com
            </a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Yashin Pavlo. {t('All rights reserved')}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
