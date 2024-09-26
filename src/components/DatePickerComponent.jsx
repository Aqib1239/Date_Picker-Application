import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import RecurrenceOptions from './RecurrenceOptions';
import RecurrenceCustomization from './RecurrenceCustomization';
import DateRangePicker from './DateRangePicker';
import MiniCalendar from './MiniCalendar';

const DatePickerComponent = () => {
  return (
    <Provider store={store}>
      <div className="p-4 mt-10 text-center bg-white/90 shadow-md rounded-md max-w-md mx-auto">
        <h2 className="text-lg font-semibold text-gray-800">Date Picker with Recurrence</h2>
        <RecurrenceOptions />
        <RecurrenceCustomization />
        <DateRangePicker />
        <MiniCalendar />
      </div>
    </Provider>
  );
};

export default DatePickerComponent;
