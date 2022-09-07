import App from "./App";

import React, { useState, useEffect } from "react";

const SizeScale = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div>
      {matches && <App style={{ fontSize: "1000px;" }} />}
      {!matches && <App style={{ backgroundColor: "red" }} />}
    </div>
  );
};

export default SizeScale;
