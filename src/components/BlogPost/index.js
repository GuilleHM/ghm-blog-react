import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import allPosts from '../../data/all.json';

const BlogPost = (props) => {

    const [post, setPost] = useState({
        id: "",
        postCategory: "",
        postTitle: "",
        postSubtitle: "",
        postedOn: "",
        author: "",
        postImage: "",
        postText: ""
    });
    // const [slug, setSlug] = useState('');

    useEffect(() => {
        const slug = props.match.params.slug;
        const post = allPosts.data.find(post => post.slug === slug);
        setPost(post);

        // setSlug(slug)
    }, [post, props.match.params.slug]);

    if (post.postImage === "") return null;

    let video = null;
    if (post.slug === "de-incognito") {
        video = <video controls><source src={require('../../assets/videos/deIncognito.mp4')} type='video/mp4'></source><source src={require('../../assets/videos/deIncognito.webm')} type='video/webm'></source><source src={require('../../assets/videos/deIncognito.ogv')} type='video/ogg'></source><p>Your browser doesn't support HTML5 video :(</p></video>
    }

    return (
        <div className="postContainer">
            <Card>
                <div className="postHeader">

                    <h1 className="postTitle">{post.postTitle}</h1>
                    <span className="postedBy">Publicado por {post.author} el {post.postedOn}</span>
                    <span className="postCategory">{post.postCategory}</span>
                </div>
                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/' + post.postImage)} alt="Foto de la Publicación" />
                </div>
                <div className="postContent">
                    <h3>{post.postSubtitle}</h3>
                    <p dangerouslySetInnerHTML={{ __html: post.postText }}></p>
                </div>
                <div className="postVideo">
                    {video}
                </div>
            </Card>
        </div>
    )
}

export default BlogPost