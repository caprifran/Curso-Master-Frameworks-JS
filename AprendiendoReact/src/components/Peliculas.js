import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Peliculas extends Component {
    state = {
    };

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        peliculas[0].titulo = "Batman Begins";

        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) => {
        this.setState({
            favorita: pelicula
        });
    }

    componentWillMount() {
        //alert("Se va a montar el componente");
        this.setState({
            peliculas: [
                { titulo: 'Batman vs Superman', image: 'data:image/jpeg;base64,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' },
                { titulo: 'Gran torino', image: 'data:image/jpeg;base64,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' },
                { titulo: 'Looper', image: 'https://pics.filmaffinity.com/Looper-874353819-large.jpg' }
            ],
            nombre: 'Franco Capristo',
            favorita: ''
        })
    }

    componentDidMount() {
        //alert("Ya se ha montado el componente");
    }

    componentWillUnmount() {
        //alert("Me voy a desmontar");
    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };

        var favorita;
        if (this.state.favorita.titulo) {
            favorita = (
                <p className="favorita" style={pStyle}>
                    <strong>La pelicula favorita es: </strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
            );
        } else {
            favorita = (<p>NO HAY PELICULA FAVORITA</p>);
        }

        return (
            <div id="peliculas">
                <Slider
                    /* PROPS */
                    title="Peliculas"
                    size="slider-small"
                />
                <div className="center">
                    <div id='content' className="peliculas">
                        <h2 className="subheader">Listado de peliculas</h2>
                        <p>Selección de las peliculas favoritas de {this.state.nombre}</p>

                        <div><button onClick={this.cambiarTitulo}>Cambiar titulo de batman</button></div>

                        {/* CONDICIONAL IF. Verifica si existe el titulo de favorita */
                            /*this.state.favorita.titulo ? (
                                <p className="favorita" style={pStyle}>
                                    <strong>La pelicula favorita es: </strong>
                                    <span>{this.state.favorita.titulo}</span>
                                </p>
                            ) : (
                                <p>NO HAY PELICULA FAVORITA</p>
                            )
                            */
                            favorita
                        }


                        {/* Crear componente pelicula */}

                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            indice={i}
                                            marcarFavorita={this.favorita}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                    <Sidebar 
                        blog="false"
                    />
                </div>
            </div>
        );
    }

}

export default Peliculas;