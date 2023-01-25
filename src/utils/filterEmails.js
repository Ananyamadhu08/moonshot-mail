export const filterEmails = (emails, state) => {
  switch (state.filterType) {
    case "all":
      return emails;

    case "Read":
      return emails.filter((email) => state.readEmailIds.includes(email.id));

    case "Unread":
      return emails.filter((email) => !state.readEmailIds.includes(email.id));

    case "Favorites":
      return emails.filter((email) =>
        state.favoriteEmailIds.includes(email.id)
      );

    default:
      return emails;
  }
};
