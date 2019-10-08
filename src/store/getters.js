const getters = {
    // userInfo: {},
    getUserInfo ( state ) {
        return state.userInfo;
    },
    // userList: [],
    getUserList ( state ) {
        return state.userList;
    },
    // feedList: [],
    getFeedList ( state ) {
        return state.feedList;
    },
    // checkList: [],
    getCheckList ( state ) {
        return state.checkList;
    },
    // keyList: [],
    getKeyList ( state ) {
        return state.keyList;
    },
    // statusList: [],
    getStatusList ( state ) {
        return state.statusList;
    },
    // questionList: []
    getQuestionList ( state ) {
        return state.questionList;
    },
    // user2Edit: {}
    getUser2Edit () {
        return state.user2Edit;
    },
    getKfile2Edit () {
        return state.kfile2Edit;
    },
    getCheck2Edit () {
        return state.check2Edit;
    },
}

export default getters;