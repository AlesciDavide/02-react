import style from "./SinglePost.module.css";


export default function SinglePost(props) {
  return (
    <article className={style.card}>
      <img  src={props.img} alt="" />
      <div>
        <h2>{props.titolo}</h2>
        <p>
          {props.descrizione}
        <span className={props.avaliable ? style.is_avaliable : style.not_avaliable}>
        {props.avaliable ? "Avaliable" : "Not avaliable"}
        </span>
        </p>
        <button className={style.btn}>Read more</button>
      </div>
    </article>
  );
}
