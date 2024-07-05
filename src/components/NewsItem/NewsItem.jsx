import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import styles from './NewsItem.module.css'

const NewsItem = ({ item }) => {
    return (
        <li className={styles.item}>
            <img src={item.image} className={styles.image} />
            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author} </p>
            </div>
        </li>
    )
}

export default NewsItem