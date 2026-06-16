import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import * as React from "react";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { Download, Plus, Search, FileText, ShieldCheck, Pencil, Trash2 } from "lucide-react";
import { c as cn, b as buttonVariants, B as Button, I as Input } from "./router-Jeiu9RrA.js";
import { C as Card } from "./card-g61gAWWs.js";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { l as listInterns, d as deleteIntern } from "./interns-BLzuUTAj.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
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
const Table = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "tr",
    {
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }));
TableCaption.displayName = "TableCaption";
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
function toCsv(rows) {
  const headers = ["Full Name", "Name with Initials", "NIC", "Address", "Department", "Start Date", "End Date", "Supervisor", "Telephone"];
  const esc = (v) => `"${(v ?? "").replace(/"/g, '""')}"`;
  const lines = [headers.join(",")];
  for (const r of rows) {
    lines.push([r.fullName, r.nameWithInitials, r.nic, r.address, r.department, r.startDate, r.endDate, r.supervisor, r.phone].map(esc).join(","));
  }
  return lines.join("\n");
}
function RecordsPage() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const {
    data: rows = [],
    isLoading
  } = useQuery({
    queryKey: ["interns"],
    queryFn: listInterns
  });
  const [q, setQ] = useState("");
  const [sortKey, setSortKey] = useState("updatedAt");
  const [sortDir, setSortDir] = useState("desc");
  const [delTarget, setDelTarget] = useState(null);
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    const out = term ? rows.filter((r) => [r.fullName, r.nic, r.department, r.supervisor, r.phone].some((v) => v?.toLowerCase().includes(term))) : rows;
    return [...out].sort((a, b) => {
      const av = a[sortKey] ?? "";
      const bv = b[sortKey] ?? "";
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, q, sortKey, sortDir]);
  const toggleSort = (k) => {
    if (sortKey === k) setSortDir((d) => d === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir("asc");
    }
  };
  const confirmDelete = async () => {
    if (!delTarget) return;
    await deleteIntern(delTarget.id);
    setDelTarget(null);
    qc.invalidateQueries({
      queryKey: ["interns"]
    });
    toast.success("Record deleted");
  };
  const exportCsv = () => {
    const blob = new Blob([toCsv(filtered)], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `interns_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl space-y-4 p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "Intern Records" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Master data (Book1) — ",
          rows.length,
          " record(s)"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: exportCsv, disabled: filtered.length === 0, children: [
          /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
          " Export CSV"
        ] }),
        /* @__PURE__ */ jsxs(Button, { onClick: () => navigate({
          to: "/records/new"
        }), children: [
          /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
          " New Record"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-sm", children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search by name, NIC, department…", className: "pl-9" })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { onClick: () => toggleSort("fullName"), className: "cursor-pointer", children: "Full Name" }),
        /* @__PURE__ */ jsx(TableHead, { children: "NIC" }),
        /* @__PURE__ */ jsx(TableHead, { onClick: () => toggleSort("department"), className: "cursor-pointer", children: "Department" }),
        /* @__PURE__ */ jsx(TableHead, { onClick: () => toggleSort("startDate"), className: "cursor-pointer", children: "Start" }),
        /* @__PURE__ */ jsx(TableHead, { onClick: () => toggleSort("endDate"), className: "cursor-pointer", children: "End" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Phone" }),
        /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: isLoading ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 7, className: "text-center text-muted-foreground py-8", children: "Loading…" }) }) : filtered.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 7, className: "text-center text-muted-foreground py-10", children: rows.length === 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
        "No records yet.",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/records/new", className: "text-primary underline", children: "Create one" }),
        "."
      ] }) : "No matches." }) }) : filtered.map((r) => /* @__PURE__ */ jsxs(TableRow, { className: "hover:bg-muted/40", children: [
        /* @__PURE__ */ jsx(TableCell, { className: "font-medium", children: r.fullName }),
        /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-xs", children: r.nic }),
        /* @__PURE__ */ jsx(TableCell, { children: r.department }),
        /* @__PURE__ */ jsx(TableCell, { children: r.startDate }),
        /* @__PURE__ */ jsx(TableCell, { children: r.endDate }),
        /* @__PURE__ */ jsx(TableCell, { children: r.phone }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-1", children: [
          /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", asChild: true, title: "Offer Letter", children: /* @__PURE__ */ jsx(Link, { to: "/offer-letter", search: {
            id: r.id
          }, children: /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }) }) }),
          /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", asChild: true, title: "NDA", children: /* @__PURE__ */ jsx(Link, { to: "/nda", search: {
            id: r.id
          }, children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4" }) }) }),
          /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", asChild: true, title: "Edit", children: /* @__PURE__ */ jsx(Link, { to: "/records/$id", params: {
            id: r.id
          }, children: /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" }) }) }),
          /* @__PURE__ */ jsx(Button, { size: "icon", variant: "ghost", onClick: () => setDelTarget(r), title: "Delete", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4 text-destructive" }) })
        ] }) })
      ] }, r.id)) })
    ] }) }) }),
    /* @__PURE__ */ jsx(AlertDialog, { open: !!delTarget, onOpenChange: (o) => !o && setDelTarget(null), children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: "Delete record?" }),
        /* @__PURE__ */ jsxs(AlertDialogDescription, { children: [
          "This will permanently delete ",
          /* @__PURE__ */ jsx("strong", { children: delTarget?.fullName }),
          " from the database."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { children: "Cancel" }),
        /* @__PURE__ */ jsx(AlertDialogAction, { onClick: confirmDelete, children: "Delete" })
      ] })
    ] }) })
  ] });
}
export {
  RecordsPage as component
};
