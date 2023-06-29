import * as React from 'react';
import styles from './About.module.scss';
import circlescity from '../../static/images/circlescity.png';
import { Element } from 'react-scroll';

export interface IAboutProps {
}

export function About (props: IAboutProps) {
  return (
    <Element name='about' className={styles.aboutBlock}>
      <div className={styles.about}>
        <div className={styles.about__header}>Добрый день!</div>
        <div className={styles.about__text}>
          <span>Я - Денис, мне 14 лет и я занимаюсь фронтенд-разработкой уже более <span className={styles.bold}>двух</span> лет.</span>
          <span>Также люблю заниматься бэкендом и умею полноценно построить фуллстак-приложение.</span>
          <span>А ещё я из Москвы.</span>
        </div>
      </div>
      <img src={circlescity} alt="" className={styles.image} />
    </Element>
  );
}
