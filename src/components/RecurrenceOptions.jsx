import { useDispatch, useSelector } from 'react-redux';
import { setRecurrence } from '../store/store';

const RecurrenceOptions = () => {
  const dispatch = useDispatch();
  const recurrence = useSelector((state) => state.recurrence.recurrence);

  const handleRecurrenceChange = (e) => {
    dispatch(setRecurrence(e.target.value));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Recurrence Pattern</label>
      <select value={recurrence} onChange={handleRecurrenceChange} className="w-full px-2 py-1 border-gray-700 rounded-md bg-black">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
