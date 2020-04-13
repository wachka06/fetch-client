import React, { useState } from 'react';
import MapGl, { NavigationControl, Popup } from 'react-map-gl';
import styles from './styles.module.scss';
import ShelterMarker from './shelter-marker';
import ShelterInfoDisplay from './shelter-info-display';

const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1Ijoid2ViYXBwcmVudGljZXRlYW0iLCJhIjoiY2s4c3ZyMW84MHI2cTNncTUyZ2RpdTZhaSJ9.wvNSyEEFLPfMzGzCOJNqrA';
const MAP_STYLE = 'mapbox://styles/webapprenticeteam/ck8sx168v01ok1jnstsaqzfhq';

const LikedPetsMap = (props) => {
  const { userLocation, pets, children } = props;
  const [popupInfo, setPopupInfo] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: userLocation.latitude,
    longitude: userLocation.longitude,
    zoom: 10,
  });

  const shelters = {};
  pets.forEach((current) => {
    const shelterId = current.pet.shelter.id;
    if (shelters.hasOwnProperty(shelterId)) {
      const pet = { ...current.pet };
      delete pet.shelter;
      shelters[shelterId].pets.push(current.pet);
    } else {
      const pet = { ...current.pet };
      shelters[shelterId] = pet.shelter;
      delete pet.shelter;
      shelters[shelterId].pets = [pet];
    }
  });

  const onClickMarker = (shelterId) => {
    setPopupInfo({ ...shelters[shelterId] });
  };

  const markers = Object.keys(shelters).map((shelterKey) => (
    <ShelterMarker
      key={`shelterMarker-${shelterKey}`}
      shelterId={shelterKey}
      latitude={parseFloat(shelters[shelterKey].latitude)}
      longitude={parseFloat(shelters[shelterKey].longitude)}
      numOfPets={shelters[shelterKey].pets.length}
      onClick={onClickMarker}
    />
  ));

  const renderShelterPopup = () => (popupInfo ? (
    <Popup
      className="shelter-info-popup"
      tipSize={5}
      anchor="left"
      offsetLeft={40}
      offsetTop={38}
      longitude={parseFloat(popupInfo.longitude)}
      latitude={parseFloat(popupInfo.latitude)}
      closeOnClick={false}
      onClose={() => setPopupInfo(null)}
    >
      <ShelterInfoDisplay
        info={popupInfo}
      />
    </Popup>
  ) : null);

  return (
    <div className={styles.LikedPetsMap}>
      <MapGl
        width={viewport.width}
        height={viewport.height}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        mapboxApiAccessToken={MAPBOX_PUBLIC_TOKEN}
        onViewportChange={setViewport}
        mapStyle={MAP_STYLE}
        children={children}
      >
        {markers}
        {renderShelterPopup()}
        <div className={styles.NavControl}>
          <NavigationControl showCompass={false} />
        </div>
      </MapGl>
    </div>
  );
};

export default LikedPetsMap;
