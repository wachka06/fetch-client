import React from 'react';
import { Marker } from 'react-map-gl';
import styles from './styles.module.scss';


const ShelterMarker = (props) => {
  const { latitude, longitude, numOfPets } = props;
  return (
    <div className={styles.markerContainer} onClick={() => props.onClick(props.shelterId)}>
      <Marker
        latitude={latitude}
        longitude={longitude}
      >
        <span className={styles.markerCount}>{numOfPets}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 40 38">
          <path fill="#FFF" fillRule="evenodd" stroke="#E17459" strokeWidth="2" d="M29 1.948c-3.185 0-6.241 1.498-8.236 3.86-.275.324-.53.666-.764 1.023-.234-.356-.49-.698-.764-1.024-1.995-2.361-5.05-3.859-8.236-3.859-2.799 0-5.3 1.106-7.1 2.92C2.097 6.686 1 9.212 1 12.038c0 7.417 6.79 13.383 16.775 22.51l2.228 2.045 2.303-2.098C32.233 25.4 39 19.442 39 12.038c0-2.826-1.097-5.352-2.9-7.17-1.8-1.814-4.301-2.92-7.1-2.92z" />
        </svg>
      </Marker>
    </div>
  );
};

export default ShelterMarker;
