
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://libertycity.net/uploads/download/skins_gtasastyle/fulls/lvu00vseo13iu4v6rjvt54bb94/15669262098366_8wcntmp_ahe.jpg' />
      {props.message}
      <div>
        <span>like</span> {props.likescount}
      </div>
    </div>
  );
}

export default Post;
