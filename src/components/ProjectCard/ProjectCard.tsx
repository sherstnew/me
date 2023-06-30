import * as React from 'react';
import styles from './ProjectCard.module.scss';
import githubIcon from '../../static/icons/github.svg';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

export interface IProjectItem {
  id: number,
  header: string,
  description: string,
  productLink: string,
  githubLink: string,
  image: string,
};

export interface IProjectCardProps {
  project: IProjectItem,
};

export function ProjectCard (props: IProjectCardProps) {

  const { theme } = useContext(ThemeContext);

  const { header, description, githubLink, productLink, image } = props.project;

  return (
    <div className={styles.card}>
      <div className={styles.card__info}>
        {
          productLink !== ''
          ?
          <a href={productLink} target='_blank' className={styles.card__header} rel="noreferrer">{header}</a>
          :
          <div className={styles.card__header}>{header}</div>
        }
        <div className={styles.card__description}>{description}</div>
        {
          githubLink !== ''
          ?
          <a href={githubLink} target='_blank' rel="noreferrer"><img src={githubIcon} alt="GitHub" className={theme === 'dark' ? styles.icon + ' ' + styles.icon_dark : styles.icon} /></a>
          :
          ''
        }
      </div>
      <img src={image} alt="" className={styles.card__image} />
    </div>
  );
}
