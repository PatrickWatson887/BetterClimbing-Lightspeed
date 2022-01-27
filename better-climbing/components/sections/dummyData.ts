import { Article, Coach, Tag } from '../../types/features'

export const articles: Article[] = [
  {
    id: 1,
    articleLink: '/',
    title: 'Try climbing for the first time.',
    imageSrc: '/img/hero.jpg',
    description:
      'All first timers need to be shown what to do by an experienced climber. Our climbing coaches will take you through it all. It couldn’t be easier.',
    profileSrc: '/img/hero.jpg',
    author: 'author',
  },
  {
    id: 2,
    articleLink: '/',
    title: 'Want to call yourself a climber?',
    imageSrc: '/img/hero.jpg',
    description:
      'There is a lot to learn about the world of climbing, but once you do, you’ll be connected to a community like no other.',
    profileSrc: '/img/hero.jpg',
    author: 'author',
  },
  {
    id: 3,
    articleLink: '/',
    title: 'Experience nature in a way like no other.',
    imageSrc: '/img/hero.jpg',
    description:
      'Get outside and conquer the cliffs that you never thought you could. ',
    profileSrc: '/img/hero.jpg',
    author: 'author',
  },
  {
    id: 4,
    articleLink: '/',
    title: 'Try climbing for the second time.',
    imageSrc: '/img/hero.jpg',
    description:
      'All first timers need to be shown what to do by an experienced climber. Our climbing coaches will take you through it all. It couldn’t be easier.',
    profileSrc: '/img/hero.jpg',
    author: 'author',
  },
  {
    id: 5,
    articleLink: '/',
    title: 'Want to call me a climber?',
    imageSrc: '/img/hero.jpg',
    description:
      'There is a lot to learn about the world of climbing, but once you do, you’ll be connected to a community like no other.',
    profileSrc: '/img/hero.jpg',
    author: 'author',
  },
  {
    id: 6,
    articleLink: '/',
    title: 'Experience outdoors in a way like no other.',
    imageSrc: '/img/hero.jpg',
    description:
      'Get outside and conquer the cliffs that you never thought you could. ',
    profileSrc: '/img/hero.jpg',
    author: 'author',
  },
]

// export const coaches: Coach[] = [
//   {
//     coachId: 1,
//     profileSrc: '/img/hero.jpg',
//     name: 'Ben Russell',
//     location: { title: 'Manchester', lat: 53.483959, lng: -2.244644 },
//     rating: 3.5,
//     tags: [
//       { title: 'beginner', href: '/' },
//       { title: '1:1', href: '/' },
//     ],
//     header: 'Expertise / Bio',
//     body: 'Short bio goes here, 5-6 lines max. Short bio goes here, 5-6 lines max. Short bio goes here, 5-6 lines max',
//     feature: { title: 'Top Coach', description: 'Most bookings this week' },
//     items: [
//       { title: '1:1', description: 'This is a one on one session', price: 30 },
//       { title: '1:2', description: 'This is a one on one session', price: 20 },
//     ],
//   },
//   {
//     coachId: 2,
//     profileSrc: '/img/hero.jpg',
//     name: 'Cassandra Dunn',
//     location: { title: 'London', lat: 51.509865, lng: -0.118092 },
//     rating: 4.5,
//     tags: [
//       { title: 'intermediate', href: '/' },
//       { title: 'remote', href: '/' },
//     ],
//     header: 'Expertise / Bio',
//     body: 'Short bio goes here, 5-6 lines max. Short bio goes here, 5-6 lines max. Short bio goes here, 5-6 lines max',
//     feature: {
//       title: 'HIGHLY RECOMMENDED',
//       description: 'Highest average ratings over the past month',
//     },
//     items: [
//       { title: '1:1', description: 'This is a one on one session', price: 30 },
//     ],
//   },
//   {
//     coachId: 3,
//     profileSrc: '/img/hero.jpg',
//     name: 'Penelope Yates',
//     location: { title: 'Sheffield', lat: 53.383331, lng: 1.466667 },
//     rating: 3.1,
//     tags: [
//       { title: 'elite', href: '/' },
//       { title: 'beginner', href: '/' },
//       { title: 'intermdiate', href: '/' },
//       { title: 'indoor', href: '/' },
//     ],
//     header: 'Expertise / Bio',
//     body: 'Short bio goes here, 5-6 lines max. Short bio goes here, 5-6 lines max. Short bio goes here, 5-6 lines max',
//     feature: {
//       title: 'UP AND COMING',
//       description: 'Most popular new coach on `bc`',
//     },
//     items: [
//       { title: '1:1', description: 'This is a one on one session', price: 30 },
//     ],
//   },
//   {
//     coachId: 4,
//     profileSrc: '/img/hero.jpg',
//     name: 'Patrick Russell',
//     location: { title: 'Carrick Fergus', lat: 54.7158, lng: -5.8058 },
//     rating: 3.5,
//     tags: [
//       { title: 'beginner', href: '/' },
//       { title: 'indoor', href: '/' },
//     ],
//     header: 'Expertise / Bio',
//     body: 'Short bio goes here, 5-6 lines max. Short bio goes here, 5-6 lines max. Short bio goes here, 5-6 lines max',
//     feature: {
//       title: 'UP AND COMING',
//       description: 'Most popular new coach on `bc`',
//     },
//     items: [
//       { title: '1:1', description: 'This is a one on one session', price: 30 },
//     ],
//   },
//   {
//     coachId: 5,
//     profileSrc: '/img/hero.jpg',
//     name: 'Catriona Dunn',
//     location: { title: 'Belfast', lat: 54.607868, lng: -5.926437 },
//     rating: 4.5,
//     tags: [
//       { title: 'intermediate', href: '/' },
//       { title: 'outdoor', href: '/' },
//       { title: 'indoor', href: '/' },
//     ],
//     header: 'Expertise / Bio',
//     body: 'Short bio goes here, 5-6 lines max. Short bio goes here, 5-6 lines max. Short bio goes here, 5-6 lines max',
//     items: [
//       { title: '1:1', description: 'This is a one on one session', price: 30 },
//     ],
//   },
//   {
//     coachId: 6,
//     profileSrc: '/img/hero.jpg',
//     name: 'Priya Yates',
//     location: { title: 'Fair Head', lat: 55.220861, lng: -6.154067 },
//     rating: 3.1,
//     tags: [
//       { title: 'elite', href: '/' },
//       { title: 's & c', href: '/' },
//       { title: 'remote', href: '/' },
//     ],
//     header: 'Expertise / Bio',
//     body: 'Short bio goes here, 5-6 lines max. Short bio goes here, 5-6 lines max. Short bio goes here, 5-6 lines max',
//     items: [
//       { title: '1:1', description: 'This is a one on one session', price: 30 },
//     ],
//   },
// ]

// export const tags: Tag[] = [
//   { title: 'Beginner', href: '/' },
//   { title: 'Indooor', href: '/' },
//   { title: 'Remote', href: '/' },
//   { title: 'Bouldering', href: '/' },
//   { title: 'S & C', href: '/' },
// ]
