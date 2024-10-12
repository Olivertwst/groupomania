import '../styles/Home.css';
import axios from "axios";
import { useState, useReact, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [userId, setUserId] = useState('');
    const auth = JSON.parse(localStorage.getItem('auth'));

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${auth.token}`
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
// (NOTE) IF MEDIAurl IS TRUTHY THERE'S A MEDIA  TO DISPLAY IF THE MEDIA OR URL ENDS IN JPEG OR PNG ENDING. MP3-AUDIO MP4-VIDEO
    return (
        <>
            <div>
                <form action="" id="home" method="get">
                    <h1>Home</h1>
                    <p className="item">
                    </p>
                    <p className="item">
                        <input type="submit" value="Home" />
                    </p>
                </form>
            </div>
            <div>
                {posts.map(({ id, title, mediaUrl, content }) =>
                    <article key={id}>
                        <h2>{title}</h2>
                        <img src={mediaUrl} alt={title} />
                        <p>
                            {content}
                        </p>
                    </article>
                )}
            </div>
        </>
    );
}
export default Home;