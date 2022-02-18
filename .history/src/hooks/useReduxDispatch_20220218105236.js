import {useContext} f

function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}