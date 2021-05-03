import dummy from "../userDummy.json";
import { CREATE_FARM, SET_USERINFO, SET_MYPAGE } from "../actions/actions";

const myPageReducer = (state = dummy, action) => {
  switch (action.type) {
    case SET_MYPAGE:
      return action.payload.obj;
    case CREATE_FARM:
      return Object.assign({}, state, {
        projectList: [
          ...state.projectList,
          {
            farm_id: action.payload.id,
            farm_name: action.payload.name,
            image: action.payload.image,
          },
        ],
      });
    case SET_USERINFO:
      return Object.assign({}, state, {
        id: action.payload.objUserInfo.id,
        username: action.payload.objUserInfo.username,
        email: action.payload.objUserInfo.email,
        projectList: action.payload.arrProjectList,
      });

    default:
      return state;
  }
};

export default myPageReducer;
