<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Peliculas</h1>

        <div class="mis-datos" v-if="misDatos">

          <p v-html="misDatos"></p>
          <br/>
          {{web | mayusculas | concatenaYear('ESTE ES EL MEJOR AÑO')}}
        </div>

        <div class="favorita" v-if="favorita">
          La pelicula favorita es:
          <h3>{{ favorita.title }}</h3>
        </div>

        <!-- Listado peliculas -->
        <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title">
          <Pelicula
            :pelicula="pelicula"
            @favorita="haLlegadoLaPeliculaFavorita"
          ></Pelicula>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar,
  },
  methods: {
    haLlegadoLaPeliculaFavorita(favorita) {
      this.favorita = favorita;
    },
  },
  filters: {
    mayusculas(value){
      return value.toUpperCase();
    },
    concatenaYear(value, message){
      var date = new Date();

      return value + ' ' + date.getFullYear() + ' ' + message;
    },
  },
  // Propiedades computadas
  // Modificar una propiedad original y generar otra
  computed: {
    peliculasMayuscula() {
      var peliculasMod = this.peliculas;
      for (var i = 0; i < peliculasMod.length; i++) {
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }

      return peliculasMod;
    },
    misDatos() {
      return (
        this.nombre + " " + this.apellidos + "<br/>" + "<strong>Sitio web: </strong>" + this.web
      );
    },
  },
  data() {
    return {
      nombre: "Victor",
      apellidos: "Robles",
      web: "victorroblesweb.es/academy",
      favorita: null,
      peliculas: [
        {
          title: "Batman vs Superman",
          year: 2017,
          image:
            "https://i.pinimg.com/originals/08/cb/c3/08cbc3566f6ed36c05811c668113ad6e.jpg",
        },
        {
          title: "Gran Torino",
          year: 2015,
          image:
            "https://pics.filmaffinity.com/Gran_Torino-278262332-large.jpg",
        },
        {
          title: "El señor de los anillos",
          year: 2003,
          image:
            "https://as.com/epik/imagenes/2020/03/28/portada/1585384112_802989_1585386362_noticia_normal.jpg",
        },
        {
          title: "El señor de los anillos 2",
          year: 2004,
          image:
            "https://as.com/epik/imagenes/2020/03/28/portada/1585384112_802989_1585386362_noticia_normal.jpg",
        },
      ],
    };
  },
};
</script>