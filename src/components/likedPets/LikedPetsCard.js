import React from 'react';
import './index.css';
import Heart from './img/heart.svg';
import PetImg from './img/shiba.jpg';

const LikedPetsCard = () => (
  <div className='grid-view'>
    <div className='Heart' src={Heart} alt='Heart logo'></div>
    <div><img className='Pet' src={PetImg} alt='Pet'/></div>
    <div className='White-box'>
      <div className='Pets-name'>LITTLE MISTER</div>
      <div>
        <span className='Distance'>11 mi</span>
        <span className='Oval-Copy-4'></span>
        <span className='Shelter'>Mt Vermon Shelter</span>
      </div>
      <div>
        <span className='Age'>Senior</span>
        <span className='Oval-Copy-3'></span>
        <span className='Size'>Medium</span>
      </div>
    </div>
  </div>
);

export default LikedPetsCard;

