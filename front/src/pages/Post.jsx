import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";



function Post() {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('')
    const navigate = useNavigate();
    const [content, setContent] = useState('')
    const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams();
    const [mediaUrl, setMediaUrl] = useState('');

    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${auth?.token}`
            }
        };
        // console.log(config)
        // http://localhost:3000/api/posts/1
        axios
            .get(`http://localhost:3000/api/posts/${id}`, config)
            .then((response) => {
                const post = response.data
                setContent(post.content)
                console.log(content)
                setMediaUrl(post.mediaUrl)
                setTitle(post.title)
                setErrorMessage(post.errorMessage)
                console.log(response)

                //TODO set the state variables above from the post in the response.
            })
            .catch((err) => alert(err.message));

        console.log(config)
        console.log(auth)
        console.log(content)

        
        //TODO use axios to call the backend marking the post as read


    }, [])
    return (
        <div>
            <article key={id}>
                <a href="./profile"></a>
                <h2 className='title'>{title}</h2>
                <img id="myImg" src={mediaUrl} alt={mediaUrl} width="320" height="240"></img>
                <Link to={`/profile/${id}`}>{title}</Link>
                {mediaUrl?.includes(".mp4") &&
                    <video width="320" height="240" controls>
                        <source src={mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>}
                <p className='post'>{content}</p>
                {mediaUrl?.includes(".mp3") &&
                    <audio controls>
                        <source src={mediaUrl} type="audio/mpeg" />
                        Your browser does not support the audio tag.
                    </audio>
                }
            </article>
        </div>
        // <div>Welcome to your profile...</div>;
    );

    function Banner() {
        // const navigate = useNavigate();
        const auth = JSON.parse(localStorage.getItem('auth') || null)
        // const [auth, setAuth] = useState(() => {
        //     if (storedAuth) {
        //         console.log(JSON.parse(storedAuth))
        //         return JSON.parse(storedAuth);
        //     }
        //     return { "token": false };
        // });
        // useEffect(() => {
        //     if (auth === undefined) return;
        //     localStorage.setItem('auth', JSON.stringify(auth));
        // }, [auth, 'auth']);

        function handleLogout() {
            localStorage.removeItem('auth');
            console.log('loggedOut')
            // localStorage.clear();
            // navigate('LogIn');
        };

        return (
            <>
                <Banner />
                <header>
                    <nav>
                        {auth && <Link to="/">Home</Link >}
                        {!auth && <Link to="/signup">Signup</Link>}
                        {!auth && <Link to="/login">LogIn</Link>}
                        {auth && <Link to="/profile">Profile</Link>}
                        {auth && <Link to="/login" onClick={handleLogout}>Logout</Link>}
                    </nav>
                </header>
            </>
        )
    }
}
export default Post;