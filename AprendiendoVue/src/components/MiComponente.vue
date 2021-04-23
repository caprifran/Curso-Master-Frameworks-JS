<template>
  <section class="content">
    <h2 class="subheader">{{ titulo }}</h2>
    <hr />
    <h1>Este es mi componente</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />

    <h2>Reactividad</h2>
    <input type="text" v-model="nombre" />
    Mi nombre es: <strong>{{ nombre }}</strong>

    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad" />
    Mi edad es: <strong>{{ edad }}</strong>

    <p
      style="color: green; font-weight: bold"
      v-if="edad && edad >= 18 && edad < 65"
    >
      Eres mayor de edad
    </p>
    <p style="color: purple; font-weight: bold" v-else-if="edad && edad >= 65">
      Eres de avanzada edad
    </p>
    <p style="color: red; font-weight: bold" v-else>Eres menor de edad</p>

    <h2>Directiva iterativa</h2>
    <ol>
      <li v-for="pelicula in peliculas" :key="pelicula">
        {{pelicula}}
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      titulo: "Mi Componente",
      subtitulo: "Soy el subtitulo de mi componente",
      nombre: "",
      edad: 18,
      peliculas: ["Batman vs Superman", "El señor de los anillos", "Spiderman", "Anabelle"],
    };
  },
};
</script>
