import { configureStore, createSlice } from '@reduxjs/toolkit';

// Recurrence slice
const recurrenceSlice = createSlice({
  name: 'recurrence',
  initialState: {
    startDate: null,
    endDate: null,
    recurrence: 'daily', // default is daily
    customRecurrence: {
      every: 1, // Default is every 1 unit (day, week, month, year)
      daysOfWeek: [], // For weekly recurrence
      dayOfMonth: 1, // For monthly recurrence
    },
  },
  reducers: {
    setRecurrence: (state, action) => {
      state.recurrence = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setCustomRecurrence: (state, action) => {
      state.customRecurrence = { ...state.customRecurrence, ...action.payload };
    },
  },
});

export const { setRecurrence, setStartDate, setEndDate, setCustomRecurrence } = recurrenceSlice.actions;

export const store = configureStore({
  reducer: {
    recurrence: recurrenceSlice.reducer,
  },
});
