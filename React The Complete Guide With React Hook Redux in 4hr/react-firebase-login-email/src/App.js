import '@elastic/eui/dist/eui_theme_dark.css';
import React, { ReactElement, useEffect, useState } from 'react';
import { EuiPageHeader, EuiPageSection, EuiButton, EuiProvider} from '@elastic/eui';
import { auth } from './firebase';
import Signin from "./components/Signin";
import Home from './components/Home';
import { UserContext } from './UserContext';
function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if(userAuth){
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
  
    return unsubscribe
  }, [])
  
  return (
    <div>
    <EuiProvider>
      <EuiPageHeader
        paddingSize="l"
        restrictWidth='75%'
        bottomBorder='extended'
        pageTitle="Products"
        description=""
      />
      <UserContext.Provider>
        {user ? <Home/> : <Signin/>}
      </UserContext.Provider>
    </EuiProvider>
    </div>
  );
}

export default App;
