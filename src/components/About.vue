<template>
  <div class="ml-3 mt-5 mr-8">
    <p class="headline text-sm-left font-weight-bold">ABOUT</p>
    <v-img class="ml-3" :src="profileImage" width="200" height="200" />
    <p class="text-sm-left pl-3 mt-4">
      津守 勇汰（つもり ゆうた）
      <br />
      <br />2012年、中学1年生の頃に親の転勤でアメリカ合衆国、カリフォルニア州サンノゼに移住。現地の中学校を卒業後、高校での選択科目にプログラミング授業を選択しプログラミングに興味を持つ。2017年に現地の高校(Lynbrook High School)を卒業。現在、ユタ州ソルトレイクシティのユタ大学(The University of Utah)コンピュータサイエンス学科に在学。
      <br />
      <br />
      <strong>【スキル】</strong>
      <br />高校、大学での主な授業
      <br />・gitのバージョン管理を利用したグループ(6名)開発
      <br />・最短経路問題やNP完全問題に対するアルゴリズム
      <br />・XcodeやAndroid StudioなどのIDEを利用したスマートフォンアプリ開発
      <br />・X86を利用した機械言語やプロセス
      <br />・オブジェクト指向プログラミング
      <br />・ラスタライズやテクスチャマッピングなどのコンピュータグラフィックス基礎知識
      <br />独学
      <br />・nuxt.jsを利用したウェブアプリケーション開発
      <br />
      <br />
      <strong>【経験】</strong>
      <br />2018年6月～2018年8月
      <a href="http://www.unarizaki.com/iriomote/" target="_blank">ダイビングチームうなりざき西表</a> アルバイト
      <br />2019年7月～2019年8月
      <a href="https://s2019.siggraph.org/" target="_blank">Siggraph 2019</a> Student Volunteer
      <br />
      <br />
      <strong>【興味】</strong>
      <br />抽象的ではありますが、個人的なモットーに「たくさんの物に触れ、それを自らのアウトプットに活かす」というものがあります。
      <br />このモットーを実現するために「人がアウトプットをより感覚的に行える環境づくりに技術面で貢献する」ことを実行できるものに関わりたいと考えています。
      <br />具体的にはコンピュータグラフィックス、AI、機械学習などの技術に興味がありますが、その他の技術も積極的に学びたいと考えています。
      <br />
      <br />
      <strong>【趣味】</strong>
      <br />ゲーム、スキューバダイビング、映画、音楽、スノーボード、バスケットボール、キャンピング、アニメ、漫画など
      <br />モットーにもある通り、新しいことに挑戦することを大切にしているので、たくさんの物に興味があります。
    </p>
  </div>
</template>

<script>
import ProfileImage from "@/assets/FB_IMG_1564662521061.jpg";

export default {
  name: "About",

  components: {},

  data: () => ({
    profileImage: ProfileImage
  })
};
</script>