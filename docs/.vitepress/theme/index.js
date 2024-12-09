// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import Layout from "./Layout.vue";

export default {
  extends: Theme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
