import React, { useState, useEffect } from 'react';
import NavBar from './comp/NavBar'
import NoInternet from './comp/NoInternet'

function App ()  {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener('offline', handleNetworkChange);
    window.addEventListener('online', handleNetworkChange);

    return () => {
      window.removeEventListener('offline', handleNetworkChange);
      window.removeEventListener('online', handleNetworkChange);
    };
  }, []);

  const handleNetworkChange = () => {
    setIsOnline(navigator.onLine);
  };
  return (
    <div>
      {isOnline ? (
    <NavBar/>
    ) : (
      <NoInternet />
      )}
    
    </div>
  )
}

export default App
