import style from "./SinglePost.module.css";
import Bistecca from "../assets/images/Bistecca.jpg";

export default function SinglePost() {
  return (
    <article className={style.card}>
      <img  src={Bistecca} alt="" />
      <div>
        <h2>Titolo del post</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          sequi quas obcaecati magni reprehenderit, ex nihil consequuntur
          voluptatum facilis itaque aperiam ab dolore odio ullam rem commodi
          inventore necessitatibus quisquam?
        </p>
        <button className={style.btn}>Read more</button>
      </div>
    </article>
  );
}
