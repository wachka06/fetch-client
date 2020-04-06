import React, { Component } from 'react';
import LikedPetsContainer from './LikedPetsContainer';
import './index.css';
import ListView from './img/list-view.svg';
import SortBy from './img/sort-by.svg';
import axios from 'axios';

class LikedPets extends Component {
  // componentDidMount() {
  //   axios({
  //     method: 'get',
  //     url: 'http://localhost:4000/',
  //     responseType: 'stream'
  //   })
  //   .then(res => console.log(res));
  //   // axios({
  //   //   url: `http://localhost:4000/`,
  //   //   method: 'post',
  //   //   data: {
  //   //     query: `
  //   //       query {
  //   //         pet {
  //   //           id
  //   //         }
  //   //       }
  //   //     `
  //   //   }
  //   // }).then(res => console.log(res))
  // }

constructor(props) {
  super(props);
  this.state = {
    pets: [
      {
        age: 'ADULT',
        coat: 'long',
        declawed: false,
        description:
          'A fun loving cuddler looking for a fur-ever place to leave his toys',
        good_with_children: true,
        good_with_dogs: true,
        good_with_cats: false,
        house_trained: true,
        is_mixed_breed: true,
        is_unknown_breed: false,
        name: 'Bogart',
        photos: ['https://www.photohub.com/bogartthebulldog'],
        primary_breed: 'French Bull Dog',
        primary_color: 'white',
        preference_one_value: 1,
        preference_two_value: 3,
        preference_three_value: 2,
        preference_four_value: 4,
        secondary_breed: 'boxer',
        secondary_color: 'brown',
        sex: 'MALE',
        shots_are_current: true,
        size: 'SMALL',
        spayed_or_neutered: true,
        special_needs: false,
        species_name: 'DOG',
        status: 'ADOPTED',
        tertiary_color: 'black',
      },
      {
        age: 'ADULT',
        coat: 'long',
        declawed: false,
        description:
          'Friendly',
        good_with_children: true,
        good_with_dogs: true,
        good_with_cats: false,
        house_trained: true,
        is_mixed_breed: true,
        is_unknown_breed: false,
        name: 'Ramen',
        photos: ['https://www.photohub.com/shiba'],
        primary_breed: 'Shiba',
        primary_color: 'white',
        preference_one_value: 1,
        preference_two_value: 3,
        preference_three_value: 2,
        preference_four_value: 4,
        secondary_breed: 'boxer',
        secondary_color: 'brown',
        sex: 'MALE',
        shots_are_current: true,
        size: 'SMALL',
        spayed_or_neutered: true,
        special_needs: false,
        species_name: 'DOG',
        status: 'ADOPTED',
        tertiary_color: 'black',
      }
    ]
  }
}

  render () {
    return (
      <article>
        <div className='titleMyMatches-Copy-2'>My Matches</div>
        <span>
          <span className='titleMyMatches-Copy-3'>Showing
            <span className='text-style-1'>{this.state.pets.length}</span>matches
          </span>
          <span><img className='List-view' src={ListView} alt='Listview logo'/>List view</span>
          <span><img className='Sort-by' src={SortBy} alt='Sortby logo'/>Sort by</span>
        </span>
        <LikedPetsContainer pets={this.state.pets} />
      </article>
    )
  }
};

export default LikedPets;