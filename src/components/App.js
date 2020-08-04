import React from "react";

import GlobalStyles from "./GlobalStyles";
import { SeatContext } from "./SeatContext";

function App() {
  const {
    actions: { receiveSeatInfoFromServer },
  } = React.useContext(SeatContext);
  React.useEffect(() => {
    fetch("/api/seat-availability")
      .then((res) => res.json())
      .then((data) => {
        receiveSeatInfoFromServer(data);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <GlobalStyles />
      TODO: write code
    </>
  );
}

export default App;
