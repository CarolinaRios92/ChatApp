import Register from "./components/Register";
import { UserContextProvider } from "./UserContext";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true; //cookies
  return (
    <>
      <UserContextProvider>
        <Register />
      </UserContextProvider>
    </>
  );
}

export default App;
