import React from 'react';
import './css/NoLikedPets.css';
import Path from './img/path-3.svg';
import Snapshot from './img/rotato-snapshot-edited.png';
import Discover from './img/discover.svg';
import Findpet from './img/find-the-perfect-pet.svg';
import Furrever from './img/furrever-best-friends.svg';
import Download1 from './img/app-store.svg';
import Download2 from './img/google-play.svg';

const text = {
  title: 'Go Fetch!',
  subtitle: 'For full access dowload the app and start adding pets to your liked list',
  discover: 'DISCOVER',
  discoverText: 
  'Search from more than 10,000 shelters around the US and find your new best friend!',
  findpet: 'FIND THE PERFECT PET',
  findpetText: 
  'By matching elements from your and your pet’s personality, you will get a pet that matches your lifestyle and your needs.',
  furrever: 'FURREVER BEST FRIENDS!',
  furreverText: 'Contact the shelter to meet your furry friend and take him home with you.',
  download: 'Download now for free',
}

const NoLikedPets = () => {
  return (
    <div className='NoLikedPets-wrap'>
      <img className='Background-path' src={Path} alt='Path' />
      <img className='Snapshot' src={Snapshot} alt='Path' />
      <div className='Gofetch-wrap'>
        <div className='Gofetch'>{text.title}</div>
        <div className='Gofetch-subtitle'>{text.subtitle}</div>
        <div className='section-wrap'>
          <img className='dogImg' src={Discover} alt='Discover' />
          <div className='subtitle'>{text.discover}</div>
          <div className='subtext'>{text.discoverText}</div>
        </div>
        <div className='section-wrap'>
          <img className='dogImg' src={Findpet} alt='Findpet' />
          <div className='subtitle'>{text.findpet}</div>
          <div className='subtext'>{text.findpetText}</div>
        </div>
        <div className='section-wrap'>
          <img className='dogImg' src={Furrever} alt='Furrever' />
          <div className='subtitle'>{text.furrever}</div>
          <div className='subtext'>{text.furreverText}</div>
        </div>
        <div>
          <div className='Download-title'>{text.download}</div>
          <img className='Download' src={Download1} alt='Download on App Store' />
          <img className='Download' src={Download2} alt='Download on App Store' />
        </div>
      </div>
    </div>
  );
};

export default NoLikedPets;