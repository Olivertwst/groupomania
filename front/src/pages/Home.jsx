import '../styles/Home.css';
import axios from "axios";
import { useState, useReact, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        console.log('getting posts')
        // TODO add use effect react hook to get the post information on the backend using axios
        // TODO use array.map method to insert the post cards inside of a loop
    });

    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()
    };

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
                {posts.map(({ id, title, content }) =>
                    <article key={id}>
                        <h2>{title}</h2>
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