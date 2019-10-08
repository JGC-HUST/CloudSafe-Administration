import axios from '@/libs/api.request'

export const getCheckList = () => {
    return axios.request( {
        url: '/Management/findAllCheckRecord',
        method: 'get'
    } )
}

export const getCheckById = ( id ) => {
    return axios.request( {
        url: `/Management/findByCrId?cr_id=${id}`,
        method: 'get'
    } )
}

export const getCheckByApplicantAndFileId = ( app, id ) => {
    return axios.request( {
        url: `/Management/findByCrApplicantAndFileId?cr_applicant=${app}&file_id=${id}`,
        method: 'get'
    } )
}
