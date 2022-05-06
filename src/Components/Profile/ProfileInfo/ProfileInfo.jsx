import s from './ProfileInfo.module.css';
import main from './main.jpg';
import wojak from './default.jpg';
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.main}>
        { /* <img src={main}/>*/}
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : wojak} />
        <div>Name: {props.profile.fullName}</div>
        <ProfileStatus status={props.status}
          updateStatus={props.updateStatus}
        />
        Job status:
        <div>
          {props.profile.lookingForAJob != null ? "I ain't unemployed" : "Plz,masa. Gime some job"}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
