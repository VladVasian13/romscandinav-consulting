import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18nextConf'; //LOCALIZATION
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
 <Suspense fallback="Loading...">
   <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </BrowserRouter>
  </Suspense>
  ,
  document.getElementById('root')
);

