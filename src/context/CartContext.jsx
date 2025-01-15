import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
  subtotal: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      const updatedItems = existingItem
        ? state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...state.items, { ...action.payload, quantity: 1 }];

      return {
        ...state,
        items: updatedItems,
        subtotal: calculateSubtotal(updatedItems),
      };

    case "REMOVE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload,
      );
      return {
        ...state,
        items: filteredItems,
        subtotal: calculateSubtotal(filteredItems),
      };

    // Más casos según necesites...

    default:
      return state;
  }
}

const calculateSubtotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const value = {
    items: state.items,
    subtotal: state.subtotal,
    addItem: (item) => dispatch({ type: "ADD_ITEM", payload: item }),
    removeItem: (itemId) => dispatch({ type: "REMOVE_ITEM", payload: itemId }),
    // Más funciones según necesites...
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
