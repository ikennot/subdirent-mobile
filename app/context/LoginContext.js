import React, { createContext, useContext, useState } from 'react';

// 1. Lumilikha ng Context object. Ito ang magiging 'channel' para sa global state.
//    Kapag may default value dito, ito ang gagamitin kung walang Provider sa itaas.
const LoginContext = createContext();

// 2. Custom hook para mas madaling gamitin ang LoginContext sa functional components.
//    Tinatawag nito ang useContext at ipinapasa ang LoginContext.
export const useLogin = () => {
  return useContext(LoginContext);
};

// 3. Provider component na maglalaman ng state at functions na ibabahagi sa mga anak nito.
export const LoginProvider = ({ children }) => {
  // State para sa login status.
  const [isLogin, setIsLogin] = useState(false);

  // Function para sa pag-login.
  // Sa kasalukuyan, may hardcoded credentials ito para sa testing.
  const login = (username, password) => {
    if (username === 'jebreilblancada20@gmail.com' && password === '1234') {
      setIsLogin(true); // Kapag successful, i-update ang login status.
      return true;
    }
    return false; // Kapag failed.
  };

  // Function para sa pag-logout.
  const logout = () => {
    setIsLogin(false); // I-reset ang login status sa false.
  };

  // Ang object na ito ang magiging 'value' na ibibigay ng Provider.
  // Lahat ng components na gagamit ng useLogin hook ay makaka-access sa mga ito.
  const value = {
    isLogin,
    login,
    logout,
    setIsLogin, // Ipinapasa rin ang setter function para sa direktang pagbabago ng state kung kinakailangan.
  };

  // Ibinabalot ang 'children' ng LoginContext.Provider, na nagbibigay ng 'value' sa lahat ng nasa loob.
  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};
