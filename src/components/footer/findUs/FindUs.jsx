import { Map } from '../map/GoogleMap';
import { useJsApiLoader } from '@react-google-maps/api';
import './FindUs.scss';

const defaultCenter = {
  lat: 42.148,
  lng: -72.60077,
};

const FindUs = ({ dataFindUs }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  return (
    <div className="findUs">
      <h1 className="title">{dataFindUs.title}</h1>
      <div className="description">
        <div className="map">{isLoaded ? <Map center={defaultCenter} /> : 'Error loading'}</div>
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
