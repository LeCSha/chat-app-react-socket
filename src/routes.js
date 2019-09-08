import ChatTemplate from "./components/ChatTemplate"
import LiveVisitors from "./components/LiveVisitors"
import Home from "./components/Home"
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

export default [
    
    {path:'/', exact: true, Component : Home},
    {path:'/chat', exact: true, Component : ChatTemplate},
    {path:'/livevisitors', exact: true, Component : LiveVisitors},
    {path:'/login', exact: true, Component : LoginForm},
    {path:'/register', exact: true, Component : RegisterForm}
    
]