import { AppActionEnum, IncAction, DecAction, MulAction, DivAction, SetDisplayAction, SetBooferAction, ResetBooferAction, SetOperationAction, ResetAction } from "./reducer";

export const ActionCreator = {
    reset: (): ResetAction => ({ type: AppActionEnum.RESET }),
    resetBoofer: (): ResetBooferAction => ({ type: AppActionEnum.RESET_BOOFER }),
    setBoofer: (payload: string): SetBooferAction => ({ type: AppActionEnum.SET_BOOFER, payload }),
    setDisplay: (payload: string): SetDisplayAction => ({ type: AppActionEnum.SET_DISPLAY, payload}),
    setOperation: (payload: string): SetOperationAction => ({ type: AppActionEnum.SET_OPERATION, payload }),
    inc: (payload: number): IncAction => ({ type: AppActionEnum.INC, payload: payload }),
    dec: (payload: number): DecAction => ({ type: AppActionEnum.DEC, payload: payload }),
    mul: (payload: number): MulAction => ({ type: AppActionEnum.MUL, payload: payload }),
    div: (payload: number): DivAction => ({ type: AppActionEnum.DIV, payload: payload }),
}