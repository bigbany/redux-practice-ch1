import {useContext} from 'react';
import 

function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}