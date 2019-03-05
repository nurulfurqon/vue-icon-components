// const coba = require('./data/colors');

// const baseColor = 'activ';

// if (coba[baseColor]) {
//   console.log('Betul');
// } else {
//   console.error('Salah');
// }
import BlIconAv from './BlIconAv';

BlIconAv.install = (Vue) => {
  Vue.component(BlIconAv.name, BlIconAv);
};

export default BlIconAv;
