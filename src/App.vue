<template>
  <v-app>
    <FixedHeader />

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import FixedHeader from "./components/FixedHeader";

export default {
  name: "App",

  components: {
    HelloWorld,
    FixedHeader
  },

  data: () => ({
    //
  })
};
</script>
