import React from 'react';
import LikedPetsCard from './LikedPetsCard';

const LikedPetsContainer = (props) => {
  return (
    <section className='LikedPetsContainer-wrap'>
      {props.pets.map(pet => 
        (<LikedPetsCard 
            key={pet.pet.id}
            photo={pet.pet.photos ? pet.pet.photos[0] : null}
            name={pet.pet.name} 
            distance={pet.distance}
            shelter={pet.pet.shelter.name}
            age={pet.pet.age}
            size={pet.pet.size}
            status={pet.pet.status}
            listview={props.listview}
          />
        )
      )}
    </section>
  );
};

export default LikedPetsContainer;