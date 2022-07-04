import { GET_INFOS_PRODUITS } from '../actions/actions';

const initialState = {
  pseudo: 'koala',
};

function produitsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INFOS_PRODUITS:
      return {
        ...state,
        messages: [ // on recréer notre tableau messages
          ...state.messages, // on copie les anciens elements de mon tableau
          { // on insert le nouveau message
            text: action.payload.text,
           
          },
        ],
      };
    default:
      return state;
  }
}

export default produitsReducer;
