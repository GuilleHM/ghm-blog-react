import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';

const SinglePost = (props) => {

    return (
        <BlogPost {...props} />
    )
}

export default SinglePost;
