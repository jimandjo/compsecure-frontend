import axios from "axios";
import { useState } from "react";
import PostContext from "./PostContext";

export const PostProvider = (props) => {

    const [ post, setPost ] = useState([]);
    const baseUrl = "http://localhost:3000/api/posts/";

    useEffect(() => {
        async function fetchData() {
            await getAllPost();
        }
        fetchData();
    }, []);

    function getAllPost() {
        return axios.get(baseUrl).then(response => setPost(response.data));
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