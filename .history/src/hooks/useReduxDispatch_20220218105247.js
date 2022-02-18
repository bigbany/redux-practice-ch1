import {useC}

function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}