import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import LikedPetsMap from './liked-pets-map';
import Footer from '../common-components/footer';
import styles from './styles.module.scss';
import USER_LOCATION from '../../constants/queries/userLocationQuery';

const LikedPetsPage= () => {
  const { 
    loading: userLocationLoading, 
    error: userLocationError, 
    data: userLocation 
  } = useQuery(USER_LOCATION);

  let likedPetsMap;
  if (userLocationLoading) { likedPetsMap = (<div>Loading...</div>) }; 
  if (userLocationError) { likedPetsMap = (<div>ERROR</div>) }
  if (userLocation) { likedPetsMap = (<LikedPetsMap  userLocation={userLocation.currentUser} />) }
  return (
    <div className={styles.Page}>
      <div className={styles.Header}>header</div>
      <main className={styles.LikedPetsPage}>
        <div className={styles.LikedPetsCardsContainer}>cards</div>
        <div className={styles.LikedPetsMapContainer}>
          {likedPetsMap}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LikedPetsPage;