import styles from '../App.module.css'

const Button = ({data,onclickbutton}) => {

        return <>
            <div className={styles.buttons}>
            {
                data.map((items) =>(
                    
                    <button className={styles.btn}
                    onClick={() => onclickbutton(items)}
                    >{items}</button>
                ))
            }
      </div>
      
        </>
}
 export default Button;
