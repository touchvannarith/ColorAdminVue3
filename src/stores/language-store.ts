import { defineStore } from 'pinia';
import type { ILanguage } from '@/types/language';
import { useI18n } from 'vue-i18n';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: {
      code: 'en',
      name: 'English',
      flag: 'us'
    },
    availableLanguages: [
      {
        code: 'en',
        name: 'English',
        flag: 'us'
      },
      {
        code: 'km',
        name: 'Khmer',
        flag: 'kh'
      },
      {
        code: 'zh',
        name: 'Chinese',
        flag: 'cn'
      },
      {
        code: 'ja',
        name: 'Japanese',
        flag: 'jp'
      },
      {
        code: 'fr',
        name: 'French',
        flag: 'fr'
      }
    ] as ILanguage[]
  }),
  actions: {
    setLanguage(lang: ILanguage) {
      this.currentLanguage = lang;
      const { locale } = useI18n();
      locale.value = lang.code;
      document.documentElement.lang = lang.code;
    }
  },
  persist: {
    key: 'language-store',
    storage: localStorage
  }
}); 