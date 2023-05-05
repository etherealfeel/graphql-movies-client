import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Router>,
);

reportWebVitals();
