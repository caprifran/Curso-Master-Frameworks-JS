<template>
  <section class="content">
    <h1 class="subheader">{{ msg }}</h1>
    <h2>{{ texto }}</h2>
    <div style="background:red">
      <MiComponente></MiComponente>
    </div>
    
  </section>
</template>

<script>
import MiComponente from './MiComponente.vue';

export default {
  name: "HelloWorld",
  components: {
    MiComponente
  },
  props: {
    msg: String,
  },
  data(){
    return({
      texto: "Hola Mundo desde componente!!!"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
