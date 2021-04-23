<template>
  <div class="general">
    <Slider texto="Página de pruebas"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Pagina de pruebas</h2>
        <h3>{{ id_desde_url }}</h3>
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <button @click="redirigirAlBlog()">Redirigir al blog</button>

        <h4>{{ nombre }}</h4>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Pagina",
  // Hooks o Metodos del ciclo de vida
  created() {
    console.log("Componente creado!!!");
  },
  // El metodo mounted se ejecuta al cargar el componente
  mounted() {
    // this.$route.params recoge los parametros que vienen por la url
    this.id_desde_url = this.$route.params.id;
    console.log("Componente montado!!!");
  },
  updated() {
    console.log("Componente actualizado!!!");
  },
  destroyed() {
    console.log("Componente eliminado!!!");
  },
  //---------------------------------------
  data() {
    return {
      id_desde_url: null,
      nombre: "Victor Robles",
    };
  },
  // Los metodos van dentro de methods
  methods: {
    actualizarNombre() {
      this.nombre = "VICTOR ROBLES WEB";
      console.log(this.nombre);
    },
    redirigirAlBlog() {
      // Redireccion por Vue.js
      this.$router.push("/blog");
    },
  },
  components:{
    Slider,
    Sidebar,
  },
};
</script>