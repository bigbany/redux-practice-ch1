import {SHOW_ALL,SHOW_COMPLETE}

function filterReducer(previousState = filterInitialState, action) {
  // if(previousState=== undefined){
  //   return [];
  // }

 

  if (action.type === SHOW_COMPLETE) {
    return  "COMPLETE"
  }

  if (action.type === SHOW_ALL) {
    return  "ALL";
  }

  return previousState;
}