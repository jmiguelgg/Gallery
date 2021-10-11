/**
 * @format
 */

import 'react-native';
import React from 'react';
import Albums from '../Albums';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Albums />);
});
