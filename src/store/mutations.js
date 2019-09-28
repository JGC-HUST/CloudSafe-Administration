const mutations = {
    // userInfo: {},
    // userList: [],
    // feedList: [],
    // checkList: [],
    // keyList: [],
    // statusList: [],
    // questionList: []
    updateUserInfo(state, info) {
        state.userInfo = info;
    },
    updateUserList(state, list) {
        state.userList = list;
    },
    clearUserList(state) {
        state.userList = []
    }
}

export default mutations;