import lightMountains from '../../../static/images/mountains.jpg';

import styles from './LayoutPromo.module.scss';

export function LayoutPromo() {
  return (
    <section className={styles.promo}>
      <img className={styles.background} src={lightMountains} alt="фоновая картинка" />
    </section>
  );
}
