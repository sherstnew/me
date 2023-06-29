import * as React from 'react';
import styles from './Techs.module.scss';
import reactdenis from '../../static/images/reactdenis.png';

// techs icons import

import HTMLIcon from '../../static/icons/techs/html-5-svgrepo-com.svg';
import CSSIcon from '../../static/icons/techs/css-3-svgrepo-com.svg';
import JSIcon from '../../static/icons/techs/js-svgrepo-com.svg';

import ReactIcon from '../../static/icons/techs/react-svgrepo-com.svg';
import ReduxIcon from '../../static/icons/techs/redux-svgrepo-com.svg';
import VueIcon from '../../static/icons/techs/vue-svgrepo-com.svg';

import TypescriptIcon from '../../static/icons/techs/typescript-icon-svgrepo-com.svg';
import SCSSIcon from '../../static/icons/techs/sass-svgrepo-com.svg';

import NodeJSIcon from '../../static/icons/techs/node-js-svgrepo-com.svg';
import ExpressIcon from '../../static/icons/techs/express-svgrepo-com.svg';
import MongoDBIcon from '../../static/icons/techs/mongo-svgrepo-com.svg';
import { Element } from 'react-scroll';

export interface ITechsProps {
}

export function Techs (props: ITechsProps) {
  return (
    <Element name='techs' className={styles.techsBlock}>
      <ul className={styles.techs}>
      <header className={styles.header}>Что я знаю?</header>
        <li className={styles.techs__item}>
          <div className={styles.tech}>HTML, CSS, JS</div>
          <div className={styles.icons}>
            <img src={HTMLIcon} alt="HTML" className={styles.icon} />
            <img src={CSSIcon} alt="CSS" className={styles.icon} />
            <img src={JSIcon} alt="JS" className={styles.icon} />
          </div>
        </li>
        <li className={styles.techs__item}>
          <div className={styles.tech}>React, Redux, Vue</div>
          <div className={styles.icons}>
            <img src={ReactIcon} alt="React" className={styles.icon} />
            <img src={ReduxIcon} alt="Redux" className={styles.icon} />
            <img src={VueIcon} alt="Vue" className={styles.icon} />
          </div>
        </li>
        <li className={styles.techs__item}>
          <div className={styles.tech}>Typescript</div>
          <div className={styles.icons}>
            <img src={TypescriptIcon} alt="TS" className={styles.icon} />
          </div>
        </li>
        <li className={styles.techs__item}>
          <div className={styles.tech}>SCSS</div>
          <div className={styles.icons}>
            <img src={SCSSIcon} alt="SCSS" className={styles.icon} />
          </div>
        </li>
        <li className={styles.techs__item}>
          <div className={styles.tech}>React Native</div>
          <div className={styles.icons}>
            <img src={ReactIcon} alt="React Native" className={styles.icon} />
          </div>
        </li>
        <li className={styles.techs__item}>
          <div className={styles.tech}>Node JS, Express, MongoDB</div>
          <div className={styles.icons}>
            <img src={NodeJSIcon} alt="Node JS" className={styles.icon} />
            <img src={ExpressIcon} alt="Express" className={styles.icon} />
            <img src={MongoDBIcon} alt="MongoDb" className={styles.icon} />
          </div>
        </li>
      </ul>
      <img src={reactdenis} alt="" className={styles.image} />
    </Element>
  );
}
