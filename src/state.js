
let state = {
    friendsData:['Миша','Оля','Маша'],
    profilePage:{

        postsData : [
            {id: 1, message: 'Hello!How are you?', countLikes: 29},
            {id: 2, message: 'How are you?', countLikes: 39},
            {id: 3, message: 'Hello!', countLikes: 2}
        ]
    },

    messagesPage:{
        messagesData : [
            {message: "Hi"},
            {message: "How are you"},
            {message: "Hello"},
        ],
            dialogsData : [
            {id: 1, name: 'Оля'},
            {id: 2, name: 'Маша'},
            {id: 3, name: 'Олеся'},
            {id: 4, name: 'Паша'},
            {id: 5, name: 'Катя'}
        ]
    }
}
export default state;