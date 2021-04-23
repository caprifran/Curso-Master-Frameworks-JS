import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';

// Diferencias con CreateArticles
// 1. Tenemos que recoger el ide dle articulo a editar de la url
// 2. Crear un metodo para sacar ese objeto del backend
// 3. Repoblar / rellenar el formulario con esos datos
// 4. Actualizar el objeto haciendo una peticion al backend

class EditArticle extends Component {

    url = Global.url;

    articleId = null;

    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    componentWillMount() {
        this.articleId = this.props.match.params.id;
        this.getArticle(this.articleId);

        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido'
            }
        });
    }

    getArticle = (id) => {
        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article
                });
            });
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });
        this.validator.showMessages();
        this.forceUpdate();
    }

    saveArticle = (e) => {
        e.preventDefault();

        //Rellenar state con formulario
        this.changeState();

        if (this.validator.allValid()) {
            // Hace una peticion http por post para guardar el articulo 
            axios.put(this.url + 'article/' + this.articleId, this.state.article)
                .then(res => {
                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        });
                        // Subir el archivo
                        if (this.state.selectedFile !== null) {
                            // Sacar el id del articulo guardado
                            var articleId = this.state.article._id;
                            // Crear form data y añadir fichero
                            const formData = new FormData();

                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );
                            // Peticion AJAX
                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        });
                                        swal(
                                            'Articulo editado',
                                            'El articulo ha sido editado correctamente',
                                            'success'
                                        );

                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        });
                                    }
                                });
                        } else {
                            this.setState({
                                status: 'success'
                            });
                        };
                    } else {
                        this.setState({
                            status: 'failed'
                        });
                    }
                });
        } else {
            this.setState({
                status: 'failed'
            });

            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    fileChange = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        });
    }

    render() {

        if (this.state.status === 'success') {
            return <Redirect to="/blog" />;
        };

        var article = this.state.article;

        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Editar articulo</h1>

                    {this.state.article.title &&
                        <form className="mid-form" onSubmit={this.saveArticle} >
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState} />

                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}

                            </div>

                            <div className="form-group">
                                <label htmlFor="contenido">Contenido</label>
                                <textarea name="title" defaultValue={article.content} ref={this.contentRef} onChange={this.changeState}></textarea>

                                {this.validator.message('title', this.state.article.title, 'required')}

                            </div>

                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                <input type="file" name="file0" onChange={this.fileChange} />
                                <div className="image-wrap">
                                    {article.image !== null ? (
                                        <img src={this.url + 'get-image/' + article.image} alt={article.title} className="thumb" />
                                    ) : (
                                        <img src="https://admin.lomastravel.com.mx/images/gallery_weddings/paquetes/default.jpg" alt={article.title} className="thumb" />
                                    )
                                    }
                                </div>
                                <div className="clearfix"></div>
                            </div>

                            <input type="submit" value="Guardar" className="btn btn-success" />

                        </form>
                    }

                    {!this.state.article.title &&
                        <h1 className="subheader">Cargando...</h1>
                    }


                </section>

                <Sidebar />
            </div>
        );
    }
}

export default EditArticle;