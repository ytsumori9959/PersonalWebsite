<template>
  <v-footer padless color="light-blue lighten-3">
    <v-row justify="center" no-gutters>
      <v-btn icon>
        <v-icon>{{githubPath}}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>{{facebookPath}}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>{{instagramPath}}</v-icon>
      </v-btn>

      <v-col class="light-blue lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Yuta Tsumori</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mdiFacebook, mdiGithubCircle, mdiInstagram } from "@mdi/js";

export default {
  name: "Footer",

  components: {},

  data: () => ({
    links: ["Home", "About", "Team", "Services", "Blog", "Contact Us"],
    facebookPath: mdiFacebook,
    githubPath: mdiGithubCircle,
    instagramPath: mdiInstagram
  })
};
</script>