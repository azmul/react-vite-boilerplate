// import * as React from "react"
// import { useNavigate, useLocation } from "react-router-dom";
import Routers from "@/routers/Routers";
// import { isAuthenticated } from "@/identity/identityHelper";

export default function App() {
  // const location = useLocation();
  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   if(isAuthenticated()) {
  //     navigate(location.state?.from?.pathname)
  //   }
  // },[isAuthenticated])

  return <Routers />;
}

