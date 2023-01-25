import { createSlice } from "@reduxjs/toolkit";
import { getEmails } from "../actions/emailActions";

const initialState = {
  loading: false,
  allEmails: [],
  readEmailIds: [],
  favoriteEmailIds: [],
  filterOptions: {
    unread: false,
    read: false,
    favorite: false,
  },
  filterType: "all",
};

const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload.loading;
    },
    setReadEmail: (state, { payload }) => {
      !state.readEmailIds.includes(payload.id) &&
        state.readEmailIds.push(payload.id);
    },

    addToFavorite: (state, { payload }) => {
      state.favoriteEmailIds.push(payload.id);
    },
    removeFromFavorite: (state, { payload }) => {
      state.favoriteEmailIds = state.favoriteEmailIds.filter(
        (ids) => ids !== payload.id
      );
    },
    updateFilterType: (state, { payload }) => {
      state.filterType = payload.filterType;
    },
    updateFilterAndReadIdsFromLocalStorge: (state, { payload }) => {
      state.readEmailIds = payload.readEmailIds;

      state.favoriteEmailIds = payload.favoriteEmailIds;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEmails.fulfilled, (state, { payload }) => {
      state.allEmails = payload.emails;
    });

    builder.addCase(getEmails.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

const { reducer, actions } = emailSlice;

export const {
  setPage,
  setLoading,
  setReadEmail,
  removeFromFavorite,
  addToFavorite,
  updateFilterType,
  updateFilterAndReadIdsFromLocalStorge,
} = actions;

export default reducer;
