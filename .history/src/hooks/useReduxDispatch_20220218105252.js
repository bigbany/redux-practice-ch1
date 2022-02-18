import {useContext} from 'te'

function useReduxDispatch() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}