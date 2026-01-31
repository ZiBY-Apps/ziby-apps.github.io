import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const location = useLocation();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'uk', label: 'Українська' },
    { code: 'ru', label: 'Русский' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'it', label: 'Italiano' },
    { code: 'pl', label: 'Polski' },
  ];

  const currentLang = lang || i18n.language.split('-')[0] || 'en';

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);

    // Construct new path: replace current lang prefix with new lang
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0 && languages.some(l => l.code === pathSegments[0])) {
      pathSegments[0] = newLang;
    } else {
      pathSegments.unshift(newLang);
    }

    navigate(`/${pathSegments.join('/')}${location.search}${location.hash}`);
  };

  const selectedLanguage = languages.find(l => l.code === currentLang);

  return (
    <div className="relative inline-flex items-center">
      {/* Візуальне представлення */}
      <div className="flex items-center bg-white/5 border border-card-border text-text-primary px-4 pr-10 py-2 rounded-lg text-sm font-medium transition-all pointer-events-none group-hover:bg-white/10 group-focus-within:border-accent group-focus-within:ring-2 group-focus-within:ring-accent-glow">
        <span className="md:hidden uppercase">{currentLang}</span>
        <span className="hidden md:inline">{selectedLanguage?.label}</span>
      </div>

      {/* Справжній селект, який відкриває нативний список */}
      <select
        value={currentLang}
        onChange={handleLanguageChange}
        className="absolute inset-0 opacity-0 cursor-pointer appearance-none w-full h-full"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code} className="bg-bg-main text-text-primary p-2">
            {lang.label}
          </option>
        ))}
      </select>

      {/* Стрілочка */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-text-secondary pointer-events-none"></div>
    </div>
  );
};

export default LanguageSwitcher;
