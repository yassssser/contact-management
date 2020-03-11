
const initState = {
    contacts: [ ],
    contact : {}
};
 
export default function(state = initState, action){
    switch(action.type){ 
        case 'GET_contacts' :
          return {
           ...state,
           contacts : action.payload
        }
        case 'GET_contact':
          return {
            ...state,
            contact : action.payload
          }
        case 'DELETE_contact':
          return {
            ...state,
            contacts : state.contacts.filter(contact => contact.id !== action.payload)
          }
        case 'ADD_contact':
          return {
            ...state,
            contacts : [action.payload, ...state.contacts]
          }
        case 'UPDATE_contact':
          return {
            ...state,
            contacts : state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) : contact )
          }
        default : {
            return state;
        }
    }
}