let store = {
    _cullSubscriber() {
        console.log('State is changed');
    },
    _state: {
        siteBar: {
            freinds: [
                {
                    id: 1,
                    name: 'Sasha',
                    avatar: 'https://media.sketchfab.com/avatars/6219c58d42ed493aa0e66f451bc96aa7/fc281472fd6f4727963123ead220bd89.jpg'
                },
                {
                    id: 2,
                    name: 'Andry',
                    avatar: 'https://img2.freepng.ru/20180326/lke/kisspng-web-development-computer-icons-avatar-business-use-profile-5ab94da7695485.6343143015220934794314.jpg'
                },
                {
                    id: 3,
                    name: 'Stas',
                    avatar: 'https://cdn.instructables.com/ORIG/FO9/YXKJ/ILS8YHWP/FO9YXKJILS8YHWP.png?crop=1%3A1&amp;frame=1&amp;width=320'
                },
                {
                    id: 4,
                    name: 'Nikol',
                    avatar: 'https://img-fotki.yandex.ru/get/38067/136583709.b0/0_10fc55_23501bed_XL.png'
                },
            ]
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 5},
                {id: 2, message: 'Ary you ready?', likeCount: 0},
                {id: 3, message: 'It`s my first post', likeCount: 2},
            ],
            newPostText: 'test text'

        },
        dialogsPage: {
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
        }
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        store._cullSubscriber = observer;
    },
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._cullSubscriber(this._state);
    },
    updateNewPostText(newText) {
        // debugger;
        this._state.profilePage.newPostText = newText;
        this._cullSubscriber(this._state);
    },

    dispatch(action) { // { type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._cullSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = newText;
            this._cullSubscriber(this._state);
        }

    }


}

export default store;
window.store = store;