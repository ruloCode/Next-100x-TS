import React from 'react';
import Image from 'next/image';
import ProfileImage from '../../assets/images/Rulo.png';
import BackgroundImage from '../../assets/images/Fondo.svg';
import styles from './hero.module.scss';
import { Button } from '../UI/Button/Button';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles['hero-bg']}>
        <Image src={BackgroundImage} alt="Descarga la app de vitau desde la Play store" />
      </div>
      <div className={styles['hero-bg-2']}>
        <Image src={BackgroundImage} alt="Descarga la app de vitau desde la Play store" />
      </div>
      <div className={styles.profile}>
        <div className={styles['profile-imageContainer']}>
          <Image
            layout="fill"
            src={ProfileImage}
            alt="Descarga la app de vitau desde la Play store"
          />
        </div>
      </div>

      <div className={styles.info}>
        <h1 className="title title--1">
          Hi, I am <span className={styles['info-name']}>Rulo</span>{' '}
        </h1>
        <h2 className="title title--2">Web developer</h2>
        <p>
          Creating the next web generation. I want to make sure that the internet is a safe,
          satisfying and secure place for everyone.
        </p>

        <Button>Let&apos;s talk !</Button>
      </div>
    </div>
  );
};

export default Hero;
