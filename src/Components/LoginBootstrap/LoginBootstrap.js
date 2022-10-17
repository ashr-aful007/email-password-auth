import { getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebse.init';

const auth = getAuth(app);


const LoginBootstrap = () => {
     const [success, setSuccess] = useState(false);
     const [userEmail, setUserEmail] = useState('');
     const handleSubmit = event =>{
          event.preventDefault();
          const from = event.target;
          const email = from.email.value;
          const name = from.name.value
          const password = from.password.value;
          setSuccess(false)

          signInWithEmailAndPassword(auth, email, password)
          .then(result =>{
               const user = result.user;
               console.log(user)
               setSuccess(true)
               from.reset();
               verifyEmail();
               updateUserName(name)
          })
          .catch(error =>{
               console.log('error :', error)
          })

     }

     const verifyEmail = () =>{
          sendEmailVerification(auth.currentUser)
          .then( () => {
               alert('please check your email and verify your email')
          })
     }
     
     const handleEmailBlur = event =>{
          const email = event.target.value;
          setUserEmail(email)

     }

     const handleForgetPassord = () =>{
          if(!userEmail){
               alert('please enter your email')
               return;
          }
          sendPasswordResetEmail(auth, userEmail)
          .then(() =>{
               alert('password Reset email sent . please check your email')
          })
          .catch( error =>{
               console.error(error);
          })
     }

     const updateUserName = (name) =>{
               updateProfile(auth.currentUser, {

               })
               .then( () =>{
                    console.log('display name updeted')
               })
               .catch(error =>{
                    console.error(error)
               })
     }


     return (
          <div className='w-50 mx-auto'> 
               <h3 className='text-success'>Please Login!!</h3>
              <form onSubmit={handleSubmit}>
               <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="your Email" required/>
                    </div>
              <div className="mb-3">
               <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
               <input onBlur={handleEmailBlur} type="text" name='name' className="form-control" id="formGroupExampleInput" placeholder="your Name" required/>
               </div>
                    <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="your Password" required/>
                    <button className='btn btn btn-primary' type='submit'>Login</button>
                    </div>
              </form>
              {success && <p>Successfully login to the account</p>}
              <p><small>New to this website? please<Link to='/register'>Register</Link></small></p>
              <p>Forget password ? please Reset <button type="button" onClick={handleForgetPassord} className="btn btn-link">Reset</button></p>
          </div>
     );
};

export default LoginBootstrap;