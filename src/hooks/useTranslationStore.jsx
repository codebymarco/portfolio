import useTranslationStore from '../store/store';
  
const useTranslation = () => {
  const { language, translations, t, setLanguage } = useTranslationStore();
  
  return {
    language,
    translations,
    t,
    setLanguage
  };
};

export default useTranslation