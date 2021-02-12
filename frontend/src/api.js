import Vue from 'vue';
import axios from 'axios';

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
}