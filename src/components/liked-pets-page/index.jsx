import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import LikedPetsMap from './liked-pets-map';
import Header from '../common-components/header/index';
import Footer from '../common-components/footer';
import styles from './styles.module.scss';
import USER_LOCATION from '../../constants/queries/userLocationQuery';
import USERS_LIKED_PETS from '../../constants/queries/usersLikedPetsQuery';
import './liked-pets-card/css/index.css';
import LikedPetsContainer from './liked-pets-card/LikedPetsContainer';
import ListView from './liked-pets-card/img/list-view.svg';
import SortBy from './liked-pets-card/img/sort-by.svg';
import GET_LIKED_PETS from '../../constants/queries/likedPetsQuery';

export const text = {
  mymatches: 'My Matches',
  showing: 'Showing',
  matches: 'matches',
  listview: 'List view',
  sortby: 'Sort by'
};

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

  const { data: likedPetsRes } = useQuery(GET_LIKED_PETS);
  let likedPetsCards = likedPetsRes && likedPetsRes.likedPets.length > 0 ?
    (
      <div>
        <div className='MyMatches'>{text.mymatches}</div>
        <div>
          <span className='ShowingMyMatches'>{text.showing}
            <span className='MyMatches-number'>{likedPetsRes.likedPets.length}</span>{text.matches}
          </span>
          <span>
            <img className='List-view' src={ListView} alt='Listview logo'/>{text.listview}
          </span>
          <span>
            <img className='Sort-by' src={SortBy} alt='Sortby logo'/>{text.sortby}
          </span>   
        </div>   
        <LikedPetsContainer pets ={likedPetsRes.likedPets}/>
      </div>
    )
   : null;

  return (
    <div className='LikedPets-background'>
      <Header />
      <main className={styles.LikedPetsPage}>     
        <div className={styles.LikedPetsCardsContainer}>
          {likedPetsCards}
        </div>
        <div className={styles.LikedPetsMapContainer}>
          {likedPetsMap}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LikedPetsPage;
