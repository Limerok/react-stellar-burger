import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FALIED } from "../actions/register";

const registerInitialState = {
  name: '',
  email: '',
  password: '',
  registerRequest: false,
  registerFailed: false,
}

export const registerReducer = (state = registerInitialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
      }
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: false,
        password: action.password,
      }
    }
    case REGISTER_FALIED: {
      return {
          ...state,
          registerFailed: true,
      }
    }
    default: {
        return state
    }
  }
}