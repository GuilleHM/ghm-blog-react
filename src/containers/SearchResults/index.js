import React from 'react';
import Card from '../../components/UI/Card';

import './style.css';
import Posts from '../../data/all.json';

const SearchResults = (props) => {

    let showNoResults = 'showNoSearchResults';

    return (
        <React.Fragment>
            <div className="searchMainPic"><span>Resultados de la Búsqueda</span></div>
            <div className="searchResultsPosts">
                {
                    Posts.data.map((post, index) => {
                        if (post.postText.toLowerCase().indexOf(sessionStorage.getItem('key')) !== -1) {
                            showNoResults = 'hideNoSearchResults';
                            return (
                                <Card key={index} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                                    <h1>{post.postTitle}</h1>
                                    <p>Publicado el {`${post.postedOn}`} por GuilleHM</p>
                                    <p>{post.postCategory}</p>
                                    <div className="postLink"><a href={`/publicacion/${post.slug}`}>Leer más</a></div>
                                </Card>
                            );
                        } else {
                            return null;
                        }
                    })
                }
            </div>
            <div className={showNoResults}>
                <Card style={{ textAlign: "center", padding: "1rem 0", margin: "1.5rem auto" }}>
                    <h1>¡Upss! Ningún resultado...</h1>
                    <p style={{ padding: "0 1rem" }}>No hay ninguna publicación que contenga la(s) palabra(s) clave que has introducido en el campo de búsqueda.<br></br>Tal vez tengas más suerte si pruebas con otra(s) palabra(s) :)</p>
                </Card>
                <Card style={{ textAlign: "center", padding: "1rem 0", margin: "1.5rem auto" }}>
                    <h2>Número total de entradas en el blog: {`${Posts.data.length}`}</h2>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default SearchResults;