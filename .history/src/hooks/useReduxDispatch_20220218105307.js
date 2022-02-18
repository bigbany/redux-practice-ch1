import {useContext} from 'react'

function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}