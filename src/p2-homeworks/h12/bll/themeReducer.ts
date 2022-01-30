
type InitStateType = {
    theme:string
}

const initState:InitStateType = {
    theme: 'some'
};

type  AllActionType = ChangeThemeType

export const themeReducer = (state = initState, action: AllActionType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME-AC": {
            return {...state, theme:action.theme};
        }
        default:
            return state;
    }
};
type ChangeThemeType = {
    type: "CHANGE-THEME-AC"
    theme:string
}
export const changeThemeC = (theme:string):ChangeThemeType  => {
    return{
        type: "CHANGE-THEME-AC",
        theme
    }
};