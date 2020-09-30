import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderStore = (containerId, props, ref) => {
  ReactDOM.render(
    <App {...props} ref={ref} />,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

window.unmountStore = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Store-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}
