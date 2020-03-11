import axios from 'axios';

export const getContacts = () => async dispatch =>{

    try {
        const res =await axios.get('https://jsonplaceholder.typicode.com/users');

        dispatch({
            type : 'GET_contacts',
            payload : res.data
          })
    } catch (error) {
        alert(error)
    }

}

export const getContact = (id) => async dispatch =>{

    try {
        const res =await axios.get('https://jsonplaceholder.typicode.com/users/'+id);

        dispatch({
          type : 'GET_contact',
          payload : res.data
         })
    } catch (error) {
        alert(error)
    }
    
}

export const deleteContact = (id) => dispatch => {
  
         axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then(res => {
            dispatch({
                type : 'DELETE_contact',
                payload : id 
             })
         })
         .catch(err => {
             alert(err)
         })
}


export const addContact = (contact) =>async dispatch => {

    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', contact);

     dispatch({
        type : 'ADD_contact',
        payload : res.data
      })
    } catch (error) {
        alert(error)
    }
    
}

export const updateContact = (contact) =>async dispatch => {

    try {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact);

     dispatch({
        type : 'UPDATE_contact',
        payload : res.data
      })
    } catch (error) {
        alert(error)
    }
    
}

