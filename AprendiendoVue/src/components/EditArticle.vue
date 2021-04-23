<template src= './CreateArticle.html'></template>

<script>
import Sidebar from "./Sidebar.vue";
import Global from "../Global";
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import Article from "../models/Article.js";
import swal from "sweetalert";

export default {
  name: "EditArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      file: "",
      article: new Article("", "", null, ""),
      submitted: false,
      isEdit: true,
    };
  },
  validations: {
    article: {
      title: {
        required,
      },
      content: {
        required,
      },
    },
  },
  mounted() {
      var articleId = this.$route.params.id;
      this.getArticle(articleId);
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status === "success") {
          this.article = res.data.article;
        }
      });
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
    },
    save() {
      this.submitted = true;
      var articleId = this.$route.params.id;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.url + "article/" + articleId, this.article)
          .then((res) => {
            if (res.data.status === "success") {
              // Subida de archivo
              if (
                this.file !== null &&
                this.file !== undefined &&
                this.file !== ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);

                var articleId = res.data.article._id;
                axios
                  .post(this.url + "upload-image/" + articleId, formData)
                  .then((res) => {
                    if (res.data.article) {
                      swal(
                        "Artículo editado",
                        "El artículo se ha editado correctamente",
                        "success"
                      );

                      this.article = res.data.article;
                      this.$router.push("/articulo/" + this.article._id);
                    } else {
                      // Mostrar alerta de error
                      swal(
                        "Edicion fallida",
                        "El artículo no se ha editado bien",
                        "error"
                      );
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                swal(
                  "Artículo editado",
                  "El artículo se ha editado correctamente",
                  "success"
                );

                this.article = res.data.article;
                this.$router.push("/articulo/" + this.article._id);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>