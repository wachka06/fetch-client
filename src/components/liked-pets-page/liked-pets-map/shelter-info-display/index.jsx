import React from 'react';
import styles from './styles.module.scss';


const ShelterInfoDisplay = ({ info }) => {
  const {
    name,
    street_number,
    street,
    city,
    state,
    zipcode,
  } = info;
  return (
    <div>
      <span className={styles.ShelterInfoName}>{name}</span>
      <br />
      <span className={styles.ShelterInfoAddress}>{`${street_number} ${street} ${city},`}</span>
      <span className={styles.ShelterInfoAddress}>{`${state}, ${zipcode}`}</span>
    </div>
  );
};

export default ShelterInfoDisplay;
