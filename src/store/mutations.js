const mutations = {
    // userInfo: {},
    // userList: [],
    // feedList: [],
    // checkList: [],
    // keyList: [],
    // statusList: [],
    // questionList: []
    // user2Edit: {}
    updateUserInfo ( state, info ) {
        state.userInfo = info;
    },
    updateUserList ( state, list ) {
        state.userList = list;
    },
    clearUserList ( state ) {
        state.userList = []
    },
    setUser2Edit ( state, user ) {
        state.user2Edit = user;
    }
}

export default mutations;