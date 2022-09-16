<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" :width="drawerWidth">
      <site-navi @close="toggleDrawer" />
    </v-navigation-drawer>

    <v-app-bar app color="indigo lighten-1 white--text" dark hide-on-scroll>
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <site-title />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <site-footer />
    <vue-progress-bar></vue-progress-bar>
  </v-app>
</template>

<script>
import SiteFooter from "./components/layout/SiteFooter.vue";
import SiteNavi from "./components/layout/SiteNavi.vue";
import SiteTitle from "./components/layout/SiteTitle.vue";

export default {
  components: { SiteTitle, SiteFooter, SiteNavi },
  name: "App",

  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    drawerWidth() {
      return this.$vuetify.breakpoint.xs ? "100%" : "360";
    },
  },
  methods: {
   toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
