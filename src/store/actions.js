import { getUserList, getUserById, getUserByName, getUserByPhone, getUserByEmail } from '@/api/user'
import { getKfileList, getKfileById, getKfileByName, getKfileByUID } from '@/api/kfile'
import { getCheckList, getCheckById, getCheckByApplicantAndFileId } from '@/api/check'

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
    // kfile
    pullKfileList ( context ) {
        getKfileList().then( res => {
            context.commit( 'updateKfileList', res.data )
        } );
    },
    pullKfileById ( context, id ) {
        getKfileById( id ).then( res => {
            console.log( res )
            if ( ( typeof res.data ).toLowerCase() == 'object' ) {
                context.commit( 'updateKfileList', [ res.data ] );
            } else {
                context.commit( 'updateKfileList', [] );
            }
        } )
    },
    pullKfileByName ( context, name ) {
        getKfileByName( name ).then( res => {
            if ( ( typeof res.data ).toLowerCase() == 'object' ) {
                context.commit( 'updateKfileList', [ res.data ] );
            } else {
                context.commit( 'updateKfileList', [] );
            }
        } )
    },
    pullKfileByUID ( context, phone ) {
        getKfileByUID( phone ).then( res => {
            if ( ( typeof res.data ).toLowerCase() == 'object' ) {
                context.commit( 'updateKfileList', [ res.data ] );
            } else {
                context.commit( 'updateKfileList', [] );
            }
        } )
    },
    resetKfileList ( context ) {
        context.commit( 'clearKfileList' );
        getKfileList().then( res => {
            context.commit( 'updateKfileList', res.data )
        } );
    },
    // check record
    pullCheckList ( context ) {
        getCheckList().then( res => {
            context.commit( 'updateCheckList', res.data )
        } );
    },
    pullCheckById ( context, id ) {
        getCheckById( id ).then( res => {
            console.log( res )
            if ( ( typeof res.data ).toLowerCase() == 'object' ) {
                context.commit( 'updateCheckList', [ res.data ] );
            } else {
                context.commit( 'updateCheckList', [] );
            }
        } )
    },
    pullCheckByName ( context, name ) {
        getCheckByApplicantAndFileId( app, id ).then( res => {
            if ( ( typeof res.data ).toLowerCase() == 'object' ) {
                context.commit( 'updateCheckList', [ res.data ] );
            } else {
                context.commit( 'updateCheckList', [] );
            }
        } )
    },
    resetCheckList ( context ) {
        context.commit( 'clearCheckList' );
        getCheckList().then( res => {
            context.commit( 'updateCheckList', res.data )
        } );
    },
}

export default actions;