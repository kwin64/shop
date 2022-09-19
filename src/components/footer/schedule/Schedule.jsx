import './Schedule.scss';

const Schedule = ({ dataSchedule }) => {
  return (
    <div className="wrapperSchedule">
      <h1 className="title">{dataSchedule.title}</h1>
      {dataSchedule.days.map((days, index) => {
        return (
          <div className="schedule" key={index}>
            <p>{days}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Schedule;
