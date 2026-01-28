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
    <div className="home-page">
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
      <header className="main-header fade-in">
        <div className="header-content">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/logo.png" alt="ZiBY Apps Logo" style={{ height: '54px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <LanguageSwitcher />
            <a
              href="mailto:yashin.ziby@icloud.com"
              style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}
            >
              {t('Contact')}
            </a>
          </div>
        </div>
      </header>

      <div className="container">
        <main>
          <div className="hero fade-in" style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h1
              style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
              dangerouslySetInnerHTML={{ __html: t('Showcase of Awesome Apps') }}
            ></h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
              {t('Hero Description')}
            </p>
          </div>

          <div className="apps-grid">
            {apps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </main>

        <footer className="main-footer fade-in">
          <p style={{ marginBottom: '1rem' }}>
            {t('Contact us')}:{' '}
            <a href="mailto:yashin.ziby@icloud.com" style={{ color: 'var(--accent-color)' }}>
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
