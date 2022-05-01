import s from './ProfileInfo.module.css';
import main from './main.jpg';
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';


const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  
  return (
    <div>
      <div className={s.main}>
      { /* <img src={main}/>*/}
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={"HUY"}/>
      </div>
    </div>
  );
}

export default ProfileInfo;
