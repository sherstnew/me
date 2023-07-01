import styles from './Projects.module.scss';
import { Element } from 'react-scroll';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { useState, useEffect } from 'react';

export function Projects () {

  const [projectsCount, setProjectsCount] = useState(3);
  const [projectsOver, setProjectsOver] = useState(false);

  useEffect(() => {
    if (projectsCount >= projects.length) {
      setProjectsOver(true);
    };
  }, [projectsCount]);

  return (
    <Element name='projects' className={styles.projectsBlock}>
      <header className={styles.header}>Мои проекты</header>
      {
        projects.slice(0, projectsCount).map(project => <ProjectCard project={project} key={project.id} />)
      }
      <div className={styles.moreProjects} onClick={() => setProjectsCount(projectsCount + 3)}>
        {
          projectsOver
          ?
          'проекты в разработке, приходите позже'
          :
          'больше проектов (клик)'
        }
      </div>
    </Element>
  );
}
