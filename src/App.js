import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import LoginBootstrap from './Components/LoginBootstrap/LoginBootstrap';
// import {getAuth} from 'firebase/auth'
// import app from './firebase/firebse.init';
import RegestarReactBootstrap from './Components/RegestarReactBootstrap';


// const auth = getAuth(app);
// const handleRegister = (event) =>{
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     console.log(email, password)
// }

// const handleEmailBlur = event =>{
//     console.log(event.target.value);
// }

// const handlePasswordBlur = event =>{
//    console.log(event.target.value)
// }

const router = createBrowserRouter([
   {
    path: '/',
    element: <Layout>0</Layout>,
    children: [
      {path: '/',
      element:<RegestarReactBootstrap></RegestarReactBootstrap>
      },
      {path: '/register',
      element:<RegestarReactBootstrap></RegestarReactBootstrap>
      },
      {path: '/login',
      element:<LoginBootstrap></LoginBootstrap>
      },
    ]
   }
])




function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
     {/* <form onSubmit={handleRegister}>
      <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='your Email'/>
      <br/>
      <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='your password'/>
      <br/>
      <button type="submit">Register</button>
     </form> */}
     {/* <RegestarReactBootstrap></RegestarReactBootstrap> */}
    </div>
  );
}

export default App;
