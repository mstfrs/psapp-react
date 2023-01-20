import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { useSelector } from "react-redux";

const apiKey = "8upFwOsYI6yMMxHK_Y5A9A";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;
// const language=useSelector((state)=>state.lang)
i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "EN",
    lng:"en",
    

    ns: ["common"],
    defaultNS: "common",

    supportedLngs: ["en","ar","tr","fr"],
    
    backend: {
      loadPath: loadPath
    }
  })