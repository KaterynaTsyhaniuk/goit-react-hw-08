import { createSelector } from "@reduxjs/toolkit";

export const selectFilterQuery = (state) => state.filters.query;
export const selectFilteredContacts = createSelector(
  [(state) => state.contacts.items, selectFilterQuery],

  (contacts, query) => {
    const normalizedQuery = query.toLowerCase();
    return contacts.filter((contact) => {
      const matchesName = contact.name.toLowerCase().includes(normalizedQuery);
      const matchesNumber = contact.number
        .toLowerCase()
        .includes(normalizedQuery);
      return matchesName || matchesNumber;
    });
  }
);
