import React, { createContext, useReducer, useMemo } from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import 'intl-pluralrules';




interface LangContextData {
    t:any
    changeLanguage:Function
}

i18n.use(initReactI18next).init({
    lng: 'es', // Set the default language
    fallbackLng: 'es', // Fallback language if the selected language is not available
    resources: {
      en: { translation: require('../../locales.en.json') },
      es: { translation: require('../../locales.es.json') },
      // Add more locales here if needed
    },
    interpolation: {
      escapeValue: false,
    },
  });
// Crear el contexto
export const LanguageContext = createContext<LangContextData>({t:null,changeLanguage:() => {}});

// Definir el estado inicial
const initialState = {
  language: 'es',
};

// Definir el reducer
const reducer = (state:any, action:any) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

// Crear el LanguageProvider
const LanguageProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { t } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = state.language === 'en' ? 'es' : 'en';
    dispatch({ type: 'CHANGE_LANGUAGE', payload: newLanguage });
    i18n.changeLanguage(newLanguage);
  };

  const contextValue = useMemo(() => ({ t, changeLanguage }), [
    state
  ]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};


export default LanguageProvider;
