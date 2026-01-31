import React, { useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams, Link, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { apps } from '../data/apps';
import LanguageSwitcher from '../components/LanguageSwitcher';

const PrivacyPolicy: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const appId = searchParams.get('appId');

  useEffect(() => {
    // Handle legacy appId redirects
    if (appId === 'LearningTogether') {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('appId', 'BabyLearn');
      navigate({ search: newParams.toString() }, { replace: true });
      return;
    }

    const supportedLangs = ['en', 'uk', 'de', 'ru', 'es', 'fr', 'it', 'pl'];
    if (lang && supportedLangs.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      const detectLang = i18n.language.split('-')[0];
      const targetLang = supportedLangs.includes(detectLang) ? detectLang : 'en';
      navigate(`/${targetLang}/privacy-policy${appId ? `?appId=${appId}` : ''}`, { replace: true });
    }
  }, [lang, i18n, navigate, appId]);

  const app = useMemo(() => apps.find(v => v.id === appId), [appId]);
  const currentLang = i18n.language.split('-')[0];

  const appName = useMemo(() => {
    if (!app) return 'Application';
    return app.translations?.[currentLang]?.name || app.name;
  }, [app, currentLang]);

  return (
    <div className="privacy-page">
      <Helmet htmlAttributes={{ lang: currentLang }}>
        <title>
          {t('Privacy Policy')} - {appName} | {t('ZiBY Apps')}
        </title>
        <meta
          name="description"
          content={`${t('Privacy Policy')} for ${appName}. ${t('Privacy Policy Intro', { appName })}`}
        />
        <meta name="keywords" content={`${t('Privacy Policy')}, ${appName}, ZiBY Apps, data privacy`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${t('Privacy Policy')} - ${appName} | ${t('ZiBY Apps')}`} />
        <meta property="og:description" content={`Privacy Policy for ${appName} - ZiBY Apps`} />
        <meta property="og:image" content="https://ziby-apps.github.io/favicon.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${t('Privacy Policy')} - ${appName} | ${t('ZiBY Apps')}`} />
        <meta name="twitter:description" content={`Privacy Policy for ${appName} - ZiBY Apps`} />

        <link rel="canonical" href={`https://ziby-apps.github.io/#/${currentLang}/privacy-policy?appId=${app?.id}`} />
      </Helmet>
      <header className="main-header fade-in">
        <div className="header-content">
          <Link
            to={`/${currentLang}`}
            className="logo"
            style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}
          >
            <img src="/favicon.png" alt="ZiBY Apps Logo" />
            <img src="/logo.png" alt="ZiBY Apps Logo" className="hide-on-mobile" />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <LanguageSwitcher />
            <Link to={`/${currentLang}`} className="btn" style={{ background: 'rgba(255,255,255,0.1)' }}>
              ← {t('Back to Home')}
            </Link>
          </div>
        </div>
      </header>

      <div className="container">
        <main className="privacy-content fade-in">
          <h1>{t('Privacy Policy')}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>{appName}</p>

          <p>{t('Privacy Policy Intro', { appName })}</p>

          <p>{t('Privacy Policy App Provided', { appName })}</p>

          <p>{t('Privacy Policy Agreement')}</p>

          <p>{t('Privacy Policy Terms Definitions')}</p>

          <h2>{t('Information Collection and Use')}</h2>
          <p>{t('Information Collection Desc 1')}</p>
          <p>{t('Information Collection Desc 2')}</p>

          {(app?.withAdmob || app?.withAnalytics || app?.withCrashlytics) && (
            <>
              <p>{t('Service Privacy Links')}</p>
              <div
                style={{
                  marginBottom: '1.5rem',
                  background: 'rgba(56, 189, 248, 0.1)',
                  padding: '1rem',
                  borderRadius: '8px',
                }}
              >
                <ul>
                  {app?.withAdmob && (
                    <li>
                      <a
                        href="https://support.google.com/admob/answer/6128543?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        AdMob
                      </a>
                    </li>
                  )}
                  {app?.withAnalytics && (
                    <li>
                      <a href="https://www.google.com/analytics/terms/" target="_blank" rel="noopener noreferrer">
                        Google Analytics
                      </a>
                    </li>
                  )}
                  {app?.withCrashlytics && (
                    <li>
                      <a href="https://firebase.google.com/terms/crashlytics" target="_blank" rel="noopener noreferrer">
                        Firebase Crashlytics
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </>
          )}

          <h2>{t('Log Data')}</h2>
          <p>{t('Log Data Desc')}</p>

          <h2>{t('Cookies')}</h2>
          <p>{t('Cookies Desc 1')}</p>
          <p>{t('Cookies Desc 2')}</p>

          <h2>{t('Service Providers')}</h2>
          <p>{t('Service Providers Desc 1')}</p>
          <ul>
            <li>{t('Service Providers List 1')}</li>
            <li>{t('Service Providers List 2')}</li>
            <li>{t('Service Providers List 3')}</li>
            <li>{t('Service Providers List 4')}</li>
          </ul>
          <p>{t('Service Providers Desc 2')}</p>

          <h2>{t('Security')}</h2>
          <p>{t('Security Desc')}</p>

          <h2>{t('Data Deletion')}</h2>
          <p>{t('Data Deletion Desc')}</p>

          <h2>{t('Links to Other Sites')}</h2>
          <p>{t('Links to Other Sites Desc')}</p>

          <h2>{t("Children's Privacy")}</h2>
          {app?.forChild ? <p>{t('Children Privacy Kids App')}</p> : <p>{t('Children Privacy Standard App')}</p>}

          <h2>{t('Changes to This Privacy Policy')}</h2>
          <p>{t('Changes Desc')}</p>

          <p style={{ fontStyle: 'italic', marginTop: '2rem', opacity: 0.7 }}>{t('Effect Date')}</p>

          <div style={{ marginTop: '3rem', borderTop: '1px solid var(--card-border)', paddingTop: '2rem' }}>
            <h2>{t('Contact Us')}</h2>
            <p>{t('Contact Us Desc')}</p>
          </div>
        </main>

        <footer className="main-footer">
          <p>
            &copy; {new Date().getFullYear()} Yashin Pavlo. {t('All rights reserved')}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
