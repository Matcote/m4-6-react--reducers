import React from "react";
import styled from "styled-components";
import seatSrc from "../assets/seat-available.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { getRowName, getSeatNum } from "../helpers";
import { BookingContext } from "./BookingContext";

const Seat = ({ rowIndex, seatIndex, width, height, price, status }) => {
  const {
    actions: { beginBookingProcess },
  } = React.useContext(BookingContext);

  return (
    <Tippy
      content={
        <span>
          Row {getRowName(rowIndex)}, Seat {getSeatNum(seatIndex)} - ${price}
        </span>
      }
      disabled={status === "unavailable" ? true : false}
    >
      <Button
        disabled={status === "unavailable" ? true : false}
        onClick={() =>
          beginBookingProcess({
            seatId: `${getRowName(rowIndex)}-${getSeatNum(seatIndex)}`,
          })
        }
      >
        <Seatimg
          src={seatSrc}
          alt="seat"
          style={{ height: height, width: width }}
          className={status === "unavailable" ? "grey" : "blue"}
        />
      </Button>
    </Tippy>
  );
};
const Seatimg = styled.img`
  &.grey {
    filter: grayscale(100%);
  }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
`;

export default Seat;
