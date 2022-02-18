import { connect } from "react-redux";


const TodoListContainer = connect(
  // config
    mapStateToProps,
    mapDispatchToProps
  )
  (
  // TodoList
  TodoList
  );
export default TodoListContainer;