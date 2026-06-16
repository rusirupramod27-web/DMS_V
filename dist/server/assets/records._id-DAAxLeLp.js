import { jsx, jsxs } from "react/jsx-runtime";
import { notFound, Link } from "@tanstack/react-router";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { I as InternForm } from "./intern-form-oKJPMjDg.js";
import { g as getIntern, l as listInterns } from "./interns-BLzuUTAj.js";
import { Upload, Trash2, Check, ArrowLeft, FileText, Download } from "lucide-react";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { c as cn, B as Button, d as Route } from "./router-Jeiu9RrA.js";
import { toast } from "sonner";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardDescription } from "./card-g61gAWWs.js";
import { B as Badge } from "./badge-Bru_uoqH.js";
import "./label-BdjZ6MRF.js";
import "@radix-ui/react-label";
import "class-variance-authority";
import "./format-tn4fPyMX.js";
import "date-fns";
import "./use-auth-syaCSZRD.js";
import "firebase/auth";
import "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "./server-CE_WGxYq.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
import "zod";
import "./auth.middleware-DgjM0vfs.js";
import "firebase-admin";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-separator";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
function SignaturePad({ internId, type, onSave }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState("#000000");
  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);
    ctx.lineCap = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = penColor;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, rect.width, rect.height);
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = penColor;
    }
  }, [penColor]);
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      if (e.touches.length === 0) return { x: 0, y: 0 };
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };
  const startDrawing = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };
  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };
  const stopDrawing = () => {
    setIsDrawing(false);
  };
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, rect.width, rect.height);
    toast.info("Signature cleared");
  };
  const saveSignature = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setUploading(true);
    try {
      const dataUrl = canvas.toDataURL("image/png");
      const { uploadSignatureServer } = await import("./interns-BLzuUTAj.js").then((n) => n.i);
      const res = await uploadSignatureServer({
        data: {
          internId,
          type,
          signatureBase64: dataUrl
        }
      });
      toast.success("Signature saved and uploaded successfully!");
      onSave(res.url);
    } catch (err) {
      console.error(err);
      toast.error(err?.message || "Failed to upload signature");
    } finally {
      setUploading(false);
    }
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      return toast.error("Please select an image file (PNG/JPG).");
    }
    setUploading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64Data = reader.result;
        const { uploadSignatureServer } = await import("./interns-BLzuUTAj.js").then((n) => n.i);
        const res = await uploadSignatureServer({
          data: {
            internId,
            type,
            signatureBase64: base64Data
          }
        });
        toast.success("Signature uploaded successfully!");
        onSave(res.url);
      } catch (err) {
        console.error(err);
        toast.error(err?.message || "Failed to upload signature file");
      } finally {
        setUploading(false);
      }
    };
    reader.onerror = () => {
      toast.error("Failed to read file");
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4 bg-card shadow-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold capitalize", children: [
        type,
        " Signature"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setPenColor("#000000"),
            className: `h-5 w-5 rounded-full border border-border bg-black ${penColor === "#000000" ? "ring-2 ring-primary ring-offset-1" : ""}`,
            title: "Black Pen"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setPenColor("#0f172a"),
            className: `h-5 w-5 rounded-full border border-border bg-slate-900 ${penColor === "#0f172a" ? "ring-2 ring-primary ring-offset-1" : ""}`,
            title: "Navy Pen"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-md border border-border bg-white", children: /* @__PURE__ */ jsx(
      "canvas",
      {
        ref: canvasRef,
        onMouseDown: startDrawing,
        onMouseMove: draw,
        onMouseUp: stopDrawing,
        onMouseLeave: stopDrawing,
        onTouchStart: startDrawing,
        onTouchMove: draw,
        onTouchEnd: stopDrawing,
        className: "h-32 w-full cursor-crosshair touch-none"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            id: `file-upload-${type}`,
            accept: "image/*",
            onChange: handleFileUpload,
            className: "hidden",
            disabled: uploading
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: () => document.getElementById(`file-upload-${type}`)?.click(),
            disabled: uploading,
            className: "text-xs",
            children: [
              /* @__PURE__ */ jsx(Upload, { className: "mr-1.5 h-3.5 w-3.5" }),
              " Upload File"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: clearCanvas,
            disabled: uploading,
            className: "text-xs text-muted-foreground hover:text-destructive",
            children: [
              /* @__PURE__ */ jsx(Trash2, { className: "mr-1.5 h-3.5 w-3.5" }),
              " Clear"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            onClick: saveSignature,
            disabled: uploading,
            className: "text-xs",
            children: [
              /* @__PURE__ */ jsx(Check, { className: "mr-1.5 h-3.5 w-3.5" }),
              " ",
              uploading ? "Saving…" : "Save Signature"
            ]
          }
        )
      ] })
    ] })
  ] });
}
function EditRecord() {
  const {
    id
  } = Route.useParams();
  const qc = useQueryClient();
  const {
    data: intern,
    isLoading
  } = useQuery({
    queryKey: ["intern", id],
    queryFn: async () => {
      const r = await getIntern(id);
      if (!r) throw notFound();
      return r;
    }
  });
  const {
    data: existing = []
  } = useQuery({
    queryKey: ["interns"],
    queryFn: listInterns
  });
  const handleSignatureSaved = () => {
    qc.invalidateQueries({
      queryKey: ["intern", id]
    });
    qc.invalidateQueries({
      queryKey: ["interns"]
    });
  };
  const signatures = intern?.metadata?.signatures || {};
  const documents = intern?.metadata?.documents || [];
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl space-y-4 p-6", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/records", className: "inline-flex items-center text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-1 h-4 w-4" }),
      " Back to records"
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "Edit Intern Record" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Update master data and manage signatures & documents." })
    ] }),
    isLoading || !intern ? /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Loading…" }) : /* @__PURE__ */ jsxs(Tabs, { defaultValue: "details", className: "w-full", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2 max-w-[400px] mb-4", children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "details", children: "Candidate Details" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "signatures", children: "Signatures & Docs" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "details", children: /* @__PURE__ */ jsx(InternForm, { initial: intern, existing }) }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "signatures", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(SignaturePad, { internId: id, type: "intern", onSave: handleSignatureSaved }),
            signatures.intern && /* @__PURE__ */ jsxs(Card, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(CardHeader, { className: "p-3 pb-0", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xs font-medium", children: "Intern Signature Preview" }) }),
              /* @__PURE__ */ jsx(CardContent, { className: "p-3 flex justify-center bg-slate-50 rounded-b-lg border-t mt-2", children: /* @__PURE__ */ jsx("img", { src: signatures.intern, alt: "Intern Signature", className: "h-16 object-contain" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(SignaturePad, { internId: id, type: "witness", onSave: handleSignatureSaved }),
            signatures.witness && /* @__PURE__ */ jsxs(Card, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(CardHeader, { className: "p-3 pb-0", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xs font-medium", children: "Witness Signature Preview" }) }),
              /* @__PURE__ */ jsx(CardContent, { className: "p-3 flex justify-center bg-slate-50 rounded-b-lg border-t mt-2", children: /* @__PURE__ */ jsx("img", { src: signatures.witness, alt: "Witness Signature", className: "h-16 object-contain" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(SignaturePad, { internId: id, type: "hr", onSave: handleSignatureSaved }),
            signatures.hr && /* @__PURE__ */ jsxs(Card, { className: "mt-2", children: [
              /* @__PURE__ */ jsx(CardHeader, { className: "p-3 pb-0", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xs font-medium", children: "HR Signature Preview" }) }),
              /* @__PURE__ */ jsx(CardContent, { className: "p-3 flex justify-center bg-slate-50 rounded-b-lg border-t mt-2", children: /* @__PURE__ */ jsx("img", { src: signatures.hr, alt: "HR Signature", className: "h-16 object-contain" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-primary" }),
              " Generated Documents History"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { children: "View and download previously generated PDF agreements for this candidate." })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: documents.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center py-6 text-sm text-muted-foreground border border-dashed rounded-lg", children: "No documents generated yet. Head over to the Offer Letter or NDA pages to generate them." }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border pb-2", children: [
              /* @__PURE__ */ jsx("th", { className: "font-semibold py-2", children: "Document" }),
              /* @__PURE__ */ jsx("th", { className: "font-semibold py-2", children: "File Name" }),
              /* @__PURE__ */ jsx("th", { className: "font-semibold py-2", children: "Generated At" }),
              /* @__PURE__ */ jsx("th", { className: "font-semibold py-2 text-right", children: "Action" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: documents.map((docObj) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-border hover:bg-muted/40 transition-colors", children: [
              /* @__PURE__ */ jsx("td", { className: "py-3", children: /* @__PURE__ */ jsx(Badge, { variant: docObj.type === "offer" ? "default" : "secondary", className: "capitalize", children: docObj.type === "offer" ? "Offer Letter" : "NDA" }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 font-mono text-xs", children: docObj.fileName }),
              /* @__PURE__ */ jsx("td", { className: "py-3 text-muted-foreground", children: new Date(docObj.generatedAt).toLocaleString() }),
              /* @__PURE__ */ jsx("td", { className: "py-3 text-right", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: docObj.storageUrl, target: "_blank", rel: "noreferrer", download: true, children: [
                /* @__PURE__ */ jsx(Download, { className: "mr-1 h-4 w-4" }),
                " Download"
              ] }) }) })
            ] }, docObj.id)) })
          ] }) }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  EditRecord as component
};
