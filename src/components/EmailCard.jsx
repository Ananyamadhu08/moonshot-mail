import { useState } from "react";
import Avatar from "./Avatar";
import { formatDate } from "../utils";

function EmailCard({ email, clickHandler, activeEmail }) {
  const [isRead, setIsRead] = useState(false);

  return (
    <div
      className={`email-card ${isRead ? "read-email" : "unread-email"}`}
      onClick={() => {
        setIsRead(true);
        clickHandler();
      }}
    >
      <div className="avatar-container">
        <Avatar name={email.from.name} />
      </div>
      <div className="email-card-text-container">
        <p className="email-card-text">
          From:{" "}
          <b>
            {email.from.name} &lt;{email.from.email}
            &gt;
          </b>
        </p>
        <p className="email-card-text">
          Subject: <b>{email.subject}</b>
        </p>
        <div>
          <p
            className={`email-card-text ${
              activeEmail && "email-card-description"
            }`}
          >
            {email.short_description}
          </p>
        </div>
        <div className="email-card-footer">
          <p>{formatDate(email.date)}</p>
          <b className="favorite-tag">Favorite</b>
        </div>
      </div>
    </div>
  );
}

export default EmailCard;
