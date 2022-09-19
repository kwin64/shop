import './FindUs.scss';

const FindUs = ({ dataFindUs }) => {
  return (
    <div className="findUs">
      <h1 className="title">{dataFindUs.title}</h1>
      <div className="description">
        <div className="map">map</div>
        <div className="contacts">
          {dataFindUs.contacts.map((contacts, index) => {
            return <p key={index}>{contacts}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
export default FindUs;
