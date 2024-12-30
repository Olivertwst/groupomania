import '../styles/Home.css';
import axios from "axios";
import { useState, useReact, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from '../components/Banner';
import * as React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
} from "react-router-dom";

import { post, setPost } from "./Post";

function Home() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    const [userId, setUserId] = useState('');
    const auth = JSON.parse(localStorage.getItem('auth'));
    const link = document.createElement('a');
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${auth?.token}`
            }
        };
        console.log('getting posts')

        axios
            .get("http://localhost:3000/api/posts", config)
            .then(response => {
                // Handle response
                console.log(response.data);
                setPosts(response.data);
                navigate('/');
            }).catch(error => {
                setErrorMessage('ERROR HOMPAGE ERROR')
            });
    }, []);

    function handleSubmit(event) {
        event.preventDefault()
        const post = {title,content,post};
        //TODO declare post variable that contains the JSON string with the post information (check in thunderClient)
        const url = 'http://localhost:3000/api/posts';
        const auth = JSON.parse(localStorage.getItem('auth'));
        const formData = new FormData();
        formData.append('media', selectedFile);
        formData.append('post', post);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${auth.token}`
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });

    }
    // TODO finish <form> for creating a post.
    // TODO style post feed so the info is grouped together like project 5-6 "truncate post message so user can click and see more and marked as read"
    return (
        <>
            <Banner />

            <div>
                <div>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="file"
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                        <textarea
                            placeholder="Content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button type="submit">Add Post</button>
                    </form>
                </div>

                {posts.map(({ id, title, mediaUrl, content }) =>
                    <article key={id}>
                        <h2 className='title'><Link to={`/posts/${userId}`}>{title}</Link></h2>
                        {mediaUrl?.includes(".jpg") || mediaUrl?.includes(".png") &&
                            <img id="myImg" src={mediaUrl} alt={mediaUrl} width="320" height="240"></img>}
                        {mediaUrl?.includes(".mp4") &&
                            <video width="320" height="240" controls>
                                <source src={mediaUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>}
                        {mediaUrl?.includes(".mp3") &&
                            <audio controls>
                                <source src={mediaUrl} type="audio/mpeg" />
                                Your browser does not support the audio tag.
                            </audio>
                        }
                        <p className='post'>{content}</p>
                    </article>
                )}
            </div>
        </>
    );
}
export default Home;