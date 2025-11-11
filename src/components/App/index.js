import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import Routes from '../../Routes';

import { Container } from './styles';
import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
    <BrowserRouter basename="/MyContactsFrontEnd">
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <ToastContainer />

            <Container style={{ padding: "0rem 30rem 20rem 30rem"}}>
                <Header />
                <Routes />
            </Container>

        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
