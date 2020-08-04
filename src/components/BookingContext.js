import React from "react";

export const BookingContext = React.createContext();
const initialState = {
  status: "idle",
  error: null,
  selectedSeatId: null,
  price: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "begin-booking-process":
      return {
        ...state,
        status: "seat-selected",
        selectedSeatId: action.seatId,
      };
    case "cancel-booking-process":
      return initialState;
    default:
      return state;
  }
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const beginBookingProcess = (data) => {
    dispatch({ type: "begin-booking-process", ...data });
  };
  const cancelBookingProcess = () => {
    dispatch({ type: "cancel-booking-process" });
  };

  return (
    <BookingContext.Provider
      value={{
        state,
        actions: {
          beginBookingProcess,
          cancelBookingProcess,
        },
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
