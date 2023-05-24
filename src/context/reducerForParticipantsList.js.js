const listReducer = (state, action) => {
  switch (action.type) {
    case "delete":
      const updatedListAfterDelete = state.participants.filter(
        (participant) => participant.id !== action.payload
      );

      return {
        ...state,
        participants: updatedListAfterDelete,
      };

    default:
      throw Error("Cannot match case in listReducer");
  }
};

export default listReducer;
