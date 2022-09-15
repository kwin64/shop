// import './Footer.scss';

const Contacts = ({ dataContacts }) => {
  return (
    <div className="contacts">
      <h1>{dataContacts.title}</h1>
      {console.log(dataContacts)}
      {dataContacts.socials.map((socials, index) => {
        return (
          <div key={index}>
            <img src={dataContacts.iconsSocials} alt={socials.split(' ')[0]} />
            <p>{}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Contacts;
