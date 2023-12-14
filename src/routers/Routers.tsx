import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullScreenLoader from "@/components/spinner/Spinner";
import PageLayout from "@/page-layout/PageLayout";
import RequireAuth from "@/identity/RequireAuth";
import ProtectedRoute from "@/identity/ProtectedRoute";
import PublicRoute from "@/identity/PublicRoute";
import { UserRoles } from "@/identity/identityScopes";

import DashboardPage from "@/pages/dashboard";
import SignInPage from "@/pages/signin";
import MemberPage from "@/pages/member";
import RolesPage from "@/pages/roles";
import InvitationPage from "@/pages/invitation";
import RfidUsersPage from "@/pages/rfid-users";
import SMULocksPage from "@/pages/smu-locks";

export default function Routers() {
  return (
    <React.Suspense fallback={<FullScreenLoader />}>
      <BrowserRouter>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route element={<PageLayout />}>
              <Route
                index
                path="/"
                element={
                  <ProtectedRoute
                    required={[UserRoles.ADMIN, UserRoles.USER]}
                    hasAll={false}
                  >
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="member"
                element={
                  <ProtectedRoute required={[UserRoles.ADMIN]}>
                    <MemberPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="roles"
                element={
                  <ProtectedRoute required={[UserRoles.USER]}>
                    <RolesPage />
                  </ProtectedRoute>
                }
              />
              <Route path="invitation" element={<InvitationPage />} />
              <Route path="rifd-users" element={<RfidUsersPage />} />
              <Route path="smu-locks" element={<SMULocksPage />} />
            </Route>
          </Route>

          <Route element={<PublicRoute />}>
             <Route path="signin" element={<SignInPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}
