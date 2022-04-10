import s from './ProfileInfo.module.css';
import main from './main.jpg';
const ProfileInfo = () => {
  return (
    <div>
      <div class={s.main}>
        <img src={main}/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;
