interface IAppState {
    display: string;
    boofer: string;
    total: number;
    operation: string;
}

const initialState: IAppState = {
    display: "0",
    boofer: "0",
    total: 0,
    operation: ""
}

export enum AppActionEnum {
    INC = "INC",
    DEC = "DEC",
    MUL = "MUL",
    DIV = "DIV",
    SET_DISPLAY = "SET_DISPLAY",
    SET_BOOFER = "SET_BOOFER",
    RESET_BOOFER = "RESET_BOOFER",
    SET_OPERATION = "SET_OPERATION",
    RESET = "RESET"
}

export interface SetDisplayAction {
    type: AppActionEnum.SET_DISPLAY;
    payload: string;
}

export interface SetBooferAction {
    type: AppActionEnum.SET_BOOFER;
    payload: string;
}

export interface ResetBooferAction {
    type: AppActionEnum.RESET_BOOFER;
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

export interface SetOperationAction {
    type: AppActionEnum.SET_OPERATION;
    payload: string;
}

export interface ResetAction {
    type: AppActionEnum.RESET;
}

export type AppAction = IncAction | DecAction | MulAction | DivAction | SetDisplayAction | SetBooferAction | ResetAction | ResetBooferAction | SetOperationAction;

export const reducer = (state: IAppState = initialState, action: AppAction): IAppState => {
    switch (action.type) {
        case AppActionEnum.RESET:
            return { 
                ...state, 
                display: "0",
                boofer: "0",
                total: 0,
                operation: "" 
            };
        case AppActionEnum.RESET_BOOFER:
            return { ...state, boofer: "0" };
        case AppActionEnum.SET_OPERATION:
            return { ...state, operation: action.payload };            
        case AppActionEnum.SET_BOOFER:
            return { ...state, boofer: state.boofer + action.payload };
        case AppActionEnum.SET_DISPLAY:
            return { ...state, display: action.payload };
        case AppActionEnum.INC:
            return { ...state, total: state.total + action.payload };
        case AppActionEnum.DEC:
            return { ...state, total: state.total - action.payload };
        case AppActionEnum.MUL:
            return { ...state, total: state.total * action.payload };
        case AppActionEnum.DIV:
                return { ...state, total: state.total / action.payload };            
        default: 
            return state;
    }
}
