export const CLIENT_ID = "765833514819-365ueb2l04kkf4lqqo3mqs06980kil6c.apps.googleusercontent.com"
export const REDIRECT_URI = "http://localhost:3000/login/oauth2/code/google";

export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;