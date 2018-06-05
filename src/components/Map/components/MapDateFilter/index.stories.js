import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import store from '../../../../store';
import DateFilter from './index.jsx';

const handleDatesChange = () => { };

storiesOf('Date Filter', module)
  .addDecorator(story => (<Provider store={store}>{story()}</Provider>))
  .addWithInfo('Default', 'Date Filter', () => (<DateFilter onDatesChange={handleDatesChange}
  />));
