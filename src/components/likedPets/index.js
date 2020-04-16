import React from 'react';
import LikedPetsContainer from './LikedPetsContainer';
import ListView from './img/list-view.svg';
import SortBy from './img/sort-by.svg';
import Header from '../common-components/header/index';
import Footer from '../common-components/footer/index';
import './css/index.css';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const GET_LIKED_PETS = gql`
  query {
    likedPets {	 
      distance
      pet {
        id
        photos
        name 
        age 
        size
        status
        shelter {
          id
          name
        }
      }
    }
  }
`;

export const text = {
  mymatches: 'My Matches',
  showing: 'Showing',
  matches: 'matches',
  listview: 'List view',
  sortby: 'Sort by'
};

function LikedPets() {
  const { data } = useQuery(GET_LIKED_PETS);
  return (
    <div className='LikedPets-background'>
      {data ?            
          <div className='LikedPets-wrap'>
          <div className='MyMatches'>{text.mymatches}</div>
            <div>
              <span className='ShowingMyMatches'>{text.showing}
                <span className='MyMatches-number'>{data.likedPets.length}</span>{text.matches}
              </span>
              <span>
                <img className='List-view' src={ListView} alt='Listview logo'/>{text.listview}
              </span>
              <span>
                <img className='Sort-by' src={SortBy} alt='Sortby logo'/>{text.sortby}
              </span>   
            </div>   
            <LikedPetsContainer pets={data.likedPets}/>
          </div>
        : null
      }
      <Header />
      <Footer />
    </div>
  );
};

export default LikedPets;