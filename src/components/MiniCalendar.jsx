import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const MiniCalendar = () => {
  const { startDate, endDate, recurrence, customRecurrence } = useSelector((state) => state.recurrence);
  const [highlightedDates, setHighlightedDates] = useState([]);

  useEffect(() => {
    if (!startDate) return;

    let dates = [];
    let currentDate = new Date(startDate);

    while (!endDate || currentDate <= new Date(endDate)) {
      dates.push(new Date(currentDate));

      if (recurrence === 'daily') {
        currentDate.setDate(currentDate.getDate() + (customRecurrence.every || 1));
      } else if (recurrence === 'weekly') {
        currentDate.setDate(currentDate.getDate() + (customRecurrence.every * 7 || 7));
      } else if (recurrence === 'monthly') {
        currentDate.setMonth(currentDate.getMonth() + (customRecurrence.every || 1));
      } else if (recurrence === 'yearly') {
        currentDate.setFullYear(currentDate.getFullYear() + (customRecurrence.every || 1));
      }
    }

    setHighlightedDates(dates);
  }, [startDate, endDate, recurrence, customRecurrence]);

  const tileClassName = ({ date }) => {
    return highlightedDates.some(
      (highlightDate) =>
        date.getFullYear() === highlightDate.getFullYear() &&
        date.getMonth() === highlightDate.getMonth() &&
        date.getDate() === highlightDate.getDate()
    )
      ? 'bg-blue-600 text-white font-semibold'
      : 'text-red-400 font-semibold bg-black ';
  };

  return (
    <div className="my-4">
      <h3 className="text-gray-700 mb-2">Recurring Dates Preview:</h3>
      <Calendar tileClassName={tileClassName} className="bg-black text-blue-600 font-semibold"  />
    </div>
  );
};

export default MiniCalendar;
