import * as React from 'react';
import styles from './More.module.scss';
import { Element } from 'react-scroll';

export interface IMoreProps {
}

export function More (props: IMoreProps) {
  return (
    <Element name="more" className={styles.moreBlock}>
      <div className={styles.contacts}>
        <div className={styles.contacts__header}>Связаться со мной</div>
        <div className={styles.contacts__email}>
          <a href="mailto:sherstnev.denis.v@gmail.com">sherstnev.denis.v@gmail.com</a>
        </div>
      </div>
    </Element>
  );
}
