import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Users, UserPlus, FileText, ShieldCheck } from "lucide-react";
import { l as listInterns } from "./interns-BLzuUTAj.js";
import { f as firebaseEnabled } from "./use-auth-syaCSZRD.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-g61gAWWs.js";
import { B as Badge } from "./badge-Bru_uoqH.js";
import "./server-CE_WGxYq.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router/ssr/server";
import "zod";
import "./auth.middleware-DgjM0vfs.js";
import "firebase-admin";
import "firebase/auth";
import "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "./router-Jeiu9RrA.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "sonner";
function Dashboard() {
  const {
    data: interns = [],
    isLoading
  } = useQuery({
    queryKey: ["interns"],
    queryFn: listInterns
  });
  const active = interns.filter((r) => {
    const now = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return r.startDate <= now && r.endDate >= now;
  }).length;
  const stats = [{
    label: "Total Interns",
    value: interns.length,
    icon: Users,
    to: "/records"
  }, {
    label: "Active Now",
    value: active,
    icon: UserPlus,
    to: "/records"
  }, {
    label: "Offer Letters",
    value: interns.length,
    icon: FileText,
    to: "/offer-letter"
  }, {
    label: "NDA Documents",
    value: interns.length,
    icon: ShieldCheck,
    to: "/nda"
  }];
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl space-y-6 p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "Dashboard" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Manage intern master records and generate offer letters & NDA agreements." })
      ] }),
      /* @__PURE__ */ jsx(Badge, { variant: firebaseEnabled ? "default" : "secondary", children: firebaseEnabled ? "Firebase synced" : "Local storage" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsx(Link, { to: s.to, children: /* @__PURE__ */ jsx(Card, { className: "transition-shadow hover:shadow-elegant", children: /* @__PURE__ */ jsxs(CardContent, { className: "flex items-center justify-between p-5", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-3xl font-semibold", children: isLoading ? "…" : s.value })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-accent p-3 text-accent-foreground", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" }) })
    ] }) }) }, s.label)) }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", children: "Recent Records" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: isLoading ? /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Loading…" }) : interns.length === 0 ? /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-dashed border-border p-8 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "No intern records yet.",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/records/new", className: "text-primary underline", children: "Create the first record" }),
        "."
      ] }) }) : /* @__PURE__ */ jsx("ul", { className: "divide-y divide-border", children: interns.slice(0, 5).map((r) => /* @__PURE__ */ jsxs("li", { className: "flex items-center justify-between py-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: r.fullName }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
            r.department,
            " · ",
            r.startDate,
            " → ",
            r.endDate
          ] })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/records/$id", params: {
          id: r.id
        }, className: "text-xs text-primary hover:underline", children: "Edit" })
      ] }, r.id)) }) })
    ] })
  ] });
}
export {
  Dashboard as component
};
