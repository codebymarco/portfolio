import { create } from "zustand";
import enTranslation from "../translations/en.json";

const useTranslationStore = create((set) => ({
  language: localStorage.getItem("lang") || "en",
  translations: enTranslation, // Default to English translations

  // Function to change the language
  setLanguage: async (lang) => {
    try {
      // Save the language preference to localStorage
      localStorage.setItem("lang", lang);

      // Dynamically import the translation file
      const translationModule = await import(`../translations/${lang}.json`);

      // Update the store with the new language and translations
      set({
        language: lang,
        translations: translationModule.default,
      });

      return true;
    } catch (error) {
      console.error(`Failed to load language: ${lang}`, error);
      return false;
    }
  },

  // Helper function to get a translation by key
  t: (key) => {
    const state = useTranslationStore.getState();
    return state.translations[key] || key;
  },
}));

export default useTranslationStore;

/*   import React from 'react';
  import useTranslationStore from '../store/useTranslationStore';
  
  function LanguageSwitcher() {
    const { language, setLanguage, t } = useTranslationStore();
    
    const handleLanguageChange = (e) => {
      setLanguage(e.target.value);
    };
     */
