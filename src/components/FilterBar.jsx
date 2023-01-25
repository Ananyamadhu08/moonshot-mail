import { useDispatch, useSelector } from "react-redux";
import { updateFilterType } from "../features/slices/emailSlice";
import styles from "./FilterBar.module.css";

function FilterBar() {
  const options = ["Unread", "Read", "Favorites"];

  const {
    emails: { filterType },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={styles.filterBarContainer}>
      <p className={styles.text}>Filter By: </p>
      {options.map((option) => (
        <button
          onClick={() => dispatch(updateFilterType({ filterType: option }))}
          key={option}
          className={
            option === filterType
              ? styles.filterBarButtonActive
              : styles.filterBarButton
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
