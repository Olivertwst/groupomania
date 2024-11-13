import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Post() {
    const navigate = useNavigate(); {
        const formData = new FormData();
        formData.append("post", Post);
        

        const [userId, setUserId] = useState('');
        const [title, setTitle] = useState('')
        const navigate = useNavigate();
        const [content, setContent] = useState('')
        const [error, setError] = useState('')

        const handleSubmit = e => {
            // Prevent the default submit and page reload
            e.preventDefault()
        };

        axios
            .post("http: //localhost:3000/api/posts", { userId, title, content, })
            .then((response) => {
                alert("File Upload success");
            })
            .catch((err) => alert("File Upload Error"));

    };

    return (
        <div>
            <h1>Post</h1>

        </div>
        // <div>Welcome to your profile...</div>;
    );
}

export default Post;