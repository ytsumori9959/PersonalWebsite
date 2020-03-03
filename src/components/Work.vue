<template>
  <div class="ml-3 mt-5">
    <p class="headline text-sm-left font-weight-bold red--text">WORK</p>
    <v-container fluid fill-height>
      <v-row justify="center">
        <v-col v-for="card in cards" :key="card.title">
          <v-card max-width="500px" min-width="300px">
            <v-card-title v-text="card.title"></v-card-title>
            <v-card-text v-text="card.description"></v-card-text>
            <v-card-subtitle class="mt-n4">・目的、役割</v-card-subtitle>
            <v-card-text class="mt-n4" v-text="card.purpose"></v-card-text>
            <v-card-subtitle class="mt-n4">・主なスキル</v-card-subtitle>
            <v-card-text class="mt-n4" v-text="card.skills"></v-card-text>
            <v-card-subtitle
              class="mt-n4"
              v-if="card.isCodePrivate"
            >※大学授業内での制作物のため、ソースコードの公開は行っていません</v-card-subtitle>

            <v-card-actions class="mt-n5">
              <v-spacer />

              <v-btn icon :href="card.launchLink" target="_blank">
                <v-icon>{{launchPath}}</v-icon>
              </v-btn>

              <v-btn icon :href="card.codeLink" target="_blank">
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
        title: "Portfolio Website",
        launchLink: "https://yutatsumori.com/",
        codeLink: "https://github.com/ytsumori9959/PersonalWebsite.git",
        description:
          "自身のスキルや今までに作成してきたアプリケーションを紹介するためのポートフォリオウェブサイト",
        purpose: "vue.jsを利用した簡単なウェブサイト開発",
        skills: "vue.js, vuetify.js",
        isCodePrivate: false
      },
      {
        title: "Ataenakier",
        launchLink: "https://ataenakier.firebaseapp.com/",
        codeLink: "",
        description:
          "Akinatorを対人で遊べるようにと、趣味で制作したwebアプリケーション",
        purpose: "nuxt.jsとfirebaseを利用したwebアプリケーション開発",
        skills: "nuxt.js, firebase",
        isCodePrivate: false
      },
      {
        title: "Educational App",
        launchLink: "",
        codeLink: "",
        description:
          "Qtを利用してグループ制作した教育用デスクトップアプリケーション",
        purpose:
          "gitのバージョン管理を利用したグループプロジェクト(6名)開発　Qtを利用したUIの作成　外部ライブラリ(Box2D)を利用した物理演算",
        skills: "C++, git, Qt",
        isCodePrivate: true
      },
      {
        title: "SpreadSheet",
        launchLink: "",
        codeLink: "",
        description:
          "Qtを利用してグループ制作した学習用デスクトップアプリケーション",
        purpose:
          "gitのバージョン管理を利用したペアプロジェクト開発　MVCのデザインパターンを利用したアプリケーション開発　",
        skills: "C#, git, Visual Studio",
        isCodePrivate: true
      }
    ],
    codeTagPath: mdiCodeTags,
    launchPath: mdiLaunch
  })
};
</script>