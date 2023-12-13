import { Outlet } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Footer from "./Footer";

export default function PageLayout() {
  return (
    <div className="layout">
      <Layout />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
