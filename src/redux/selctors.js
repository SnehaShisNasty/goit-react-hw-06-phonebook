export const getAllContacts = store => store.contacts;
export const getFiltered = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();

  const filteredBooks = contacts.filter(({ name, number }) => {
    const normalizedTitle = name.toLowerCase();
    const normalizedAuthor = number.toLowerCase();

    return (
      normalizedAuthor.includes(normalizedFilter) ||
      normalizedTitle.includes(normalizedFilter)
    );
  });

  return filteredBooks;
};
export const getFilter = store => store.filter;
