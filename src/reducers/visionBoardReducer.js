import uuid from "uuid/v1";

export const visionBoardRecucer = (state, action) => {
  switch (action.type) {
    case "ADD_VISION":
      return [
        ...state,
        {
          title: action.vision.title,
          milestone: action.vision.milestone,
          id: uuid()
        }
      ];
    case "REMOVE_VISION":
      return state.filter(vision => vision.id !== action.id);
    default:
      return state;
  }
};
