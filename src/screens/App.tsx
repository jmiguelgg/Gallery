import React from 'react';
import {Provider} from '../store';
import Navigator from './Navigator';

const App = (): JSX.Element => {
  return (
    <Provider>
      <Navigator />
    </Provider>
  );
};

export default App;
