import './FindUs.scss';

const FindUs = ({ dataFindUs }) => {
  return (
    <div className="findUs">
      <div className="title">{dataFindUs.title}</div>
      <div className="description">
        <div className="map">map</div>
        <div className="contacts">
          {dataFindUs.contacts.map((contacts, index) => {
            return <div key={index}>{contacts}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
export default FindUs;
