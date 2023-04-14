import axios from "axios";
import PostContext from "./PostContext";
import { useState } from "react";

export const PostProvider = (props) => {

    const [ post, setPost ] = useState([]);
    const baseUrl = "http://localhost:3000/api/coffee/";

    function getAllPost() {

    }

    function getPost(id) {
        
    }

    function addPost(coffee) {        

    }

    function editPost(coffee) {

    }

    function deletePost(id) {

    }

    return (
        <PostContext.Provider value={{
            getPost,
            getAllPost,
            addPost,
            editPost,
            deletePost
        }}>
            { props.children }
        </PostContext.Provider>
    )
};