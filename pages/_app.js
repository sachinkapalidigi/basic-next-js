import React from "react";
import '../styles/global.css';
// Import global css only in _app.js

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
