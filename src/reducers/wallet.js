import { REQUEST_CURRENCIES, GET_SPENT } from "../actions";

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
}

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    case GET_SPENT:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            ...action.stateExpense,
            exchangeRates: action.dataApi,
          }
        ]
      }
      default:
        return state;
  }
}

export default wallet;
