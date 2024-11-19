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

import { getPost, getPosts } from "./Post";

function Home() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [userId, setUserId] = useState('');
    const auth = JSON.parse(localStorage.getItem('auth'));
    const { id } = useParams();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${auth?.token}`
            }
        };
        console.log('getting posts')

        axios
            .get("http://localhost:3000/api/posts/", config)
            .then(response => {
                // Handle response
                console.log(response.data);
                setPosts(response.data);
                navigate('/');
            }).catch(error => {
                setError('ERROR HOMPAGE ERROR')
            });
    }, []);

    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()
    };
    // TODO CONDITIONALLY RENDER MEDIA IF PRESENT AND UPDATE TO SHOW VIDEO AND AUDIO
    // (NOTE*) IF MEDIAurl IS TRUTHY THERE'S A MEDIA  TO DISPLAY IF THE MEDIA OR URL ENDS IN JPEG OR PNG ENDING. MP3-AUDIO MP4-VIDEO
    // {!isLoggedIn() && <Link to="/signup">Signup</Link>}
    // TODO finish <form> for creating a post.
    // TODO style post feed so the info is grouped together like project 5-6 "truncate post message so user can click and see more and marked as read"
    // TODO make post cards clickable 
    return (
        <>
            <Banner />
            <div>

                <form action="" id="home" method="get">
                    <p className="item">
                    </p>
                    <p className="item">
                    </p>
                    {/* <a href="" */}
                </form>
            </div>
            <div>
                {posts.map(({ id, title, mediaUrl, content }) =>
                    <article key={id}>
                        {<h2>{title}</h2>}
                        <img id="myImg" src={mediaUrl} alt={mediaUrl} width="304" height="228"></img>
                        {mediaUrl?.includes(".mp4") &&
                            <video width="320" height="240" controls>
                                <source src={mediaUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>}
                        {<p>
                            {content}
                        </p>}
                        {mediaUrl?.includes(".mp3") &&
                            <audio controls>
                                <source src={mediaUrl} type="audio/mpeg" />
                                Your browser does not support the audio tag.
                            </audio>
                        }
                    </article>
                )}
            </div>
        </>
    );
}
export default Home;