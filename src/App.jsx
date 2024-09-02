import User from './components/User'
import './App.css'
import UserProvider from './providerContext/UserProvider';

function App() {
  

  return (
    <UserProvider>
       <User />
      
    </UserProvider>
  )
}

export default App
