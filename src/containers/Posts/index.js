import React from 'react';
import Card from '../../components/UI/Card';

import './style.css';
import wdPosts from '../../data/wd.json';
import aiPosts from '../../data/ai.json';
import dvPosts from '../../data/dv.json';
import engPosts from '../../data/eng.json';

const Post = (props) => {

  return (
    <React.Fragment>
      <div className="postsMainPic"><span>Publicaciones</span></div>
      <div className="sectionsLinks">
        <a href="#desarrollo-web">Desarrollo Web</a>
        <a href="#inteligencia-artificial">Inteligencia Artificial</a>
        <a href="#visualizacion-de-datos">Visualización de Datos</a>
        <a href="#ingenieria">Ingeniería</a>
      </div>
      <div className="wdPostsContainer" id="desarrollo-web">
        <Card>
          <div className="postsHeader">
            <span>Desarrollo Web</span>
          </div>
        </Card>
        <div className="wdPosts">
          {
            wdPosts.data.map((post, index) => {
              return (
                <Card key={index}>
                  <div className="postImageWrapper">
                    <img
                      src={require(`../../blogPostImages/${post.imageName}`)}
                      alt=""
                    />
                  </div>
                  <div className="postBriefing" style={{ textAlign: "center" }}>
                    <span>Desarrollo Web</span>
                    <h1>{post.postTitle}</h1>
                    <span>Publicado el {`${post.postedOn}`} por GuilleHM</span>
                    <p>{`${post.postBriefing}`}</p>
                    <div className="postLink"><a href={`/publicacion/${post.slug}`}>Leer más</a></div>
                  </div>
                </Card>
              );
            })
          }
        </div>
      </div>
      <div className="aiPostsContainer" id="inteligencia-artificial">
        <Card>
          <div className="postsHeader">
            <span>Inteligencia Artificial</span>
          </div>
        </Card>
        <div className="aiPosts">
          {
            aiPosts.data.map((post, index) => {
              return (
                <Card key={index}>
                  <div className="postImageWrapper">
                    <img
                      src={require(`../../blogPostImages/${post.imageName}`)}
                      alt=""
                    />
                  </div>
                  <div className="postBriefing" style={{ textAlign: "center" }}>
                    <span>Inteligencia Artificial</span>
                    <h1>{post.postTitle}</h1>
                    <span>Publicado el {`${post.postedOn}`} por GuilleHM</span>
                    <p>{`${post.postBriefing}`}</p>
                    <div className="postLink"><a href={`/publicacion/${post.slug}`}>Leer más</a></div>
                  </div>
                </Card>
              );
            })
          }
        </div>
      </div>
      <div className="dvPostsContainer" id="visualizacion-de-datos">
        <Card>
          <div className="postsHeader">
            <span>Visualización de Datos</span>
          </div>
        </Card>
        <div className="dvPosts">
          {
            dvPosts.data.map((post, index) => {
              return (
                <Card key={index}>
                  <div className="postImageWrapper">
                    <img
                      src={require(`../../blogPostImages/${post.imageName}`)}
                      alt=""
                    />
                  </div>
                  <div className="postBriefing" style={{ textAlign: "center" }}>
                    <span>Visualización de Datos</span>
                    <h1>{post.postTitle}</h1>
                    <span>Publicado el {`${post.postedOn}`} por GuilleHM</span>
                    <p>{`${post.postBriefing}`}</p>
                    <div className="postLink"><a href={`/publicacion/${post.slug}`}>Leer más</a></div>
                  </div>
                </Card>
              );
            })
          }
        </div>
      </div>
      <div className="engPostsContainer" id="ingenieria">
        <Card>
          <div className="postsHeader">
            <span>Ingeniería</span>
          </div>
        </Card>
        <div className="engPosts">
          {
            engPosts.data.map((post, index) => {
              return (
                <Card key={index}>
                  <div className="postImageWrapper">
                    <img
                      src={require(`../../blogPostImages/${post.imageName}`)}
                      alt=""
                    />
                  </div>
                  <div className="postBriefing" style={{ textAlign: "center" }}>
                    <span>Ingeniería</span>
                    <h1>{post.postTitle}</h1>
                    <span>Publicado el {`${post.postedOn}`} por GuilleHM</span>
                    <p>{`${post.postBriefing}`}</p>
                    <div className="postLink"><a href={`/publicacion/${post.slug}`}>Leer más</a></div>
                  </div>
                </Card>
              );
            })
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Post;