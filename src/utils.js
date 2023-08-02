export function generateToken(userId,roomID,userName) {
    return fetch('https://choui-prebuilt.herokuapp.com/access_token?userId=${userId}&roomID=${roomID}&userName=${userName}').then((res)=>res.json()) 
}