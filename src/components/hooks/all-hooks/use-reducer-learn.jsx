import { Divider } from "antd"
import TaskAppUsingWithState from "./use-reducer/using-with-state"
import UsingUseReducer from "./use-reducer/using-use-reducer"

 
 const UseREducerLearn = () => {
   return (
     <div>
       <h4>Using useState</h4>

       <TaskAppUsingWithState />

        <Divider />
       <h3>Do it in useReducer</h3>

       <UsingUseReducer />
     </div>
   )
 }
 
 export default UseREducerLearn
 


