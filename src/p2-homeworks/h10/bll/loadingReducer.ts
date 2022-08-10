export type InitStateType = {
    isLoading: boolean;

}
const initState: InitStateType = {
    isLoading: false,

}

export const loadingReducer = (state = initState, action: LoadingAcType): InitStateType => { // fix any
    switch (action.type) {
        case 'loading': {
           return {...state, isLoading: action.loading}
        }
        default:
            return state
    }
}
type LoadingAcType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => ({
    type: "loading",
    loading
} as const) // fix any
