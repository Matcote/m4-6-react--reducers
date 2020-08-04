import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

import { getRowName, getSeatNum } from "../helpers";
import { range } from "../utils";
import { SeatContext } from "./SeatContext";
import Seat from "./Seat";

const TicketWidget = () => {
  // TODO: use values from Context
  const { state } = React.useContext(SeatContext);
  const hasLoaded = state.hasLoaded;
  const numOfRows = state.numOfRows;
  const seatsPerRow = state.seatsPerRow;
  const seats = state.seats;

  // TODO: implement the loading spinner <CircularProgress />
  // with the hasLoaded flag
  if (hasLoaded === true) {
    return (
      <Wrapper>
        {range(numOfRows).map((rowIndex) => {
          const rowName = getRowName(rowIndex);

          return (
            <Row key={rowIndex}>
              <RowLabel>Row {rowName}</RowLabel>
              {range(seatsPerRow).map((seatIndex) => {
                const seatId = `${rowName}-${getSeatNum(seatIndex)}`;
                return (
                  <SeatWrapper key={seatId}>
                    <Seat
                      rowIndex={rowIndex}
                      seatIndex={seatIndex}
                      width={36}
                      height={36}
                      price={seats[seatId].price}
                      status={
                        seats[seatId].isBooked ? "unavailable" : "available"
                      }
                    />
                  </SeatWrapper>
                );
              })}
            </Row>
          );
        })}
      </Wrapper>
    );
  } else {
    return (
      <CircleWrapper>
        <CircularProgress />
      </CircleWrapper>
    );
  }
};

const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;
const Wrapper = styled.div`
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
  position: relative;
  margin: 20px auto;
  width: 715px;
`;

const Row = styled.div`
  display: flex;
  position: relative;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`;

const RowLabel = styled.div`
  font-weight: bold;
  position: absolute;
  left: -80px;
  vertical-align: bottom;
`;

const SeatWrapper = styled.div`
  padding: 5px;
`;

export default TicketWidget;
