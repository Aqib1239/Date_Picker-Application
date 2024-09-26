import { useDispatch, useSelector } from 'react-redux';
import { setCustomRecurrence } from '../store/store';

const RecurrenceCustomization = () => {
  const dispatch = useDispatch();
  const { recurrence, customRecurrence } = useSelector((state) => state.recurrence);

  const handleCustomRecurrenceChange = (e) => {
    dispatch(setCustomRecurrence({ [e.target.name]: e.target.value }));
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Customize Recurrence</label>

      {recurrence === 'weekly' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Every X weeks</label>
          <input
            type="number"
            name="every"
            value={customRecurrence.every}
            onChange={handleCustomRecurrenceChange}
            className="w-full bg-black px-2 py-1 border-gray-700 rounded-md shadow-sm"
          />
        </div>
      )}

      {recurrence === 'monthly' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Day of the Month</label>
          <input
            type="number"
            name="dayOfMonth"
            value={customRecurrence.dayOfMonth}
            onChange={handleCustomRecurrenceChange}
            className="w-full bg-black px-2 py-1 border-gray-700 rounded-md shadow-sm"
          />
        </div>
      )}
    </div>
  );
};

export default RecurrenceCustomization;
