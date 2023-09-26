import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyle';
import { theme } from './styles/theme';
import { AppRoutes } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
