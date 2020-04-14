import React, { useState } from 'react';
import MapGl, { NavigationControl } from 'react-map-gl';
import styles from './styles.module.scss';
const MAPBOX_PUBLIC_TOKEN = 'pk.eyJ1Ijoid2ViYXBwcmVudGljZXRlYW0iLCJhIjoiY2s4c3ZyMW84MHI2cTNncTUyZ2RpdTZhaSJ9.wvNSyEEFLPfMzGzCOJNqrA';
const MAP_STYLE = "mapbox://styles/webapprenticeteam/ck8sx168v01ok1jnstsaqzfhq";


const LikedPetsMap = (props) => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: props.userLocation.latitude,
    longitude: props.userLocation.longitude,
    zoom: 10
  });

  return(
    <div className={styles.LikedPetsMap}>
      <MapGl
        {...viewport}
        mapboxApiAccessToken={MAPBOX_PUBLIC_TOKEN}
        onViewportChange={setViewport}
        mapStyle={MAP_STYLE}
        children={props.children}
      >
        <div className={styles.NavControl}>
          <NavigationControl showCompass={false} />
        </div>
      </MapGl>
    </div>
  )
}

export default LikedPetsMap;