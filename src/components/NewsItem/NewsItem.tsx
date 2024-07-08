import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import { INews } from '../../interfaces';
import styles from './NewsItem.module.css'

interface Props {
    item: INews;
  }

const NewsItem = ({ item }: Props) => {
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