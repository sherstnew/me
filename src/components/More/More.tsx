import * as React from 'react';
import styles from './More.module.scss';
import { Element } from 'react-scroll';
import catImage from '../../static/images/interactiveCat.svg';
import sunIcon from '../../static/icons/sun.svg';
import moonIcon from '../../static/icons/moon.svg';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

export interface IMoreProps {
}

export function More (props: IMoreProps) {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <Element name="more" className={styles.moreBlock}>
      <div className={styles.interactiveCat}>
        <img src={catImage} alt="кот" className={theme === 'light' ? styles.cat + ' ' + styles.cat_dark : styles.cat + ' ' + styles.cat_light} />
        <div className={theme === 'dark' ? styles.switcher + ' ' + styles.switcher_dark : styles.switcher + ' ' + styles.switcher_light} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <img src={theme === 'light' ? sunIcon : moonIcon} alt="переключатель" className={styles.switcher__icon} />
        </div>
      </div>
      <div className={styles.contacts}>
        <div className={styles.contacts__header}>Связаться со мной</div>
        <div className={styles.contacts__email}>
          <a href="mailto:sherstnev.denis.v@gmail.com">sherstnev.denis.v@gmail.com</a>
        </div>
      </div>
    </Element>
  );
}
