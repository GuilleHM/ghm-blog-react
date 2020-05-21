import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import featuredPosts from '../../data/recent.json';
import { NavLink } from 'react-router-dom';

import AllPosts from '../../data/all.json';

const Sidebar = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = featuredPosts.data;
        setPosts(posts);
    }, [posts]);

    return (
        <div className="sidebarContainer">
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>¿De qué va esto?</span>
                </div>
                <div className="profileImageContainer">
                    <img src={require('../../assets/personalPicture/Foto_GHM.jpg')} alt="Foto GuilleHM" />
                </div>
                <div className="cardBody">
                    <p className="blogDescription">
                        Este blog recopila resúmenes sobre algunos proyectos relacionados con el desarrollo web y la ciencia de los datos que voy creando.
                        En cada entrada encontrarás enlaces tanto a la publicación completa como al código y los datos empleados en su realización. ¡Buen viaje!<br></br>
                    </p>
                    <p className="blogAuthor">GuilleHM</p>
                </div>
            </Card>
            <Card>
                <div className="totalNumberOfPosts">
                    <span>Total de entradas: {`${AllPosts.data.length}`}</span>
                </div>
            </Card>
            <Card className="card recentPostsContainer" style={{ padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Entradas Recientes</span>
                </div>
                <div className="recentPosts">
                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/publicacion/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.postTitle}</h3>
                                        <p>{post.postedOn}</p>
                                    </div>
                                </NavLink>
                            );
                        })
                    }
                </div>
            </Card>
        </div>
    )
}

export default Sidebar