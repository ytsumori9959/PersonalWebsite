import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi' || 'mdiFacebook' || 'mdiGithubCircle' || 'mdiInstagram' || 'mdiTranslate' || 'mdiCodeTags' || "mdiLaunch",
    },
});