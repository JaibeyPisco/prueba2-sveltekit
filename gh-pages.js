import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'main',
  repo: 'https://github.com/el3um4s/memento-sveltekit-and-github-pages.git', // Update to point to your repository
  user: {
   name: 'Jaibey Pisco', // update to use your name
   email: 'jaibey.pisco@tecsup.edu.pe' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);