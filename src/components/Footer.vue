<template>
  <v-footer padless color="primary lighten-1">
    <v-row justify="center" no-gutters>
      <v-btn icon>
        <v-icon>{{githubPath}}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>{{facebookPath}}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>{{twitchPath}}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>{{twitterPath}}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>{{instagramPath}}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>{{linkedinPath}}</v-icon>
      </v-btn>

      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Bakayarou</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import {
  mdiFacebook,
  mdiGithubCircle,
  mdiTwitch,
  mdiTwitter,
  mdiInstagram,
  mdiLinkedin
} from "@mdi/js";

export default {
  name: "Footer",

  components: {},

  data: () => ({
    links: ["Home", "About", "Team", "Services", "Blog", "Contact Us"],
    facebookPath: mdiFacebook,
    githubPath: mdiGithubCircle,
    twitchPath: mdiTwitch,
    twitterPath: mdiTwitter,
    instagramPath: mdiInstagram,
    linkedinPath: mdiLinkedin
  })
};
</script>