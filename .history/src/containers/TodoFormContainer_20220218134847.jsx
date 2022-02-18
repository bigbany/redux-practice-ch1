import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import To

export default connect(
  (state) => ({}),
  (dispatch) => ({
    add: (text) => {
      dispatch(addTodo(text));
    },
  })
)(TodoForm);