import s from './FormsControl.module.css';

export const Textarea =({...props})=>{
    return(
        <div className={s.formControl +""+ s.error}>
            <div>
            <textarea  {...props}/>
            </div>

        </div>
    )
}
//           { meta.touched&&meta.error&&<span>{"error"}</span>}