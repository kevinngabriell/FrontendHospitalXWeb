export const LoginProcess = (loginFormData) => {

    if(loginFormData.username && loginFormData.password ){
        console.log('masuk')
        console.log(loginFormData.username);
        console.log(loginFormData.password);

        if(loginFormData.username === 'admin'){
            return {success: true, role: 'admin'}
        } else {
            return {success: true}
        }

    } else {
        console.log('ga')
        return {success: false}
    }
}