<template>
  <div>
    <p class="display-3 text-sm-left font-weight-black">WORK</p>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",

  components: {},

  data: () => ({
    cards: [
      {
        title: "HOMEPAGE",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 4
      },
      {
        title: "SPREAD SHEET",
        src:
          "https://aquaticinformatics.com/wp-content/uploads/2017/06/Excel-Spreadsheet.png",
        flex: 4
      },
      {
        title: "SUDOKU SOLVER",
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png",
        flex: 4
      }
    ]
  })
};
</script>