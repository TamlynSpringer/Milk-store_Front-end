export type CartItemType = {
  name: string,
  type: string,
  storage: number,
  id: string,
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
    type: string,
    payload?: CartItemType,
};

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error('action payload missing ADD action')
      }
      const { id, name, storage } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(item => item.id !== id)
      const itemExists: CartItemType | undefined = state.cart.find(item => item.id === id)
    }
      
      break;
  
    default:
      break;
  }
}