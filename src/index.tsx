import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route} from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './Home';
import Room from './Room';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/*
callBack to get the 

a coolback to get
*/

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="room" element={<Room />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
