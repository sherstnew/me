import * as React from 'react';
import styles from './Header.module.scss';
import catHomeIcon from '../../static/icons/cathome.webp';
import * as Scroll from 'react-scroll';
import burgerIcon from '../../static/icons/burger.svg';

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const [menuOpened, setMenuOpened] = React.useState(false);

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
      <img
        src={catHomeIcon}
        alt='наверх'
        className={styles.header__home}
        onClick={() =>
          Scroll.animateScroll.scrollToTop({
            duration: 500,
            smooth: true,
          })
        }
      />
      <div
        className={
          menuOpened ? styles.menu + ' ' + styles.menu_opened : styles.menu
        }
      >
        <div
          className={styles.menu__item}
          onClick={() => {
            Scroll.scroller.scrollTo('about', {
              duration: 500,
              smooth: true,
            });
            setMenuOpened(false);
          }}
        >
          Кто я
        </div>
        <div
          className={styles.menu__item}
          onClick={() => {
            Scroll.scroller.scrollTo('techs', {
              duration: 500,
              smooth: true,
            });
            setMenuOpened(false);
          }}
        >
          Что я знаю
        </div>
        <div
          className={styles.menu__item}
          onClick={() => {
            Scroll.scroller.scrollTo('projects', {
              duration: 500,
              smooth: true,
            });
            setMenuOpened(false);
          }}
        >
          Проекты
        </div>
        <div
          className={styles.menu__item}
          onClick={() => {
            Scroll.scroller.scrollTo('more', {
              duration: 500,
              smooth: true,
            });
            setMenuOpened(false);
          }}
        >
          Читать далее...
        </div>
      </div>
    </div>
  );
}
