import { useDispatch, useSelector } from "react-redux";
import styles from "./EmailCard.module.css";
import Avatar from "./Avatar";
import { formatDate } from "../utils";
import { setReadEmail, updateFilterType } from "../features/slices/emailSlice";

function EmailCard({ email, setActiveEmailId, activeEmailId }) {
  const dispatch = useDispatch();
  const {
    emails: { filterType, readEmailIds, favoriteEmailIds },
  } = useSelector((state) => state);

  const handleClick = () => {
    setActiveEmailId(email.id);

    if (filterType === "Unread") {
      dispatch(updateFilterType({ filterType: "Read" }));
    }

    dispatch(setReadEmail({ id: email.id }));
  };

  return (
    <li
      className={
        readEmailIds.includes(email.id) ? styles.readEmail : styles.unreadEmail
      }
      onClick={handleClick}
    >
      <div className={styles.avatarContainer}>
        <Avatar name={email.from.name} />
      </div>
      <div className={styles.emailSummary}>
        <p className={styles.emailCardText}>
          From:{" "}
          <b>
            {email.from.name} &lt;{email.from.email}
            &gt;
          </b>
        </p>
        <p className={styles.emailCardText}>
          Subject: <b>{email.subject}</b>
        </p>
        <div>
          <p
            className={
              activeEmailId ? styles.emailCardDescription : styles.emailCardText
            }
          >
            {email.short_description}
          </p>
        </div>
        <div className={styles.emailCardFooter}>
          <p>{formatDate(email.date)}</p>

          {favoriteEmailIds.includes(email.id) && (
            <p className={styles.favoriteTag}>Favorite</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default EmailCard;
