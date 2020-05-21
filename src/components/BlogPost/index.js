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
            </Card>
        </div>
    )
}

export default BlogPost