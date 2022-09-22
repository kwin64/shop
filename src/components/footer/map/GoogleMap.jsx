import { GoogleMap } from '@react-google-maps/api';
import './GoogleMap.scss';

const containerStyle = {
  width: '100%',
  height: '135px',
};

export const Map = ({ center }) => {
  // const mapRef = useRef(null);
  // const onLoad = useCallback(function callback(map) {
  //   mapRef.current = map;
  // }, []);
  // const onUnmount = useCallback(function callback(map) {
  //   mapRef.current = null;
  // }, []);

  return (
    <div className="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}></GoogleMap>
    </div>
  );
};
