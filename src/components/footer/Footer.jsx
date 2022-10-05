import Contacts from './contacts/Contacts';
import FindUs from './findUs/FindUs';
import './Footer.scss';
import Schedule from './schedule/Schedule';

import instagramIcon from '../../assets/socials/instagram.svg';
import facebookIcon from '../../assets/socials/facebook.svg';
import twitterIcon from '../../assets/socials/twitter.svg';

const dataFooter = {
  dataSchedule: {
    title: 'Hours',
    days: [
      'Sunday, Monday: Closed',
      'Tuesday: 11 am  - 9 pm',
      'Wednesday: 11 am  - 9 pm',
      'Thursday: 11 am  - 9 pm',
      'Friday:11 am  - 9:30 pm',
      'Saturday:11 am  - 9:30 pm',
    ],
  },
  findUs: {
    // title: 'Find Us',
    contacts: [
      'Address: 424 Front St, Chicopee, MA 01013',
      'Phone: 413-592-1715',
      'Phone: 413-592-9577',
      'Fax: 413-592-7517',
      'Email: info@johnspizzeriama.com',
    ],
  },
  socials: {
    title: 'We are social',
    socials: [
      { [instagramIcon]: 'http://instagram.com' },
      { [facebookIcon]: 'http://facebook.com' },
      { [twitterIcon]: 'http://twitter.com' },
    ],
  },
};
const Footer = () => {
  return (
    <div className="footer">
      <Schedule dataSchedule={dataFooter.dataSchedule} />
      <FindUs dataFindUs={dataFooter.findUs} />
      <Contacts dataSocials={dataFooter.socials} />
    </div>
  );
};
export default Footer;
