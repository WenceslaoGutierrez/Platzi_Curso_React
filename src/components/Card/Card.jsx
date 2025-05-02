import styles from "./Card.module.scss"

const Card = ({title,description,imgUrl}) =>{
    return(
        <div className={styles.card}>
            I'm a card !
        </div>
    )
}
export default Card;