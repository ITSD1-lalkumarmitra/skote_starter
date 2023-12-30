import {post} from './api_helper';

export const auth={
    login: data =>post("/login",data),
}

// student api url
export const student={
    add: data =>post("/user",data),
    list: () =>post("/users"),
    delete: (id) =>post(`/user/${id}`),
}


