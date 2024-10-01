import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id : 'e1',
        description : 'A pair of shoes',
        amount : 59.99,
        date : new Date('2021-12-19')
    },
    {
        id : 'e2',
        description : 'A eeee of shoes',
        amount : 89.29,
        date : new Date('2021-01-05')
    },
    {
        id : 'e3',
        description : 'A 22ir of shoes',
        amount : 22.99,
        date : new Date('2021-12-19')
    },
    {
        id : 'e4',
        description : 'A pair odd koala3121',
        amount : 59.99,
        date : new Date('2021-12-01')
    },
    {
      id : 'e15',
      description : 'A pair of shoes',
      amount : 59.99,
      date : new Date('2021-12-19')
  },
  {
      id : 'e26',
      description : 'A eeee of shoes',
      amount : 89.29,
      date : new Date('2021-01-05')
  },
  {
      id : 'e37',
      description : 'A 22ir of shoes',
      amount : 22.99,
      date : new Date('2021-12-19')
  },
  {
      id : 'e48',
      description : 'A pair odd koala3121',
      amount : 59.99,
      date : new Date('2021-12-01')
  },
  {
    id : 'e19',
    description : 'A pair of shoes',
    amount : 59.99,
    date : new Date('2021-12-19')
},
{
    id : 'e209',
    description : 'A eeee of shoes',
    amount : 89.29,
    date : new Date('2021-01-05')
},
{
    id : 'e32',
    description : 'A 22ir of shoes',
    amount : 22.99,
    date : new Date('2021-12-19')
},
{
    id : 'e4d',
    description : 'A pair odd koala3121',
    amount : 59.99,
    date : new Date('2021-12-01')
},
]

export const ExCtx = createContext({
    addItem : ({amount, description, date})=>{},
    deleteItem : (id)=>{},
    updateItem : (id, { amount, description, date})=>{},
    expenseState : []
});

function reducerFunction(state, action){
    switch(action.type){
        case 'ADD' :
            const id = new Date.toString() + Math.random().toString();
            return [{...action.payload, id : id}, ...state];
        case 'DELETE' :
            const deleteArr = state.filter((ele)=>{
                return ele.id !== action.payload
            })
            return deleteArr
        case 'UPDATE' :
            const selectedIndex = state.findIndex((ele)=>{
                return ele.id === action.payload.id
            });

            const copyState = [...state]
            const copyData = {...action.payload.expenseItem};
            copyState[selectedIndex] = copyData;
            console.log(copyState)

            return copyState
        default :
            return state
    }
}

export default function ExCtxProvider({children}){

    const [expenseState, dispatch] = useReducer(reducerFunction, DUMMY_EXPENSES);

    function addItem(expenseItem){
        dispatch({type : 'ADD', payload : {expenseItem}})
    }

    function deleteItem(id){
        dispatch({type : 'DELETE', payload : id})
    }

    function updateItem(id, expenseItem){
        dispatch({type : 'UPDATE', payload : {id : id, expenseItem : expenseItem}})
    }

    const ctx = {
        addItem,
        deleteItem,
        updateItem,
        expenseState : expenseState
    }
    

    return(
        <>
            <ExCtx.Provider value={ctx}>{children}</ExCtx.Provider>
        </>
    )
}