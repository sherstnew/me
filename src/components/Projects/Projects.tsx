import styles from './Projects.module.scss';
import { Element } from 'react-scroll';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';

export function Projects () {
  return (
    <Element name='projects' className={styles.projectsBlock}>
      <header className={styles.header}>Мои проекты</header>
      {
        projects.map(project => <ProjectCard project={project} key={project.id} />)
      }
    </Element>
  );
}
