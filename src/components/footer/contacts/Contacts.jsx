import './Contacts.scss';

const Contacts = ({ dataContacts }) => {
  return (
    <div className="socials">
      <h1 className="title">{dataContacts.title}</h1>
      <div className="wrapperIcons">
        {dataContacts.iconsSocials.map((socials, index) => {
          return <img key={index} src={socials} alt="" />;
        })}
      </div>
    </div>
  );
};
export default Contacts;
