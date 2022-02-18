import {useContext} from 'react';
import R

function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}