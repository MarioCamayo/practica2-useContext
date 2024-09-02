
import { useUserContext, useUserToggleContext} from '../providerContext/UserProvider'

const User = () => {

  const user = useUserContext()
  const cambiarLogin = useUserToggleContext()
  return (
    <>
      <h1>Bienvenido User </h1>
       <button onClick={cambiarLogin}>Cambia Login</button>
       {user && <p>hola {user.name} {user.age} </p>}

    </>

  )
}

export default User