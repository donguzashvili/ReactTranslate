import React, { useState } from "react";
import "./styles.css";

import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

function App() {
  const [language, setLanguage] = useState();
  const [text, setText] = useState("");

  return (
    <div className="App">
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
