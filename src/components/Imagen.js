import React from 'react'


const Imagen = props => {

    const {previewURL, likes, largeImageURL, tags, views} = props.imagen; 
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text"> {likes} Me gustas</p>
                    <p className="card-text"> {views} Vistas</p>
                    <a className="btn btn-primary btn-block" href={largeImageURL} target="_blanck">Ver Imagen</a>
                </div>
            </div>
        </div>
    )
}

 

export default Imagen
