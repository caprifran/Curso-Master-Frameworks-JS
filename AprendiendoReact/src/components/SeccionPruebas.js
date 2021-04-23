import React, { Component } from 'react';
import MiComponente from './MiComponente';

class SeccionPruebas extends Component {


    /*
    constructor(props) {
        super(props);

        this.state = {
            contador: 0
        };
    }
    */

    state = {
        contador:0
    }

    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola, soy {nombre}</h2>
                <h3>Tengo {edad} años</h3>
            </div>
        );

        return presentacion;
    }

    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }
    render() {
        var nombre = "Franco Capristo";

        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>

                <p>
                    Hola Bienvenido al curso de react con Victor Robles WEB
                </p>
                <h2 className="subheader">Funciones y JSX basico</h2>
                {this.HolaMundo(nombre, 24)}

                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                </section>

                <h2 className="subheader">Estados</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar} />
                    <input type="button" value="Restar" onClick={this.restar} />
                </p>
            </section>
        );
    }
}

export default SeccionPruebas;