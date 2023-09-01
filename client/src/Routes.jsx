import { useContext } from "react";
import RegisterAndLoginForm from "./components/RegisterAndLoginForm";
import { UserContext } from "./UserContext";

export default function Routes() {
  const { username, id } = useContext(UserContext);

  //   if (username) {
  //     return "logged in";
  //   }

  return <RegisterAndLoginForm />;
}
