// src/pages/_app.tsx
import '../styles/globals.css'; // Global CSS import here

const MyApp = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default MyApp;
