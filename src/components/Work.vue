<template>
  <div class="ml-3 mt-5">
    <p class="headline text-sm-left font-weight-bold red--text">WORK</p>
    <v-container fluid fill-height>
      <v-row justify="center">
        <v-col v-for="card in cards" :key="card.title">
          <v-card max-width="300px">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-dialog v-model="dialog" max-width="300">
                <template v-slot:activator="{ on }">
                  <v-btn depressed round v-on="on">Learn More</v-btn>
                </template>
                <v-card>
                  <v-card-title v-text="card.title" />
                  <v-card-text v-text="card.description" />
                </v-card>
              </v-dialog>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>{{launchPath}}</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>{{codeTagPath}}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mdiCodeTags, mdiLaunch } from "@mdi/js";

export default {
  name: "About",

  components: {},

  data: () => ({
    cards: [
      {
        title: "HOMEPAGE",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        codeLink: "",
        description: "This is HOMEPAGE description"
      },
      {
        title: "SPREAD SHEET",
        src:
          "https://aquaticinformatics.com/wp-content/uploads/2017/06/Excel-Spreadsheet.png",
        codeLink: "",
        description: "This is SPREAD SHEET description"
      },
      {
        title: "SUDOKU SOLVER",
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png",
        codeLink: "",
        description: "This is SUDOKU SOLVER description"
      },
      {
        title: "EDU TANK",
        src:
          "https://www.warhistoryonline.com/wp-content/uploads/2019/07/img_1.jpg",
        codeLink: "",
        description: "This is EDU TANK description"
      }
    ],
    codeTagPath: mdiCodeTags,
    launchPath: mdiLaunch
  })
};
</script>