<template>
  <v-app>
    <FixedHeader />

    <v-content class="grey lighten-2">
      <About />
      <Work />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import FixedHeader from "./components/FixedHeader";
import About from "./components/About";
import Footer from "./components/Footer";
import Work from "./components/Work";

export default {
  name: "App",
  components: {
    FixedHeader,
    About,
    Footer,
    Work
  },

  data: () => ({
    //
  })
};
</script>
