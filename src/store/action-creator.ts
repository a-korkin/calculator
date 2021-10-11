import { AppActionEnum, IncAction, DecAction, MulAction, DivAction, SetDisplayAction } from "./reducer";

export const ActionCreator = {
    setDisplay: (payload: string):SetDisplayAction => ({ type: AppActionEnum.SET_DISPLAY, payload}),
    inc: (value: number): IncAction => ({ type: AppActionEnum.INC, payload: value }),
    dec: (value: number): DecAction => ({ type: AppActionEnum.DEC, payload: value }),
    mul: (value: number): MulAction => ({ type: AppActionEnum.MUL, payload: value }),
    div: (value: number): DivAction => ({ type: AppActionEnum.DIV, payload: value })
}