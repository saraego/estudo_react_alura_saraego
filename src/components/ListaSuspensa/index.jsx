import './styles.css';
export const ListaSuspensa = ({ label }) => {
  const times = [
    'Programção',
    'Front-end',
    'Data Science',
    'Inteligencia Artificial',
    'DevOps',
    'UX & Design',
    'Mobile',
    'Inovação & Gestão',
  ];
  return (
    <div className="campo_suspenso">
      <label htmlFor="">{label}</label>
      <select>
        {times.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
    </div>
  );
};
