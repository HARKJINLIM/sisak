import Vue from 'vue';
import VueProgressBar from 'vue-progressbar'

const option = {
  color: 'yellow',
  failedColor: 'red',
  thickness : '6px',
};

Vue.use(VueProgressBar, option);