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
    },
    updateKfileList ( state, list ) {
        state.keyList = list;
    },
    clearKfileList ( state ) {
        state.keyList = []
    },
    setKfile2Edit ( state, kfile ) {
        state.kfile2Edit = kfile;
    },
    updateCheckList ( state, list ) {
        state.checkList = list;
    },
    clearCheckList ( state ) {
        state.checkList = []
    },
    setCheck2Edit ( state, kfile ) {
        state.check2Edit = kfilCheck
    }
}
export default mutations;