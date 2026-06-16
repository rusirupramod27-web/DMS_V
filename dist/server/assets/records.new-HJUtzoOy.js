import { jsxs, jsx } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { I as InternForm } from "./intern-form-oKJPMjDg.js";
import { l as listInterns } from "./interns-BLzuUTAj.js";
import "react";
import "@tanstack/react-router";
import "sonner";
import "./router-Jeiu9RrA.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "firebase/auth";
import "./use-auth-syaCSZRD.js";
import "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "zod";
import "./label-BdjZ6MRF.js";
import "@radix-ui/react-label";
import "./card-g61gAWWs.js";
import "./format-tn4fPyMX.js";
import "date-fns";
import "./server-CE_WGxYq.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
import "./auth.middleware-DgjM0vfs.js";
import "firebase-admin";
function NewRecord() {
  const {
    data: existing = []
  } = useQuery({
    queryKey: ["interns"],
    queryFn: listInterns
  });
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl space-y-4 p-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "New Intern Record" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Type a name to auto-fill if the candidate already exists." })
    ] }),
    /* @__PURE__ */ jsx(InternForm, { existing })
  ] });
}
export {
  NewRecord as component
};
