import Routes from "../Routes";
import { UserContextProvider } from "./UserContext";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true; //cookies
  return (
    <>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </>
  );
}

export default App;
