import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import "@fontsource/roboto"
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react';
import { Loading } from './components/Loading';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
let theme = createMuiTheme({
  "palette": {
    "primary": { main: "#e91e63" },
    "secondary": { main: "#e57373" }
  }
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />

        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
