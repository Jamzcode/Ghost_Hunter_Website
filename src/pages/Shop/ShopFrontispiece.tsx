import styles from "./ShopFrontispiece.module.css"

export default function ShopFrontispiece () {
    return(
        <>
        <div className={styles.frontispieceContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div>COMING SOON</div>
            </div>
            </div></>
    )
}