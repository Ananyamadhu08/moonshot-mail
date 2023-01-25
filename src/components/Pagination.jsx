import styles from "./Pagination.module.css";

const Pagination = ({ page, setPage }) => {
  return (
    <nav>
      <ul className={styles.paginationContainer}>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className={styles.paginationButtonPrev}
          disabled={page === 1 && true}
        >
          Previous
        </button>

        <li className={styles.pageText}> {page} </li>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className={styles.paginationButtonNext}
          disabled={page === 2 ? true : false}
        >
          Next
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
