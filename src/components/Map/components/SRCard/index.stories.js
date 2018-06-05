import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SRCard from './index.jsx';

const issue = {
  service: {
    name: 'Water Leakage',
  },
  address: 'Mbezi Juu',
  description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  code: 'HLK170006',
  jurisdiction: {
    name: 'Mabibo',
  },
  status: {
    name: 'Escallated',
  },
  priority: {
    name: 'Critical',
  },
};

const store = createStore((state = { selectedMapPoint: issue }) => state);

storiesOf('SR Card', module)
  .addDecorator(story => (<Provider store={store}>{story()}</Provider>))
  .addWithInfo('Default', 'ServiceRequestcard is the card with issue info displayed on the map on marker click', () => <SRCard />)
  .addWithInfo('Hide', '', () => <SRCard />);
