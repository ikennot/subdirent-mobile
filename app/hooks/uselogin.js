import {useState} from 'react';

export const useLogin = ()=>{
    const [isLogin, setIsLogin] = useState(false);
    //   const [user, setUser] = useState(null);

      const login = (username,password) =>{
        if(username === 'jebreilblancada20@gmail.com' && password === '1234'){
            setIsLogin(true);
            return true;
        }
      return false;
      };


     const logout = () => {
    setIsLogin(false);
  };

  return {isLogin,login,logout}
}