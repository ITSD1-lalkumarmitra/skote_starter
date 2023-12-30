import {post} from './api_helper';

export const auth={
    login: data =>post("/login",data),
}

// student api url
export const student={
    add: data =>post("/user",data),
    list: () =>get("users/role-type/student"),
    delete: (id) =>del(`/user/${id}`),
}

// Staff api url
export const staff={
    add: data =>post("/user",data),
    list: () =>get("users/role-type/staff"),
    delete: (id) =>del(`/user/${id}`),
}


