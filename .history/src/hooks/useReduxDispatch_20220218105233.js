import {useContext}

function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}