import React,{useState,useEffect} from "react";
import { PuffLoader } from "react-spinners";

export default function Portfolio(){

    const [posts, setPosts] = useState([]);
    const [loadingAktive, setLoadingActive] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/annaVSoderberg/repos');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data);
                setLoadingActive(true);

                setTimeout(() => {
                    setLoadingActive(false);
                },3000)

            } catch (error) {
                console.error('Error fetching data:', error);
                setLoadingActive(false);
            }
        };

        fetchData();
        }, []);


    if(loadingAktive){
        return(    
        <main> 
            <section className="content">                    
            <div className='portfolio-loading'>
                <h1>Loading page</h1>
                <div className='RL-div'><PuffLoader size={100} color="rgba(51, 154, 240, 255)"></PuffLoader></div> 
                <h3>Please wait...</h3>
            </div>
            </section>
            </main>

            )
    }

    return(
        <main>
        <section className="content">
        <div>
            <h1>My projects from GitHub </h1>
            <ul>
                {
                    posts.map(post => (
                        <li key = {post.id}>
                            <h3>{post.name}</h3>
                            <p>{post.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
        </section>
        </main>
    );
}