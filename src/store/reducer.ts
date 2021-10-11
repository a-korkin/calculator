interface IAppState {
    display: string;
    value: number;
}

const initialState: IAppState = {
    display: "0",
    value: 0
}

export enum AppActionEnum {
    INC = "INC",
    DEC = "DEC",
    MUL = "MUL",
    DIV = "DIV",
    SET_DISPLAY = "SET_DISPLAY"
}

export interface SetDisplayAction {
    type: AppActionEnum.SET_DISPLAY,
    payload: string;
}

export interface IncAction {
    type: AppActionEnum.INC;
    payload: number;
}

export interface DecAction {
    type: AppActionEnum.DEC;
    payload: number;
}

export interface MulAction {
    type: AppActionEnum.MUL;
    payload: number;
}

export interface DivAction {
    type: AppActionEnum.DIV;
    payload: number;
}

export type AppAction = IncAction | DecAction | MulAction | DivAction | SetDisplayAction;

export const reducer = (state: IAppState = initialState, action: AppAction): IAppState => {
    switch (action.type) {
        case AppActionEnum.SET_DISPLAY:
            return { ...state, display: action.payload };
        case AppActionEnum.INC:
            // console.log(action.payload);
            return { ...state, value: state.value + action.payload };
        case AppActionEnum.DEC:
            return { ...state, value: state.value - action.payload };
        case AppActionEnum.MUL:
            return { ...state, value: state.value * action.payload };
        case AppActionEnum.DIV:
                return { ...state, value: state.value / action.payload };            
        default: 
            return state;
    }
}
