import { GoogleMap } from '@react-google-maps/api';
import { useCallback, useRef } from 'react';
import './GoogleMap.scss';

const containerStyle = {
  width: '100%',
  height: '145px',
};

export const Map = ({ center }) => {
  const mapRef = useRef(undefined);
  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <div className="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}></GoogleMap>
    </div>
  );
};
