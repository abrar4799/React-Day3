import { useContext } from "react";
import { langContext } from "../Context/LangContext";

export default function ChangeLange() {
  const { contextLang, setContextLang } = useContext(langContext);


return (
  <div>
    <button
      className="btn btn-danger"
      onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}
    >
      {contextLang}
    </button>
  </div>
);
}
