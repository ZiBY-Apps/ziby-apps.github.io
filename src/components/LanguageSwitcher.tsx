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

  return (
    <div className="language-dropdown-wrapper">
      <select value={currentLang} onChange={handleLanguageChange} className="language-select">
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
      <div className="select-arrow"></div>
    </div>
  );
};

export default LanguageSwitcher;
