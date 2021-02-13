
import axios from 'axios';

const API_URL = 'https://w497o4ibr7.execute-api.us-east-1.amazonaws.com/dev';

export class APIService{
    constructor() {
        
    }

    getItems() {
        const url = '${API_URL}/items';
        return axios.get(url).then(response => response.data);
    }
    getItem(pk) {
        const url = '${API_URL}/items/${pk}';
        return axios.get(url).then(response => response.data);
    }

}
module.exports = {
    APIService,
};

exports{ APIService };
/*
const client = axios.create({
  baseURL: 'https://w497o4ibr7.execute-api.us-east-1.amazonaws.com/dev',
  json: true
})

export default {
    async execute (method, resource, data) {
        return client({
            method,
            url: resource,
            data
        }).then( req => {
            return req.data
        })
    },
    // CREATE
    createItem ( data ) {
        return this.execute( 'post' , '/items' , data )
    },
    // READ
    getItem( id ) {
        return this.execute( 'get' , '/items/${id}' )
    },
    // READ ALL
    getItems() {
        return this.execute( 'get' , '/items' )
    },
    // UPDATE
    updateItem( id , data ) {
        return this.execute( 'put' , '/items/${id}' , data )
    },
    // DELETE
    deleteItem( id ) {
        return this.execute( 'delete', '/items/${id}' )
    }
} */