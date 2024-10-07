import * as SecureStore from 'expo-secure-store';

export async function signupHandler({email, password}) {
    const response = await fetch('http://172.30.1.72:5000/sign/up', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            email,
            password,
        })
    })

    const resData = await response.text();
    console.log(resData);

    return resData
}

export async function loginHandler({email, password}) {
    const response = await fetch('http://172.30.1.72:5000/login/lo', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({email, password})
    });

    if(!response.ok){
        throw new Error('요청 중 에러')
    }

    const resData = await response.json();


    if(!resData.token){
        return;
    }

    await SecureStore.setItemAsync('token', resData.token);
    
    return resData;
}

export async function logoutHandler() {
    const token = await SecureStore.getItemAsync('token');

    const response = await fetch('http://172.30.1.72:5000/log/out', {
        method : 'POST',
        headers : {
            'Authorization' : 'Bearer '+ token
        }
    })

    if(!response.ok){
        throw new Error('요청 중 에러')
    }

    const resData = await response.json();

    if(resData.status === true){
        await SecureStore.deleteItemAsync('token');
    }

    return resData.status;

}