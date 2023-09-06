import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./en.json";
import Vietnamese from "./vi.json";

const resources = {
  en: {
    translation: English,
  },
  vi: {
    translation: Vietnamese,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
    format: function (value: string, format?: string, _lng?: string) {
      if (format === "uppercase") return value.toUpperCase();
      if (format === "lowercase") return value.toLowerCase();
      return value;
    },
  },
});

export default i18n;
