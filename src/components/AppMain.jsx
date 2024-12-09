import SinglePost from "./SinglePost";

export default function AppMain(){



    return(
        <main>
            <h1 className="title">
                Il mio blog di cucina
            </h1>
        <section className="list-card">
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>

        </section>
        </main>
    )
}