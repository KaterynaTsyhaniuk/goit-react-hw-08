import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(logout.fulfilled, () => initialState)
      .addMatcher(
        isAnyOf(
          addContact.pending,
          deleteContact.pending,
          fetchContacts.pending
        ),
        (state) => {
          state.error = null;
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          addContact.rejected,
          deleteContact.rejected,
          fetchContacts.rejected
        ),
        (state, action) => {
          state.error = action.error.message;
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          addContact.fulfilled,
          deleteContact.fulfilled,
          fetchContacts.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;
export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const { removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
