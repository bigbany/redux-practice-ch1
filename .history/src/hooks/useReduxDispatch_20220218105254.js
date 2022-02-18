import {useContext} from ''

function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}