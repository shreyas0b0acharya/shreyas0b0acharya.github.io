export const backendAddress = "http://localhost:5000";

// cd C:\cloudflared
// C:\cloudflared>cloudflared tunnel --url http://localhost:3000 in cmd for Frnontend
// C:\cloudflared>cloudflared tunnel --url http://localhost:5000 in cmd for Backend

//use this for deploy. without this if run with npm start then it took long loading time 
// npm run build
// npx serve -s build

// ngrok http 3000 ngrok http 8000 but supports only 1 server at a time

