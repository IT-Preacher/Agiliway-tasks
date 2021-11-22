import { createSelector } from "reselect";

const selectModal = (state) => state.modal;

export const selectModalType = createSelector(
  selectModal,
  (modal) => modal.type
);

export const selectModalLoading = createSelector(
  selectModal,
  (modal) => modal.isLoading
);

export const selectModalData = createSelector(
  selectModal,
  (modal) => modal.data
);

export const selectModalId = createSelector(selectModal, (modal) => modal.id);

export const selectModalError = createSelector(
  selectModal,
  (modal) => modal.error
);

