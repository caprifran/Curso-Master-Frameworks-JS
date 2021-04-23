<template>
  <div class="general">
    <Slider :texto="'Busqueda: ' + searchString"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader" v-if="articles">Artículos encontrados</h1>
        <h1 class="subheader" v-else>Sin resultados</h1>

        <div id="articles" v-if="articles">
          <Articles :articles="articles"></Articles>
        </div>
        <div v-else>
          <h2>No hay articulos que coincidan con tu busqueda</h2>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Global from "../Global";
import Articles from "./Articles.vue";
export default {
  name: "Search",
  components: {
    Slider,
    Sidebar,
    Articles,
  },
  mounted() {
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },
  data() {
    return {
        searchString: null, 
        url: Global.url,
        articles: [],
    };
  },
  methods: {
    getArticlesBySearch(searchString) {
      axios.get(this.url + "search/" + searchString).then((res) => {
        if (res.data.status === "success") {
          this.articles = res.data.articles;
        }
      });
    },
  },
};
</script>