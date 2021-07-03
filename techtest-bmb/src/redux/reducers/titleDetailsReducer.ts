import { TitleDetailsActions, TitleDetails } from '../../common/interfaces/TitleDetailsInterfaces';
import actionTypes from '../actions/actionTypes';

function titleDetailsReducer(titleDetails = {}, action:TitleDetailsActions) {
  let updateTitleDetails:TitleDetails | any = {...titleDetails};    // ----TODO


  
  
  switch (action.type) {
    case actionTypes.LOAD_DETAILS:  
      updateTitleDetails = action.titleDetails;
      break;
    case actionTypes.LOAD_DETAILS_ERROR:
      break;
    default:
      break;
  }
  return updateTitleDetails;
}

export default titleDetailsReducer;
