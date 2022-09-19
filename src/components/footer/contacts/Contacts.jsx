import { Link } from 'react-router-dom';
import './Contacts.scss';

const Contacts = ({ dataSocials }) => {
  return (
    <div className="socials">
      <h1 className="title">{dataSocials.title}</h1>
      <div className="wrapperIcons">
        {dataSocials.socials.map((socials, index) => {
          return (
            <a
              key={index}
              href={`${Object.values(socials).toString()}`}
              target="_blank"
              rel="noreferrer">
              <img key={index} src={Object.keys(socials)[0]} alt="" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Contacts;
