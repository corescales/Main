import { Outlet } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import AccentOnScroll from "@/components/theme/AccentOnScroll";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <AccentOnScroll />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
