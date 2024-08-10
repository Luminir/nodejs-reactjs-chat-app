import { useState } from "react";

import "./App.css";

import XacMinh from "./XacMinhPage";
import TroChuyen from "./TroChuyenPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <XacMinh onAuth={(user) => setUser(user)} />;
  } else {
    return <TroChuyen user={user} />;
  }
}

export default App;
