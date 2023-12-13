import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated } from "@/identity/identityHelper";

/**
 * The Require Auth component allows you to only display
 * content to users that have the required token.
 */
export default function RequireAuth() {
  const location = useLocation();
  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="signin" state={{ from: location }} replace />
  );
}
