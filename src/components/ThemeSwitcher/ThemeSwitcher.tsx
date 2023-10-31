import styles from './ThemeSwitcher.module.scss';
import sunIcon from '../../static/icons/sun.svg';
import moonIcon from '../../static/icons/moon.svg';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

export function ThemeSwitcher() {

  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div className={theme === 'dark' ? styles.switcher + ' ' + styles.switcher_dark : styles.switcher + ' ' + styles.switcher_light} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <img src={theme === 'light' ? moonIcon : sunIcon} alt="переключатель" className={styles.switcher__icon} />
    </div>
  );
}
