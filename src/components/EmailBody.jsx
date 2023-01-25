import styles from "./EmailBody.module.css";
import Avatar from "./Avatar";
import { formatDate } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavorite,
  addToFavorite,
} from "../features/slices/emailSlice";

function MainEmailSection({ data }) {
  const {
    emails: { allEmails, favoriteEmailIds },
  } = useSelector((state) => state);

  const emailDetails = allEmails.find((email) => email.id === data.id);

  const dispatch = useDispatch();

  const handleClick = () => {
    favoriteEmailIds.includes(emailDetails.id)
      ? dispatch(removeFromFavorite({ id: emailDetails.id }))
      : dispatch(addToFavorite({ id: emailDetails.id }));
  };

  return (
    <div className={styles.emailBodyContainer}>
      <div className={styles.emailBodyHeader}>
        <Avatar name={emailDetails.from.name} />
        <div className={styles.emailDetails}>
          <h2>{emailDetails.subject}</h2>
          <p>{formatDate(emailDetails.date)}</p>
        </div>
        <button onClick={handleClick} className={styles.markAsFavButton}>
          {favoriteEmailIds.includes(emailDetails.id)
            ? "Remove from favorite"
            : "Mark as favorite"}
        </button>
      </div>

      <div
        className={styles.emailBody}
        dangerouslySetInnerHTML={{ __html: data.body }}
      />
    </div>
  );
}

export default MainEmailSection;
