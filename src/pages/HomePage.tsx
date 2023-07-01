import * as React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Landing } from '../components/Landing/Landing';
import { About } from '../components/About/About';
import { Techs } from '../components/Techs/Techs';
import { Projects } from '../components/Projects/Projects';
import { More } from '../components/More/More';

export function HomePage () {
  return (
    <Layout>
      <Landing />
      <About />
      <Techs />
      <Projects />
      <More />
    </Layout>
  );
}
