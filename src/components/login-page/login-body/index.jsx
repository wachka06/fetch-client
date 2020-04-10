import React from 'react';
import Hero from './images/hero-image@3x.png';
import discoverImage from './images/discover.svg';
import findThePet from './images/find-the-perfect-pet.svg';
import furrever from './images/furrever-best-friends.svg';
import appStoreDownload from './images/app-store-badge-us-black.svg';
import androidDownload from './images/google-play.svg';
import styles from './styles.module.scss';

export const text = {
  androidStoreButton: {
    altText: 'Download from the Google Play store',
  },
  appleStoreButton: {
    altText: 'Download from the Apple App store',
  },
  DownloadContent: [
    {
      title: 'Discover',
      description:
        'Search from more than 10,000 shelters around the US and find your new best friend!',
      image: discoverImage,
      altText: 'Discover pets icon',
    },
    {
      title: 'Find the perfect pet',
      description:
        "By matching elements from your and your pet's personality, you will get a pet that matches your lifestyle and your needs.",
      image: findThePet,
      altText: 'Find the perfect pet icon',
    },
    {
      title: 'Furrever best friends!',
      description:
        'Contact the shelter to meet your furry friend and take him home with you.',
      image: furrever,
      altText: 'Furrever friend icon',
    },
  ],
  heroImage: {
    altText: "Iphone image running 'Fetch' app.",
  },
  primaryCTA: 'Download now for free',
  primaryHeadline: 'Go Fetch!',
  primarySubHead:
    'For full access, download the app and start adding pets to your liked list',
};

const LoginBody = () => (
  <div className={styles.DownloadContainer}>
    <aside>
      <img
        className={styles.HeroImage}
        src={Hero}
        alt={text.heroImage.altText}
      ></img>
    </aside>
    <main className={styles.DownloadContent}>
      <h1 className={styles.PrimaryHeadline}>{text.primaryHeadline}</h1>
      <h2 className={styles.PrimarySubHead}>{text.primarySubHead}</h2>
      <div className={styles.DownloadModule}>
        {text.DownloadContent.map((module) => (
          <div className={styles.DownloadModuleItem} key={module.title}>
            <img
              className={styles.DownloadModuleImage}
              src={module.image}
              alt={module.altText}
            ></img>
            <div>
              <h4 className={styles.ModuleHeadline}>
                {module.title.toUpperCase()}
              </h4>
              <p className={styles.ModuleDescription}>{module.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className={styles.PrimaryCTA}>{text.primaryCTA}</h3>
      <div className={styles.DownloadButtons}>
        <a href="#">
          <img
            className={styles.DownloadButtonImage}
            src={appStoreDownload}
            alt={text.appleStoreButton.altText}
          ></img>
        </a>
        <a href="#">
          <img
            className={styles.DownloadButtonImage}
            src={androidDownload}
            alt={text.androidStoreButton.altText}
          ></img>
        </a>
      </div>
    </main>
  </div>
);

export default LoginBody;
