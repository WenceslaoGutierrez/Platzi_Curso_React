import styles from "./Card.module.scss"

const Card = ({title,description,imgUrl}) =>{
    return(
        <div className={styles.card}>
            <img className={styles.img} src={imgUrl}></img>
            <h1 className={styles.header}>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
export default Card;