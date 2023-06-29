import * as React from 'react';
import styles from './Layout.module.scss';
import { Header } from '../Header/Header';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

export interface ILayoutProps {
  children: string | JSX.Element | JSX.Element[]
}

export function Layout (props: ILayoutProps) {

  const { theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <>
      <Header />
      <div className={theme === 'dark' ? styles.container + ' ' + styles.container_dark : styles.container}>
        {
          props.children
        }
      </div>
      {/* <Footer /> */}
    </>
  );
}
