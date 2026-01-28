import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppData } from '../data/apps';
import './AppCard.css';
import { Link } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

interface AppCardProps {
  app: AppData;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const { t, i18n } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);

  const currentLang = i18n.language.split('-')[0]; // Handle cases like 'en-US'

  const { name, subtitle, description, logo, appleId, googleId, id, forChild, comingSoon } = useMemo(() => {
    const translation = app.translations?.[currentLang];
    return {
      ...app,
      name: translation?.name || app.name,
      subtitle: translation?.subtitle || app.subtitle,
      description: translation?.description || app.description,
    };
  }, [app, currentLang]);

  // Helper to resolve paths with correct base URL (for GitHub Pages)
  const getImagePath = (path: string) => {
    if (path.startsWith('http')) return path;
    const baseUrl = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${baseUrl}${cleanPath}`;
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Determine the URL for the QR code
  // Prioritize App Store if available, then Google Play
  const storeUrl = appleId
    ? `https://apps.apple.com/app/id${appleId}`
    : `https://play.google.com/store/apps/details?id=${googleId}`;

  return (
    <div className={`app-card fade-in ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="app-card-inner">
        {/* Front Side */}
        <div className="app-card-front">
          <div
            className="app-card-badge"
            style={comingSoon ? { background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' } : {}}
          >
            {comingSoon ? t('Coming Soon').toUpperCase() : forChild ? 'KIDS' : 'UTILITY'}
          </div>
          <div className="app-logo-wrapper">
            <img src={getImagePath(logo)} alt={`${name} logo`} className="app-logo" />
          </div>
          <div className="app-header">
            <h3 className="app-name">{name}</h3>
            {subtitle && <p className="app-subtitle">{subtitle}</p>}
          </div>
          <div className="app-description-container">
            <p className="app-description">{description}</p>
          </div>

          <div className="app-footer">
            {!comingSoon ? (
              <>
                <div className="store-links">
                  {appleId && (
                    <a
                      href={`https://apps.apple.com/app/id${appleId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('Get on App Store')}
                    >
                      <img src={getImagePath('/app-store.png')} alt={t('Get on App Store')} className="store-badge" />
                    </a>
                  )}
                  {googleId && (
                    <a
                      href={`https://play.google.com/store/apps/details?id=${googleId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('Get on Play Store')}
                    >
                      <img
                        src={getImagePath('/google-play-store.png')}
                        alt={t('Get on Play Store')}
                        className="store-badge"
                      />
                    </a>
                  )}
                </div>

                <button className="qr-button" onClick={handleFlip}>
                  <span>{t('View QR Code')}</span>
                </button>
              </>
            ) : (
              <div className="coming-soon-placeholder">
                <p>{t('Available soon in App Store & Google Play')}</p>
              </div>
            )}

            <Link to={`/${currentLang}/privacy-policy?appId=${id}`} className="privacy-mini-link">
              {t('Privacy Policy')}
            </Link>
          </div>
        </div>

        {/* Back Side */}
        <div className="app-card-back">
          <div className="qr-info">
            <h4>{name}</h4>
            <p>{t('Scan to download')}</p>
          </div>

          <div className="qr-container">
            <QRCodeCanvas
              value={storeUrl}
              size={180}
              level={'H'}
              includeMargin={false}
              imageSettings={{
                src: getImagePath(logo),
                x: undefined,
                y: undefined,
                height: 40,
                width: 40,
                excavate: true,
              }}
            />
          </div>

          <button className="back-button" onClick={handleFlip}>
            {t('Back to Info')}
          </button>

          <div className="app-footer" style={{ border: 'none', marginTop: '1.5rem' }}>
            <Link to={`/${currentLang}/privacy-policy?appId=${id}`} className="privacy-mini-link">
              {t('Privacy Policy')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
