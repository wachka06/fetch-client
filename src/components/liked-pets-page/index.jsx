import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import LikedPetsMap from './liked-pets-map';
import Footer from '../common-components/footer';
import styles from './styles.module.scss';
import USER_LOCATION from '../../constants/queries/userLocationQuery';
import USERS_LIKED_PETS from '../../constants/queries/usersLikedPetsQuery';

const LikedPetsPage = () => {
  const {
    loading: userLocationLoading,
    error: userLocationError,
    data: userLocationResponse,
  } = useQuery(USER_LOCATION);

  const {
    loading: likedPetsLoading,
    error: likedPetsError,
    data: likedPetsResponse,
  } = useQuery(USERS_LIKED_PETS);

  let likedPetsMap;
  if (userLocationLoading || likedPetsLoading) { likedPetsMap = (<div>Loading...</div>); }
  if (userLocationError || likedPetsError) { likedPetsMap = (<div>ERROR</div>); }
  if (userLocationResponse && likedPetsResponse) {
    likedPetsMap = (
      <LikedPetsMap
        userLocation={userLocationResponse.currentUser}
        pets={likedPetsResponse.likedPets}
      />
    );
  }
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
