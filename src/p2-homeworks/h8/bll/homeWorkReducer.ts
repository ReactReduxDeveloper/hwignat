import {UserType, UserTypeMas} from "../HW8";

export const homeWorkReducer = (state: UserTypeMas, action: { type: string, payload: string }): UserTypeMas => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = [...state].sort((a,b)=>a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            return action.payload === 'up' ? newState : newState.reverse()
            // switch (action.payload) {
            //     case 'up': {
            //
            //      return [...state].sort((a,b)=>a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            //         //return Newstate
            //     }
            //     case 'down': {
            //         return [...state].sort((a,b)=>a.name < b.name ? 1 : a.name > b.name ? -1 : 0)
            //
            //     }
            // }
        }
        case 'check_18': {
           return state.filter(el => el.age > 18)

        }
        default:
            return state
    }
}