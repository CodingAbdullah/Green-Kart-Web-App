exports.loginAction = () => {
    return {
        type: "login Authentication",
        userInfo: {
            firstname: "",
            lastname: "",
            age: "",
            email: "",
            password: "",
            address: "",
            gender: ""
        }
    }
}