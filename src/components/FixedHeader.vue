<template>
  <v-app-bar app dense class="light-blue lighten-1">
    <v-toolbar-title class="white--text text-center">Yuta Tsumori's Portfolio</v-toolbar-title>
    <v-spacer />
    <v-menu offset-y close-on-click close-on-content-click>
      <template v-slot:activator="{ on }">
        <v-app-bar-nav-icon v-on="on" />
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" @click="isActive">
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
    items: [{ title: "About" }, { title: "Work" }],
    isActive: false
  })
};
</script>