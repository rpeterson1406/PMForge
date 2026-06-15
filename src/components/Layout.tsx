import { Outlet } from "react-router-dom";
import { Noise } from "./Shell";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import "./Layout.css";

export function Layout() {
  return (
    <>
      <Noise />
      <Navigation />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
