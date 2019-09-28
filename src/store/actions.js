import { getUserList, getUserById, getUserByName, getUserByPhone, getUserByEmail } from '@/api/user'

const actions = {
    // userInfo: {},
    // userList: [],
    // feedList: [],
    // checkList: [],
    // keyList: [],
    // statusList: [],
    // questionList: []
    getUserInfo ( context ) {

    },
    pullUserList ( context ) {
        getUserList().then( res => {
            context.commit( 'updateUserList', res.data )
        } );
    },
    pullUserById ( context, id ) {
        getUserById( id ).then( res => {
            if ( ( typeof res.data ).toLowerCase() == 'object' ) {
                context.commit( 'updateUserList', [ res.data ] );
            } else {
                context.commit( 'updateUserList', [] );
            }
        } )
    },
    pullUserByName ( context, name ) {
        getUserByName( name ).then( res => {
            if ( ( typeof res.data ).toLowerCase() == 'object' ) {
                context.commit( 'updateUserList', [ res.data ] );
            } else {
                context.commit( 'updateUserList', [] );
            }
        } )
    },
    pullUserByPhone ( context, phone ) {
        getUserByPhone( phone ).then( res => {
            if ( ( typeof res.data ).toLowerCase() == 'object' ) {
                context.commit( 'updateUserList', [ res.data ] );
            } else {
                context.commit( 'updateUserList', [] );
            }
        } )
    },
    pullUserByEmail ( context, email ) {
        getUserByEmail( email ).then( res => {
            if ( ( typeof res.data ).toLowerCase() == 'object' ) {
                context.commit( 'updateUserList', [ res.data ] );
            } else {
                context.commit( 'updateUserList', [] );
            }
        } )
    },
    resetUserList ( context ) {
        context.commit( 'clearUserList' );
        getUserList().then( res => {
            context.commit( 'updateUserList', res.data )
        } );
    },

}

export default actions;