import { getUserList } from '@/api/user'

const actions = {
    // userInfo: {},
    // userList: [],
    // feedList: [],
    // checkList: [],
    // keyList: [],
    // statusList: [],
    // questionList: []
    getUserInfo(context) {

    },
    pullUserList(context) {
        getUserList().then(res => {
            context.commit('updateUserList', res.data)
        });
    },
    resetUserList(context) {
        context.commit('clearUserList');
        getUserList().then(res => {
            context.commit('updateUserList', res.data)
        });
    }
}

export default actions;