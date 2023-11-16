import styles from './Screen.module.css'

const Screen = ({screenData}) => {

    return  <input className={styles.screen} value={screenData} type="text"  readOnly/>

}
export default Screen;