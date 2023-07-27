import { HOME } from "Route/routes";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useAuth from "hooks/auth";

function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && pathname.startsWith("/protected") && !user) {
      navigate(HOME);
    }
  }, [pathname, isLoading, user, navigate]);
  if (isLoading) return "Loading...";
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
