import academyImage from '../static/images/projects/academy.png';
import moscowriverImage from '../static/images/projects/moscowriver.png';
import coffishImage from '../static/images/projects/coffish.png';

export const projects = [
  {
    id: 1,
    header: 'Академия',
    description: 'Сайт для волейбольной команды Академия. Имеет различный функционал.',
    githubLink: 'https://github.com/sherstnew/academy',
    productLink: 'https://academypfv.netlify.app',
    image: academyImage,
  },
  {
    id: 2,
    header: 'Речной транспорт',
    description: 'Сайт Речного транспорта Москвы, выполненный, как проект для МШП в 2023 году.',
    githubLink: 'https://github.com/sherstnew/moscowriver',
    productLink: '',
    image: moscowriverImage,
  },
  {
    id: 3,
    header: 'Coffish',
    description: 'Сайт coffish.gq - это онлайн-платформа для кофейных энтузиастов. На нём можно найти информацию о различных сортах кофе, методах приготовления, рецептах и советах по кофейному искусству. Также сайт предоставляет пользовательскую возможность оценивать и обсуждать кофейные напитки, делиться своим опытом и отзывами.',
    githubLink: 'https://github.com/sherstnew/coffish',
    productLink: 'https://coffish.gq',
    image: coffishImage,
  },
];