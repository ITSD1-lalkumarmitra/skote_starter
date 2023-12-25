import {post} from './api_helper';

export const auth={
    login: data =>post("/login",data),
}