<template>
  <v-app-bar app dense color="primary">
    <v-toolbar-title class="white--text text-center font-weight-thin">Yuta Tsumori</v-toolbar-title>
    <v-spacer />
    <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon v-on="on" />
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "FixedHeader",

  components: {},

  data: () => ({
    items: [{ title: "About" }, { title: "Work" }]
  })
};
</script>