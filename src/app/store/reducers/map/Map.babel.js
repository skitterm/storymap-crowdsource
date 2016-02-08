import { combineReducers } from 'redux';
import {
  UPDATE_MAP_REFERENCES,
  UPDATE_MAP_FEATURES_IN_EXTENT
} from 'babel/constants/actionsTypes/Map';

const layer = function(state = false, action) {
  switch (action.type) {
    case UPDATE_MAP_REFERENCES:
      if (action.references.layer) {
        return action.references.layer;
      } else {
        return state;
      }
      return action.dialog;
    default:
      return state;
  }
};

const originalObject = function(state = false, action) {
  switch (action.type) {
    case UPDATE_MAP_REFERENCES:
      if (action.references.map) {
        return action.references.map;
      } else {
        return state;
      }
      return action.dialog;
    default:
      return state;
  }
};

const featuresInExtent = function(state = [], action) {
  switch (action.type) {
    case UPDATE_MAP_FEATURES_IN_EXTENT:
      return action.features;
    default:
      return state;
  }
};

export const map = combineReducers({
  layer,
  originalObject,
  featuresInExtent
});

export default map;
