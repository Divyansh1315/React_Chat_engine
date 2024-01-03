import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />; //If the user doesn't exist render the auth page 
  } else {
    return <ChatsPage user={user} />;                    //If the user exist render the chat page
  }
}

export default App;