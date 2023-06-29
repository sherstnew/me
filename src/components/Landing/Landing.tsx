import * as React from 'react';
import styles from './Landing.module.scss';
import catImage from '../../static/images/cat.svg';
import reactIcon from '../../static/icons/react.svg';

export interface ILandingProps {
}

export function Landing (props: ILandingProps) {

  const [secretOpened, setSecretOpened] = React.useState(false);

  return (
    <div className={secretOpened ? styles.landing + ' ' + styles.secret_opened : styles.landing}>
      <h1 className={styles.header}>Денис Шерстнев</h1>
      <h3 className={styles.subheader}>или же sherstnew</h3>
      <h3 className={styles.subheader + ' ' + styles.level}>Junior Frontend React Developer</h3>
      <img src={catImage} alt="кот" className={styles.ambientCat} onClick={() => setSecretOpened(!secretOpened)} />
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        <img src={reactIcon} alt="реакт" className={styles.ambientReact} />
      </a>
    </div>
  );
}
