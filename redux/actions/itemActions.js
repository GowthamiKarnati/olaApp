
export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';

// Action creator to set the selected item
export const setSelectedItem = (item) => {
  return {
    type: SET_SELECTED_ITEM,
    payload: item,
  };
};
export const SET_SELECTED_TITLE = 'SET_SELECTED_TITLE';

// Action creator to set the selected item
export const setSelectedTitle = (title) => {
  return {
    type: SET_SELECTED_TITLE,
    payload: title,
  };
};
export const SET_USER_DATA = 'SET_USER_DATA';

// Action creator to set user data
export const setUserData = (userData) => {
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
};
