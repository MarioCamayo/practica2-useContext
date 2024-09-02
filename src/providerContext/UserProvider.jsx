import { createContext, useState, useContext } from "react"


const userContext = createContext()
const userToggleContext = createContext()

export function useUserContext(){
  return useContext(userContext)
}

export function useUserToggleContext(){
  return useContext(userToggleContext)
}

const UserProvider = ( {children} ) => {

  const [user, setUser] = useState(null)

  const cambiarLogin = ()=>{
    if(user){
      setUser(null)
    }
    else {
      setUser({name: 'Juan', age: 25})
    } 
  }
  return (
      <userContext.Provider value={user}>
        <userToggleContext.Provider value={cambiarLogin}>
          {children}
        </userToggleContext.Provider>
      </userContext.Provider>
  )
}

export default UserProvider