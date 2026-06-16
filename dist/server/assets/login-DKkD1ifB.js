import { jsx, jsxs } from "react/jsx-runtime";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { l as logo, I as Input, B as Button } from "./router-Jeiu9RrA.js";
import { L as Label } from "./label-BdjZ6MRF.js";
import { toast } from "sonner";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { a as auth } from "./use-auth-syaCSZRD.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "zod";
import "@radix-ui/react-label";
import "firebase/app";
import "firebase/firestore";
import "firebase/storage";
function LoginComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const login = async (e) => {
    e?.preventDefault();
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Signed in");
      navigate({
        to: "/records"
      });
      console.log(user);
    } catch (err) {
      console.error(err);
      toast.error(err?.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };
  const register = async (e) => {
    e?.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created — signed in");
      navigate({
        to: "/records"
      });
    } catch (err) {
      console.error(err);
      toast.error(err?.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md p-8 bg-white rounded-lg shadow-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
      /* @__PURE__ */ jsx("img", { src: logo, alt: "Logo", className: "h-12 w-auto" }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "HR Document Management" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: login, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@example.com" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
        /* @__PURE__ */ jsx(Input, { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Your password" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, className: "flex-1", children: loading ? "Signing in…" : "Sign in" }),
        /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: register, disabled: loading, className: "flex-1", children: loading ? "Creating…" : "Create account" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-4", children: "By signing in you agree to company policies." })
  ] }) });
}
export {
  LoginComponent as component
};
