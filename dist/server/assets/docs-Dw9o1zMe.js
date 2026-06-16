import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { FileText, ShieldCheck } from "lucide-react";
import { B as Button } from "./router-Jeiu9RrA.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardDescription, c as CardContent } from "./card-g61gAWWs.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "sonner";
import "firebase/auth";
import "./use-auth-syaCSZRD.js";
import "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "zod";
function DocsPage() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-2", children: "Documents" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Create and manage internship-related documents" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-blue-600" }),
            /* @__PURE__ */ jsx(CardTitle, { children: "Offer Letter" })
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Generate internship offer letters for selected candidates" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Link, { to: "/offer-letter", children: /* @__PURE__ */ jsx(Button, { className: "w-full", children: "Create Offer Letter" }) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "h-6 w-6 text-green-600" }),
            /* @__PURE__ */ jsx(CardTitle, { children: "NDA Agreement" })
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Generate Non-Disclosure Agreements for interns" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Link, { to: "/nda", children: /* @__PURE__ */ jsx(Button, { className: "w-full", children: "Create NDA Agreement" }) }) })
      ] })
    ] })
  ] }) });
}
export {
  DocsPage as component
};
