import style from "./SinglePost.module.css";


export default function SinglePost({ data }) {
  return (
    <article className={style.card}>
      <img  src={data.image} alt={data.titolo} />
      <div>
        <h2>{data.titolo}</h2>
        <p>
          {data.descrizione}
        <span className={data.avaliable ? style.is_avaliable : style.not_avaliable}>
        {data.avaliable ? "Avaliable" : "Not avaliable"}
        </span>
        </p>
        <button className={style.btn}>Read more</button>
      </div>
    </article>
  );
}
