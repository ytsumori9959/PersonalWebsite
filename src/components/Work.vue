<template>
  <div class="ml-3 mt-10">
    <p class="headline text-sm-left font-weight-bold">WORK</p>
    <v-container fluid fill-height class="mt-n6">
      <v-row justify="center">
        <v-col v-for="card in cards" :key="card.title">
          <v-card max-width="500px" min-width="300px" class="grey lighten-1">
            <v-card-title v-text="card.title" class="black--text"></v-card-title>
            <v-card-text v-text="card.description" class="black--text"></v-card-text>
            <v-card-subtitle class="mt-n4 black--text">・目的、役割</v-card-subtitle>
            <v-container class="py-0 my-0" v-for="purpose in card.purposes" :key="purpose">
              <v-card-text class="mt-n7" v-text="purpose"></v-card-text>
            </v-container>
            <v-card-subtitle class="mt-n2 black--text">・主なスキル</v-card-subtitle>
            <v-card-text class="ml-3 mt-n2 black--text" v-text="card.skills"></v-card-text>
            <v-card-text class="mt-n4" v-if="card.isCodePrivate">※大学授業内での制作物のため、ソースコードの公開は行っていません</v-card-text>

            <v-card-actions class="mt-n5">
              <v-spacer />
              <v-btn icon :href="card.launchLink" target="_blank">
                <v-icon>{{launchPath}}</v-icon>
              </v-btn>

              <v-btn v-if="!card.isCodePrivate" icon :href="card.codeLink" target="_blank">
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
        title: "Ataenakier",
        launchLink: "https://ataenakier.firebaseapp.com/",
        codeLink: "https://github.com/ytsumori9959/Ataenakier",
        description:
          "有名サイト「Akinator」に類似したゲームを複数人(3～5人)で遊べる、チャット型webアプリケーション",
        purposes: [
          "nuxt.jsを使用したwebアプリケーション開発",
          "Firebaseを利用したチャットアプリケーション開発"
        ],
        skills: "nuxt.js, firebase",
        isCodePrivate: false
      },
      {
        title: "Portfolio Website",
        launchLink: "https://yutatsumori.com/",
        codeLink: "https://github.com/ytsumori9959/PersonalWebsite.git",
        description:
          "自身のスキルや今までに作成してきたアプリケーションを紹介するためのポートフォリオウェブサイト",
        purposes: ["vue.jsを利用した簡単なウェブサイト開発"],
        skills: "vue.js, vuetify.js",
        isCodePrivate: false
      },
      {
        title: "Cannon Blaster -Educational App-",
        launchLink:
          "https://drive.google.com/open?id=1fSkWFxq36HjxVAfQ6VoSD0oqUg214pQB",
        description:
          "簡単なゲームを遊びながら学べる教育用デスクトップアプリケーション",
        purposes: [
          "gitのバージョン管理を利用したグループプロジェクト(6人)開発",
          "Qtを利用したUIの作成",
          "外部ライブラリ(Box2D)を利用した物理演算"
        ],
        skills: "C++, git, Qt",
        isCodePrivate: true
      },
      {
        title: "Spreadsheet",
        launchLink:
          "https://drive.google.com/open?id=1ZCaVD4GeWxGxzXNLhMjKLDqdhnky_DR6",
        description:
          "Visual Studioを使用し、Microsoft Spreadsheetを簡易化したデスクトップアプリケーション",
        purposes: [
          "gitのバージョン管理を利用したペア(2人)プロジェクト開発",
          "MVCのデザインパターンを利用したアプリケーション開発",
          "Visual Studioを利用したUIの作成"
        ],
        skills: "C#, git, Visual Studio",
        isCodePrivate: true
      }
    ],
    codeTagPath: mdiCodeTags,
    launchPath: mdiLaunch
  })
};
</script>