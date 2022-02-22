import axios from "axios"

const getUsers = data => {
    return axios
        .get(data)
        .then(res => res.data)
        .catch(err => console.log(err))
}

export default getUsers
