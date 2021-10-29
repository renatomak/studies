import style from './Watch.style.module.scss'

export default function Watch() {
    return (
        <>
        <span className={style.watchNumber}>0</span>
        <span className={style.watchNumber}>0</span>
        <span className={style.watchDivision}>:</span>
        <span className={style.watchNumber}>0</span>
        <span className={style.watchNumber}>0</span>
        <span  className={style.watchDivision}>:</span>
        <span className={style.watchNumber}>0</span>
        <span className={style.watchNumber}>0</span>
        </>
    );
}