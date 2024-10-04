import {React, useState} from 'react'
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import Comentarios from './data/comentarios';
function App() {

    const [comments,setCommentss]= useState (Comentarios)
    


    const titulo = "App de Comentarios";
    const Autor = "Cristian Buitrago";
    const ficha = "2902093"
    const formacion = "Centro de formacion SENA"
    

    const loading = false;
    const showComments = true;
    if (loading === true) return (<h1>Cargando comentarios...</h1>)


  return (
    <div className='container'>
        <Header titulo= {titulo}  autor= {Autor} ficha={ficha} formacion={formacion}/>
        
        {showComments && 
            (
                <div className='comments'>
        <h3>Comentarios:{Comentarios.length}</h3>
        <ul>
           {
            Comentarios.map(comentario =>
            <ComentarioItem 
            key={comentario.id}
            comentario={comentario.comentario}
            calificacion={comentario.calificacion} />

           )}
        </ul>
        </div>
                
            )
        
        }
        
    </div>
  )
}

export default App