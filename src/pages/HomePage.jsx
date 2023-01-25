import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterBar, EmailCard, EmailBody, Pagination } from "../components";
import { getEmails } from "../features/actions/emailActions";
import { updateFilterAndReadIdsFromLocalStorge } from "../features/slices/emailSlice";
import { filterEmails } from "../utils";
import styles from "./HomePage.module.css";

function HomePage() {
  const { emails } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [activeEmailId, setActiveEmailId] = useState(null);
  const [emailBodyData, setEmailBodyData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("readEmailIds")) &&
      JSON.parse(localStorage.getItem("favoriteEmailIds"))
    ) {
      dispatch(
        updateFilterAndReadIdsFromLocalStorge({
          readEmailIds: JSON.parse(localStorage.getItem("readEmailIds")),
          favoriteEmailIds: JSON.parse(
            localStorage.getItem("favoriteEmailIds")
          ),
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    setEmailBodyData(null);
    setActiveEmailId(null);
    dispatch(getEmails({ page }));
  }, [dispatch, page]);

  useEffect(() => {
    setEmailBodyData(null);
    setActiveEmailId(null);
  }, [emails.filterType]);

  const getEmailBody = async (id) => {
    if (id) {
      const response = await fetch(
        `https://flipkart-email-mock.now.sh/?id=${id}`
      );

      if (response.ok) {
        let json = await response.json();

        setEmailBodyData(json);
      }
    }
  };

  useEffect(() => {
    getEmailBody(activeEmailId);
  }, [activeEmailId]);

  const filteredEmails =
    emails.allEmails && filterEmails(emails.allEmails, emails);

  return (
    <section className={styles.homePageContainer}>
      <div className={styles.header}>
        <FilterBar />

        <Pagination page={page} setPage={setPage} />
      </div>

      <div className={activeEmailId && styles.homePageWithEmailBody}>
        <div className={styles.emailContainer}>
          {!emails.loading &&
            filteredEmails?.map((email) => (
              <EmailCard
                key={email.id}
                email={email}
                setActiveEmailId={setActiveEmailId}
                activeEmailId={activeEmailId}
              />
            ))}

          {emails.loading && <p> loading... </p>}

          {!emails.loading && filteredEmails.length === 0 && <p> No emails </p>}
        </div>

        {activeEmailId !== null && emailBodyData !== null && (
          <EmailBody data={emailBodyData} />
        )}
      </div>
    </section>
  );
}

export default HomePage;
