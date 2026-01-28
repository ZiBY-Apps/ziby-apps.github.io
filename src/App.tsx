import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { i18n } = useTranslation();
  const detectedLang = i18n.language?.split('-')[0] || 'en';

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to={`/${detectedLang}`} replace />} />

        {/* Language specific routes */}
        <Route path="/:lang" element={<Home />} />
        <Route path="/:lang/privacy-policy" element={<PrivacyPolicy />} />

        {/* Support for legacy or direct links without language prefix */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Fallback for invalid paths */}
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
