"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

console.log(process.env);

let config = {
  baseURL: process.env.BASE_URL || process.env.apiUrl || "",
  timeout: 60 * 1000, // Timeout
  proxy : {
		host : 'localhost',
		port : process.env.VUE_APP_SERVER_PORT,
	}
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    const {$Progress} = Vue.prototype;
		if($Progress) $Progress.start();
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    const {$Progress, $toast} = Vue.prototype;
    const {data, status} = response;
    let Msg = '';
    console.log("AJAX", response)
		if(status !== 200) {
			Msg = `Server connection failure`;
		}
    if(data && data.err) {
      Msg=data.err;
    }

    if(Msg){
      if($toast) $toast.error(Msg);
      if($Progress) $Progress.fail();
      console.warn(Msg);
      return false;
    } else {
      if($Progress) $Progress.finish();
      return data;
    }

    // console.log(response);
    // Do something with response data
    // return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

const Plugin = {};
Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  // window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default _axios;
