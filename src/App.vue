<template>
  <v-app>
    <FixedHeader />

    <v-content>
      <About class="mx-5 my-2" />
      <Work class="mx-5 my-2" />
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
