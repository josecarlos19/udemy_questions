import React from 'react';
import { SafeAreaView } from 'react-native';

import ScreenA from './views/ScreenA';
import ScreenB from './views/ScreenB';
import ScreenC from './views/ScreenC';

export default () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScreenA />
    <ScreenB />
    <ScreenC />
  </SafeAreaView>
);
