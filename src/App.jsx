import { Footer } from './Pages/Footer';
import GlobalStyles from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import RoutesSistem from './Routes';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RoutesSistem />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
