import styles from './Header.module.scss';
import catHomeIcon from '../../static/icons/cathome.webp';
import burgerIcon from '../../static/icons/burger.svg';
import { Link } from 'react-scroll';
import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

const cx = classNames.bind(styles);

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const [menuOpened, setMenuOpened] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.header}>
      <img
        src={burgerIcon}
        alt=''
        className={
          menuOpened
            ? styles.burger + ' ' + styles.burger_opened
            : styles.burger
        }
        onClick={() => setMenuOpened(!menuOpened)}
      />
      <Link to='landing' smooth={true} duration={500}>
        <img src={catHomeIcon} alt='наверх' className={styles.header__home} />
      </Link>
      <div
        className={cx([
          'menu',
          { menu_opened: menuOpened },
          { menu_dark: theme === 'dark' },
        ])}
      >
        <Link
          to='about'
          smooth={true}
          duration={500}
          className={styles.menu__item}
          onClick={() => setMenuOpened(false)}
        >
          Кто я
        </Link>
        <Link
          to='techs'
          smooth={true}
          duration={500}
          className={styles.menu__item}
          onClick={() => setMenuOpened(false)}
        >
          Что я знаю
        </Link>
        <Link
          to='projects'
          smooth={true}
          duration={500}
          offset={-100}
          className={styles.menu__item}
          onClick={() => setMenuOpened(false)}
        >
          Проекты
        </Link>
        <Link
          to='more'
          smooth={true}
          duration={500}
          className={styles.menu__item}
          onClick={() => setMenuOpened(false)}
        >
          Читать далее...
        </Link>
      </div>
      <ThemeSwitcher />
    </div>
  );
}
