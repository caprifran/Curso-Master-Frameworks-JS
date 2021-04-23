<template>
  <div class="general">
    <Slider texto="Bienvenido al curso de Vue de victorroblesweb.es" home="true"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!-- Listado articulos -->
        <Articles :articles="articles"> </Articles>
        <!-- Añadir articulos via JS -->
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from './Articles.vue';
import axios from 'axios';
import Global from '../Global';

export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.getLastArticles();
  },
  data() {
    return {
      url: Global.url,
      articles: [],
    };
  },
  methods: {
    getLastArticles() {
      axios.get(this.url + "articles/true").then((res) => {
        if (res.data.status === "success") {
          this.articles = res.data.articles;
        }
      });
    },
  },
};
</script>