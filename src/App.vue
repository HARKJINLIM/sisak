<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <site-title/>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <vue-progress-bar></vue-progress-bar>
  </v-app>
</template>

<script>
import SiteTitle from './components/layout/SiteTitle.vue';

export default {
  components: { SiteTitle },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
