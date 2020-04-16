import React from 'react';
import Heart from './img/heart.svg';
import Adopted from './img/adopted.svg';
import './css/LikePetCardComponent.css';

const text = {
  adopted: `I'VE BEEN ADOPTED!`,
  remove: 'Remove',
}

const LikedPetsCard = ({ photo, name, distance, shelter, age, size, status }) => (
  <div className='Grid-view'>
    <div className='Pet-card-wrap'>
      <img className='Pet' src={photo} alt='Pet'/>
      <div className='White-box'>
        <div className="White-box-inner-wrap">
        <div className='Pets-name'>{name.toUpperCase()}</div>
          <div className='Pet-detail-wrap'>
            <span className='Distance'>{`${distance} mi`}</span>
            <span className='Middle-dot'>&#183;</span>
            <span className='Shelter'>{shelter}</span>
          </div>
          <div>
            <span className='Age'>{`${age.slice(0, 1)}${age.slice(1).toLowerCase()}`}</span>
            <span className='Middle-dot'>&#183;</span>
            <span className='Size'>{`${size.slice(0, 1)}${size.slice(1).toLowerCase()}`}</span>
          </div>
        </div>
      </div>
    </div>
    <div className='Inner-heart'/>
    <img className='Heart' src={Heart} alt='Heart logo'/>
    <div className='Adopted' style={{ display: status === 'ADOPTED' ? 'inline' : 'none' }}>
      <img className='Adopted-shade' src={Adopted} alt='Adopted'/>
      <div className='Adopted-text'>{text.adopted}</div>
    </div>
  </div>
);

export default LikedPetsCard;