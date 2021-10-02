import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 5},
        {id: 2, message: 'Ary you ready?', likeCount: 0},
        {id: 3, message: 'It`s my first post', likeCount: 2},
    ]
}

it('length to post should be incremented',()=>{
    //1. test data
    let action=addPostActionCreator("new post text");

    //2. action
    let newState=profileReducer(state,action)
    //3. expectation
    expect(newState.posts.length).toBe(4);

});


it('after deliting post length shouldn`t be decremented', ()=> {
//1. test data
    let action=deletePost(1);

    //2. action
    let newState=profileReducer(state,action)
    //3. expectation
    expect(newState.posts.length).toBe(2);
});