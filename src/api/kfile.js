import axios from '@/libs/api.request'

export const getKfileList = () => {
    return axios.request( {
        url: '/Management/findAllKeyFile',
        method: 'get'
    } )
}

export const getKfileById = ( id ) => {
    return axios.request( {
        url: `/Management/findBykfile_id?kfile_id=${id}`,
        method: 'get'
    } )
}

export const getKfileByName = ( name ) => {
    return axios.request( {
        url: `/Management/findkfileByuserId?kfile_name=${name}`,
        method: 'get'
    } )
}

export const getKfileByUID = ( uid ) => {
    return axios.request( {
        url: `/Management/findkfileByuserId?kfile_phone=${uid}`,
        method: 'get'
    } )
}
