import React from 'react';
import axios from 'axios';

export default class Artigo extends React.Component {
    state = {
        artigo: "",
        autor: "",
    }

    async componentDidMount() {
        const url = this.props.location.pathname;
 //       const { handle } = this.props.match.params
   //     console.log('handle' + handle);
        console.log('url ' + url);
        axios.get(`https://clarimdiario.herokuapp.com/api${url}`)
            .then(res => {
                console.log("get: " + res.data.artigo)
                const artigo = res.data.artigo;
                const autor = res.data.artigo.autor;
                this.setState({ artigo, autor });
                console.log("artigo: " + res.data.artigo.titulo);
                //console.log("AUTOR: " + res.data.artigo.titulo);
            })
    }

    render() {
        return (
            <div>
                    {console.log(this.state.artigo.titulo)}
                    <h3>{this.state.artigo.titulo}</h3>
                    <h3>{this.state.artigo.descricao}</h3>
                    <h3>{this.state.artigo.corpo}</h3>
                    <h3>{this.state.autor.email}</h3>
            </div>

        )
    }
}