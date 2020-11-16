const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-EXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Andry'},
        {id: 3, name: 'Stas'},
        {id: 4, name: 'Nikol'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'How a you>?'},
        {id: 4, message: 'Thank, I`m fine, and you?'},
        {id: 5, message: 'All right'},
    ],
    newMessageText: ''
}


const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
          return{
                ...state,
                newMessageText: action.newText
            };
        case ADD_MESSAGE:
            let newMessage = {id: 6, message: state.newMessageText};
            return  {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogReducer;