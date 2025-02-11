import styles from "./LatestNews.module.css";
import BannersList from "../BannersList/BannersList";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data?.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
