let userList = [{
    userName: "test",
    id: "test",
    pw: "test"
},
{
    userName: "test2",
    id: "test2",
    pw: "test"
},
{
    userName: "min",
    id: "min",
    pw: "min"
}];

const register = (userName, id, pw) => {
    if (userList.find(user => user.id === id)) {
        return false;
    }

    userList.push({
        userName,
        id,
        pw
    });

    return true;
}

const login = (id, pw) => {
    let user = userList.find(user => isValidUser(user, id, pw));
    if (user) {
        return true;
    }

    return false;
}

const isValidUser = (user, id, pw) => (user.id === id && user.pw === pw);