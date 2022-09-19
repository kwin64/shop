import './Contacts.scss';

const Contacts = ({ dataContacts }) => {
  return (
    <div className="contacts">
      <h1>{dataContacts.title}</h1>
      <div className="wrapperIcons">
        {dataContacts.iconsSocials.map((socials, index) => {
          return <img key={index} src={socials} alt="" />;
        })}
      </div>
    </div>
  );
};
export default Contacts;
