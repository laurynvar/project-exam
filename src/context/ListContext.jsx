import { createContext, useReducer } from "react";
import listReducer, { initialState } from "./reducerForParticipantsList.js";

export const ListContext = createContext();

const ListWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(listReducer, initialState);

  const removeFromList = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  return (
    <ListContext.Provider
      value={{
        participants: state.participants,
        removeFromList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListWrapper;
