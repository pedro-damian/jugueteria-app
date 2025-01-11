import { createContext, useContext, useReducer, useEffect } from "react";

const CheckoutContext = createContext();

const initialState = {
  cart: [
    {
      id: 1,
      name: "Producto 1",
      price: 29.9,
      quantity: 1,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 31.9,
      quantity: 1,
    },
  ],
  subtotal: 61.8,
  discount: 0,
  total: 61.8,
};

function checkoutReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // Lógica para añadir item
      return state;
    case "REMOVE_ITEM":
      // Lógica para remover item
      return state;
    default:
      return state;
  }
}

// Cargar estado inicial desde localStorage
const loadInitialState = () => {
  try {
    const savedState = localStorage.getItem("checkoutState");
    return savedState ? JSON.parse(savedState) : initialState;
  } catch (error) {
    console.error("Error loading state:", error);
    return initialState;
  }
};

export function CheckoutProvider({ children }) {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);
  loadInitialState();

  // Guardar estado en localStorage cuando cambie
  useEffect(() => {
    try {
      localStorage.setItem("checkoutState", JSON.stringify(state));
    } catch (error) {
      console.error("Error saving state:", error);
    }
  }, [state]);

  // Funciones útiles
  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const value = {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckoutContext = () => useContext(CheckoutContext);
