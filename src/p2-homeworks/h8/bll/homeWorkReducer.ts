import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionTypeSort): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let copyState = [...state]
            return copyState.sort((a, b) => a.name.localeCompare(b.name))
        }
        case 'down':{

            return state
        }
        case 'check': {
            let copyState = [...state]
            return copyState.filter(f=> f.age >= 18)
        }
        default: return state
    }
}




type ActionTypeSort ={
    type:'sort' | 'down' | 'check'
    payload: 'up' | '18+' | 'down'
}