import React from 'react';
import './style.css';
import FeaturedPosts from './FeaturedPosts';
import Layout from '../../components/Layout';

const ImageGallery = props => (
    <div className="galleryPost">
        <div className="pic mainPic"><a href="/publicaciones#desarrollo-web">Desarrollo Web</a></div>
        <div className="pic secondPicTop"><a href="/publicaciones#inteligencia-artificial">I.A.</a></div>
        <div className="pic secondPicCenter"><a href="/publicaciones#visualizacion-de-datos">Visualización</a></div>
        <div className="pic secondPicBottom"><a href="/publicaciones#ingenieria">Ingeniería</a></div>
    </div>
);

const Home = props => {
    return (
        <div>
            <ImageGallery />
            <Layout>
                <FeaturedPosts />
            </Layout>
        </div>
    );
}

export default Home;