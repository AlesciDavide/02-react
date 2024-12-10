import SinglePost from "./SinglePost";
import Post from '../data/post';

export default function AppMain(){



    return(
        <main>
            <h1 className="title">
                Il mio blog di cucina
            </h1>
        <section className="list-card">
        {Post.map(post => <SinglePost 
        img={post.image} 
        titolo={post.titolo} 
        descrizione={post.descrizione}
        key={post.id}
        />)}
        
        
        </section>
        </main>
    )
}