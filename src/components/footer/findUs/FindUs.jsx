import { Map } from '../map/GoogleMap';
import { useJsApiLoader } from '@react-google-maps/api';
import './FindUs.scss';

const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

const FindUs = ({ dataFindUs }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY',
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
