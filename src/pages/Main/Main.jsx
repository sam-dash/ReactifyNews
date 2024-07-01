import { useEffect, useState } from 'react'
import NewsBanner from '../../components/NewsBanner/NewsBanner'
import styles from './Main.module.css'
import { getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
import Skeleton from '../../components/Skeleton/Skeleton'

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchNews = async () => {
        try {
            setIsLoading(true)
            const response = await getNews()
            setNews(response.news);
            console.log(response.news);
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNews()
    }, [])

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton count={1} type={'banner'} />}
            {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type={'item'} />}
        </main>
    )
}

export default Main