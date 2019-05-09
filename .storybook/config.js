import { configure } from '@storybook/vue';
import Vue from 'vue';

import CubeButton from '../stories/src/components/button/button.vue';

Vue.component('cube-button', CubeButton);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
