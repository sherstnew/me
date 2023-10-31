import styles from './Landing.module.scss';
import landingrect from '../../static/images/landingrect.svg';
import { Element } from 'react-scroll';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

export interface ILandingProps {
}

export function Landing (props: ILandingProps) {

  const { theme } = useContext(ThemeContext);

  // const [secretOpened, setSecretOpened] = React.useState(false);

  return (
    <Element name='landing' className={theme === 'dark' ? styles.landing + ' ' + styles.landing_dark : styles.landing}>
      <div className={styles.about}>
        <h1 className={styles.header}>Денис Шерстнев</h1>
        <h3 className={styles.subheader}>или же sherstnew</h3>
        <h3 className={styles.level}>Junior Frontend React Developer</h3>
      </div>
      <img src={landingrect} alt="" className={theme === 'dark' ? styles.landing__image + ' ' + styles.landing__image_dark : styles.landing__image} />
    </Element>
  );
};