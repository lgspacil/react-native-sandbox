import { TabNavigator } from 'react-navigation';
import React from 'react';

import Feed from '../navigation/Feed'
import Me from '../navigation/Me'

export const Tabs = TabNavigator({
    Feed: {
      screen: Feed,
    },
    Me: {
      screen: Me,
    },
  });
