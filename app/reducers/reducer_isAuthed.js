/**
 * Created by chanwoopark on 2017. 7. 18..
 */

// https://github.com/reactjs/redux/blob/master/examples/todomvc/src/reducers/todos.js 여기를 참고
export default function (state = null, action) {
  switch (action.type) {
    case "USER_AUTHED":
      return true;
    case "USER_DEAUTHED":
      return false;
    default:
    // return state;
      return isUserAuthenticated();
  }

  // return state;
}


function isUserAuthenticated() {
  // app/index.js 에 있던 로직 + json web token인지, expire하지 않았는지 확인
}
