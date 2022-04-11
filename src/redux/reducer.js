import { ADD, COMPLETE, DELETE, EDIT } from "./actionType";





const init={
    todos:[{
        id:Math.random(),
        action:"Wake Up",
        isDone:true,
    },
    {
        id:Math.random(),
        action:"Go Out",
        isDone:false,
    },
]
}

export const taskReducer=(state=init,{type,payload})=> {
    switch (type) {
        case DELETE:
            
          return{
              ...state,todos:state.todos.filter(el=>el.id!==payload),
          }; 
          case COMPLETE:
              return{
                  ...state,todos:state.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el),
              };

              case ADD:
                  return{
                      ...state,todos:[...state.todos,payload]
                  };
           case EDIT:
               return{
                   ...state,todos:state.todos.map(el=>el.id===payload.id?payload:el)
               };       
    
        default:
        return state;
    }

}