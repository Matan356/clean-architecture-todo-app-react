import { createContext } from 'react';
import { Accessibility } from 'accessibility';
// hooks
import { t } from 'i18next';

export const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  const labels = {
    resetTitle: t('reset'),
    closeTitle: t('close'),
    menuTitle: t('accessibility'),
    increaseText: t('increase text size'),
    decreaseText: t('decrease text size'),
    increaseTextSpacing: t('increase text spacing'),
    decreaseTextSpacing: t('decrease text spacing'),
    increaseLineHeight: t('increase line height'),
    decreaseLineHeight: t('decrease line height'),
    invertColors: t('invert colors'),
    grayHues: t('gray hues'),
    underlineLinks: t('underline links'),
    bigCursor: t('big cursor'),
    readingGuide: t('readingGuide'),
    textToSpeech: t('textToSpeech'),
    speechToText: t('speechToText'),
    disableAnimations: t('disableAnimations'),
  };

  const options = {
    labels,
    icon: {
      circular: true,
    },
    textToSpeechLang: 'he',
    speechToTextLang: 'he',
    language: 'he',
  };

  // Provide the accessibility instance to all child components
  return (
    <AccessibilityContext.Provider value={new Accessibility(options)}>
      {children}
    </AccessibilityContext.Provider>
  );
}
