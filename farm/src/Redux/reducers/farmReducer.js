import dummy from "../dummy.json";
import { ADD_CROPS } from "../actions/actions";

const farmReducer = (state = dummy, action) => {
  switch (action.type) {
    case ADD_CROPS:
      let crops = {
        id: state.cropsCnt,
        name: action.payload.name,
        icon: action.payload.icon,
        seedsCnt: 1,
        seeds: [],
      };
      let icon = state.iconList.filter((el, idx) => {
        if (idx !== action.payload.idx) {
          return el;
        }
      });
      return Object.assign({}, state, {
        iconList: icon,
        cropsCnt: state.cropsCnt + 1,
        crops: [...state.crops, crops],
      });
    default:
      return state;
  }
};

export default farmReducer;
