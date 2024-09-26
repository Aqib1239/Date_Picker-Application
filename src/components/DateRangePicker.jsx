import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStartDate, setEndDate } from '../store/store';

const DateRangePicker = () => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.recurrence);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => dispatch(setStartDate(date))}
        className="w-full px-2 py-1 bg-black border-gray-700 rounded-md shadow-sm"
        isClearable
      />

      <label className="block text-sm font-medium text-gray-700 mb-2">End Date (Optional)</label>
      <ReactDatePicker
        selected={endDate}
        onChange={(date) => dispatch(setEndDate(date))}
        className="w-full px-2 py-1 bg-black border-gray-700 rounded-md shadow-sm"
        isClearable
      />
    </div>
  );
};

export default DateRangePicker;
