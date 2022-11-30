import { lazy, Suspense } from "react"
import Counter from "./components/Counter"
import "./App.css"



const Users = lazy(() => import("./components/Users") )

const App = () => {
  return(
    <div className="App-header">
        <Counter/>
        <Suspense fallback={<div>Cargando..</div>}>
          <Users/>
        </Suspense>
    </div>
    )
   
}

export default App