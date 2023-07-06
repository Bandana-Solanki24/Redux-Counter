// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Component/Store';
import Counter from './Component/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
};

export default App;

