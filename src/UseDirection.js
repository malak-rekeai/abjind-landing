import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useDirection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = i18n.language;
    const dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
  }, [i18n.language]);
};

export default useDirection;