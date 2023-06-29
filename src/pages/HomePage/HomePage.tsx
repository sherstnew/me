import * as React from 'react';
import { Layout } from '../../components/Layout/Layout';
import { Landing } from '../../components/Landing/Landing';
import { About } from '../../components/About/About';
import { Techs } from '../../components/Techs/Techs';
import { More } from '../../components/More/More';

export interface IHomePageProps {
}

export function HomePage (props: IHomePageProps) {
  return (
    <Layout>
      <Landing />
      <About />
      <Techs />
      <More />
    </Layout>
  );
}
