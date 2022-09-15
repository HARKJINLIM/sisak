<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
      From your past to your future!! DEMULATOR.net aims to meet stakeholder needs in the field of electrical design engineering and to operate all electrical design assets in the world on a platform basis. DEMULATOR.net is short for Demulator.net, which is a cloud-based next-generation platform that provides core services with the goal of increasing the matrix of electrical design engineering
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — {{footer}}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SiteFooter",
  computed: {
    ...mapState({
      footer: (state) => state.config.footer,
    }),
  },
  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
};
</script>