import { useContext } from "react";
import Register from "./src/components/Register";
import { UserContext } from "./src/UserContext";

export default function Routes() {
  const { username, id } = useContext(UserContext);

  if (username) {
    return "logged in";
  }

  return <Register />;
}
