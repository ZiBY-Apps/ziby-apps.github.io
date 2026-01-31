import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppData } from '../data/apps';
import { Link } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

interface AppCardProps {
  app: AppData;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const { t, i18n } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);

  const currentLang = i18n.language.split('-')[0];

  const { name, subtitle, description, logo, appleId, googleId, id, forChild, comingSoon } = useMemo(() => {
    const translation = app.translations?.[currentLang];
    return {
      ...app,
      name: translation?.name || app.name,
      subtitle: translation?.subtitle || app.subtitle,
      description: translation?.description || app.description,
    };
  }, [app, currentLang]);

  const getImagePath = (path: string) => {
    if (path.startsWith('http')) return path;
    const baseUrl = import.meta.env.BASE_URL;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${baseUrl}${cleanPath}`;
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const storeUrl = appleId
    ? `https://apps.apple.com/app/id${appleId}`
    : `https://play.google.com/store/apps/details?id=${googleId}`;

  return (
    <div className="group perspective-[1000px] h-full animate-fade-in">
      <div
        className={`relative w-full h-full text-left transition-transform duration-700 cubic-bezier[0.175,0.885,0.32,1.275] preserve-3d flex ${isFlipped ? 'rotate-y-180' : ''} group-hover:-translate-y-2`}
      >
        {/* Front Side */}
        <div className="relative z-[2] w-full h-full backface-hidden rounded-[20px] p-8 bg-card-bg border border-card-border flex flex-col transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6),0_0_20px_var(--color-accent-glow)]">
          <div
            className={`absolute top-[15px] right-[15px] text-[0.65rem] font-extrabold px-2.5 py-[3px] rounded-md tracking-wider shadow-[0_4px_12px_rgba(56,189,248,0.3)] z-10 uppercase text-white ${
              comingSoon
                ? 'bg-gradient-to-br from-amber-500 to-amber-700'
                : 'bg-gradient-to-br from-accent to-[#0ea5e9]'
            }`}
          >
            {comingSoon ? t('Coming Soon') : forChild ? 'KIDS' : 'UTILITY'}
          </div>

          <div className="w-20 h-20 rounded-[20px] overflow-hidden mb-8 shrink-0 border border-white/10 shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
            <img src={getImagePath(logo)} alt={`${name} logo`} className="w-full h-full object-cover block" />
          </div>

          <div className="mb-4">
            <h3 className="text-[1.6rem] mb-1 tracking-tight font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              {name}
            </h3>
            {subtitle && (
              <p className="text-[0.85rem] text-accent font-semibold uppercase tracking-widest opacity-90">
                {subtitle}
              </p>
            )}
          </div>

          <div className="grow">
            <p className="text-text-secondary leading-relaxed mb-6 text-[0.95rem]">{description}</p>
          </div>

          <div className="mt-auto border-t border-white/5 pt-5 flex flex-col items-center gap-4 w-full">
            {!comingSoon ? (
              <>
                <div className="flex gap-3 flex-wrap justify-center">
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

                <button
                  className="bg-white/5 border border-white/10 text-white px-5 py-2 rounded-xl cursor-pointer text-[0.85rem] flex items-center gap-2 transition-all duration-300 hover:bg-accent hover:border-accent hover:shadow-[0_0_15px_var(--color-accent-glow)] outline-none"
                  onClick={handleFlip}
                >
                  <span>{t('View QR Code')}</span>
                </button>
              </>
            ) : (
              <div className="bg-amber-500/10 border border-dashed border-amber-500/40 text-amber-500 p-4 rounded-xl text-[0.9rem] font-medium text-center w-full">
                <p>{t('Available soon in App Store & Google Play')}</p>
              </div>
            )}

            <Link
              to={`/${currentLang}/privacy-policy?appId=${id}`}
              className="text-[0.75rem] text-text-secondary opacity-50 no-underline transition-opacity hover:opacity-100 hover:underline mt-2"
            >
              {t('Privacy Policy')}
            </Link>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute top-0 left-0 w-full h-full backface-hidden rounded-[20px] p-8 bg-gradient-to-br from-card-bg to-[#1e293b]/90 border border-card-border flex flex-col justify-center items-center text-center rotate-y-180 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6),0_0_20px_var(--color-accent-glow)]">
          <div className="text-white mb-4">
            <h4 className="mb-1 text-[1.3rem] font-bold text-white">{name}</h4>
            <p className="text-[0.9rem] text-text-secondary m-0">{t('Scan to download')}</p>
          </div>

          <div className="bg-white p-4 rounded-2xl mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] inline-block">
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

          <button
            className="bg-transparent border border-accent text-accent px-5 py-2 rounded-xl cursor-pointer transition-all duration-300 font-semibold hover:bg-accent hover:text-white outline-none"
            onClick={handleFlip}
          >
            {t('Back to Info')}
          </button>

          <div className="mt-6 border-none flex flex-col items-center w-full">
            <Link
              to={`/${currentLang}/privacy-policy?appId=${id}`}
              className="text-[0.75rem] text-text-secondary opacity-50 no-underline transition-opacity hover:opacity-100 hover:underline"
            >
              {t('Privacy Policy')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
