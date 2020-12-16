import axios from 'axios';

import {message} from 'antd'




let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'token': sessionStorage.getItem('token'),
        'Authorization':'Token' + ' ' + sessionStorage.getItem('token')
    }
};


export const toggleSideBar = (payload) => ({
    type: 'TOGGLE_SIDE_BAR',
    payload: payload
});

export const toggleTab = (payload) => ({
    type: 'TOGGLE_TAB',
    payload: payload
});

export const toggleUpdateProductModal = (payload) => ({
    type: 'TOGGLE_UPDATE_PRODUCT_MODAL',
    payload: payload
});

export const toggleSibeBar = (payload) => ({
    type: 'TOGGLE_SIDE_BAR',
    payload: payload
});
export const setProduct = (payload) => ({
    type: 'SET_PRODUCT',
    payload: payload
});






//

// export function getPosts() {
//     return dispatch => {
//         // axios.defaults.headers = Auth.retrieveData('authHeaders');
//         dispatch({
//             type: postTypes.GET_POSTS,
//             payload: new Promise((resolve, reject) => {
//                 axios
//                     .get(`http://localhost:3000/posts`, axiosConfig)
//                     .then(response => resolve(response.data))
//                     .then(response => resolve(response.data))
//                     .catch(error => reject(error))
//             })
//         });
//     };
// }


export function getProducts() {
    return {
        type: 'GET_PRODUCTS',

        payload: new Promise((resolve, reject) => {
            // axios.get('https://prodsapi.herokuapp.com/esi')
            axios.get('')
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        })
    }
}



export function userLogin(user) {
    return {
        type: 'USER_LOGIN',

        payload: new Promise((resolve, reject) => {
            axios.post('https://litro-api.herokuapp.com/login', user, axiosConfig)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        })
    }
}

export function userLogout() {
    return {
        type:'USER_LOGOUT',

        payload: new Promise((resolve, reject) => {
            axios.delete('https://litro-api.herokuapp.com/logout', axiosConfig)
                .then(response => resolve(response.data))
                .catch(error => reject(error))
        })
    }
}



export function deleteProduct(id) {
    return {
        type: 'DELETE_PRODUCT',

        payload: new Promise((resolve, reject) => {
            axios.delete(`https://litro.herokuapp.com/esi/${id}`, axiosConfig)
                .then(response => resolve(response.data))
                .then(message.success('New product deleted successfully'))
                .catch(error => reject(error))
        })
    }
}


export function updateProduct(product) {
    return {
        type: 'UPDATE_PRODUCT',

        payload: new Promise((resolve, reject) => {
            axios.put(`https://litro-api.herokuapp.com/esi/${product.id}`,
                {
                    product:{
                        source:product.source,
                        category:product.category
                    }
                },
                axiosConfig)
                .then(response => resolve(response.data))
                .then(message.success('New product update successfully'))
                .catch(error => reject(error))
        })
    }
}


export function newProduct(product) {
    return {
        type: 'NEW_PRODUCT',

        payload: new Promise((resolve, reject) => {
            axios.post('https://litro-api.herokuapp.com/esi', product, axiosConfig)
                .then(response => resolve(response.data))
                .then(message.success('New product added successfully'))
                .catch(error => reject(error))
        })
    }
}

