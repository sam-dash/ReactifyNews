import styles from './Pagination.module.css'
import { IPaginationProps } from './../../interfaces/index';
import { useTheme } from '../context/ThemeContext';

const Pagination = ({
    totalPages,
    handlePageClick,
    handlePreviousPage,
    handleNextPage,
    currentPage,
}: IPaginationProps) => {
    const { isDark } = useTheme();
    return (
        <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
            <button
                onClick={handlePreviousPage}
                className={styles.arrow}
                disabled={currentPage <= 1}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                    return (
                        <button onClick={() => handlePageClick(index + 1)}
                            className={styles.pageNumber}
                            key={index}
                            disabled={index + 1 === currentPage}>{index + 1}</button>
                    )
                })}
            </div>
            <button
                onClick={handleNextPage}
                className={styles.arrow}
                disabled={currentPage >= totalPages}>{'>'}</button>
        </div >
    )
}

export default Pagination