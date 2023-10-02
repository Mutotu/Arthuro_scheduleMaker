
import { useState } from 'react';
import './App.css';
// import ShiftTable from './ShiftTable';
import { employees } from "./data"

function App() {
  const [offTimesData, setOffTimesData] = useState(employees)

  const handleChange = (employeeId, day, i) => {
    i = i[0]
    const updatedData = offTimesData.map(employee => {
      if (employee.id === employeeId) {
        const updatedAvailability = employee.availability.map(availDay => {
          if (availDay.day === day) {
            const a = availDay.times.map(o => {
              if (Object.keys(o)[0] === i) {
                o[i] = !o[i]
                return o
              }
              return o
            })
            // const updatedTimes = { ...availDay.times };
            // updatedTimes[time] = !updatedTimes[time];
            return {
              ...availDay,
              times: a,
            };
          }
          return availDay;
        });
        return {
          ...employee,
          availability: updatedAvailability,
        };
      }
      return employee;
    });
    setOffTimesData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(offTimesData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {offTimesData.map(employee => (
          <div key={employee.id} className="employee">
            <h2 className="employee-name">{employee.name}</h2>
            {employee.availability.map(day => (
              <div key={day.day} className="availability">
                <h3 className="day-name">{day.day}</h3>
                <div className="time-list">
                  {day.times.map((timeObj, i) => (
                    <label key={i} className="time-label">
                      <input
                        type="checkbox"
                        checked={Object.values(timeObj)[0]}
                        onChange={() => handleChange(employee.id, day.day, Object.keys(day.times[i]))}
                      />
                      {Object.keys(timeObj)[0]}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="submit-button">Ready</button>
      </form>
    </div>
  );
}

export default App;