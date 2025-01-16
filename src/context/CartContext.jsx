import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  subtotal: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      const updatedCart = existingItem
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...state.cart, { ...action.payload, quantity: 1 }];

      return {
        ...state,
        cart: updatedCart, // Cambiado 'items' por 'cart'
        subtotal: calculateSubtotal(updatedCart),
      };

    case "REMOVE_ITEM":
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload,
      );
      return {
        ...state,
        cart: filteredCart, // Cambiado 'items' por 'cart'
        subtotal: calculateSubtotal(filteredCart),
      };

    case "UPDATE_QUANTITY":
      const updatedCartQuantity = state.cart.map((item) =>
        item.id === action.payload.itemId
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );

      return {
        ...state,
        cart: updatedCartQuantity,
        subtotal: calculateSubtotal(updatedCartQuantity),
      };

    // Más casos...

    default:
      return state;
  }
}

const calculateSubtotal = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export function CartProvider({ children }) {
  const loadInitialState = () => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : initialState;
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return initialState;
    }
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(state));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [state]);

  const value = {
    cart: state.cart,
    subtotal: state.subtotal,
    addItem: (item) => dispatch({ type: "ADD_ITEM", payload: item }),
    removeItem: (itemId) => dispatch({ type: "REMOVE_ITEM", payload: itemId }),
    updateQuantity: (itemId, quantity) =>
      dispatch({ type: "UPDATE_QUANTITY", payload: { itemId, quantity } }),
    // Más funciones según necesites...
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
