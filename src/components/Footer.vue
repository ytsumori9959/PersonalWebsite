<template>
  <v-footer padless color="grey darken-1">
    <v-row justify="center" no-gutters>
      <v-btn icon href="https://github.com/ytsumori9959" target="_blank">
        <v-icon>{{githubPath}}</v-icon>
      </v-btn>
      <v-btn icon href="https://www.facebook.com/yuta.tsumori.59" target="_blank">
        <v-icon>{{facebookPath}}</v-icon>
      </v-btn>
      <v-btn icon href="https://www.instagram.com/ytsumori9959/" target="_blank">
        <v-icon>{{instagramPath}}</v-icon>
      </v-btn>

      <v-col class="grey darken-2 py-4 text-center white--text" cols="12">&copy; 2019 Yuta Tsumori.</v-col>
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