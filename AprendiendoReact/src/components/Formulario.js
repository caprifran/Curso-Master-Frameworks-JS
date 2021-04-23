import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Formulario extends Component {

    // Referencias para guardar los datos del form
    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    state = {
        user: {}
    };

    recibirFormulario = (e) => {
        e.preventDefault();

        var genero;

        if (this.generoHombreRef.current.checked) {
            genero = this.generoHombreRef.current.value;
        } else if (this.generoMujerRef.current.checked) {
            genero = this.generoMujerRef.current.value;
        } else if (this.generoOtroRef.current.checked) {
            genero = this.generoOtroRef.current.value;
        }
        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        });

        console.log("Formulario Enviado");
        console.log(user);
    }

    render() {
        var user = {};

        if (this.state.user.nombre) {
            user = this.state.user;
        };
        return (
            <div id="formulario">
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Formulario</h1>

                        {/* Mostrar dato del Formulario */}
                        {user.nombre &&
                            <div id="user-data">
                                <p>Nombre: <strong>{user.nombre}</strong></p>
                                {user.apellidos &&
                                    <p>Apellidos: <strong>{user.apellidos}</strong></p>
                                }
                                {user.bio &&
                                    <p>Bio: <strong>{user.bio}</strong></p>
                                }
                                {user.genero &&
                                    <p>Genero: <strong>{user.genero}</strong></p>
                                }
                            </div>
                        }
                        {/* Crear un formulario */}
                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>
                            <div className="form-group radiobuttons">
                                <input type="radio" name="genero" value="Hombre" ref={this.generoHombreRef} /> Hombre
                                <input type="radio" name="genero" value="Mujer" ref={this.generoMujerRef} /> Mujer
                                <input type="radio" name="genero" value="Otro" ref={this.generoOtroRef} /> Otro
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />
                        </form>
                    </div>

                    <Sidebar
                        blog="false"
                    />
                </div>
            </div>
        );
    }
}

export default Formulario;