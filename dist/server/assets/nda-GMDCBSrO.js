import { jsxs, jsx } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { useState, useRef, useEffect, useMemo } from "react";
import { toast } from "sonner";
import { ShieldCheck, Download, Printer } from "lucide-react";
import { l as logo, a as Route, I as Input, B as Button } from "./router-Jeiu9RrA.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-g61gAWWs.js";
import { L as Label } from "./label-BdjZ6MRF.js";
import { C as COMPANY, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, e as exportElementToPdf, g as generatePdfBase64 } from "./pdf-BatXS8dv.js";
import { l as listInterns } from "./interns-BLzuUTAj.js";
import { b as formatNic, f as formatDocDate } from "./format-tn4fPyMX.js";
import "@tanstack/react-router";
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
import "@radix-ui/react-label";
import "@radix-ui/react-select";
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
import "date-fns";
function NdaDocument({
  intern,
  agreementDate
}) {
  const name = intern?.fullName || "[First Party Full Name]";
  const nic = formatNic(intern?.nic) || "[NIC]";
  const addr = intern?.address || "[Full Address]";
  const dept = intern?.department || "[Department]";
  const date = formatDocDate(agreementDate);
  return /* @__PURE__ */ jsxs("div", { className: "doc-canvas", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx("img", { src: logo, alt: "Elephant House", className: "h-14 w-auto" }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-[18pt] font-bold m-0 text-[#1a3a1a]", children: "NON-DISCLOSURE AGREEMENT" }),
        /* @__PURE__ */ jsx("p", { className: "text-[9pt] text-neutral-600 m-0", children: "Ceylon Cold Stores PLC" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-justify", children: [
      /* @__PURE__ */ jsx("strong", { children: "THIS AGREEMENT" }),
      " made on this ",
      /* @__PURE__ */ jsx("strong", { children: date })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-center font-semibold my-3", children: "BETWEEN" }),
    /* @__PURE__ */ jsxs("p", { className: "text-justify", children: [
      /* @__PURE__ */ jsx("strong", { children: name }),
      " (Holder of National Identity Card bearing the number",
      " ",
      /* @__PURE__ */ jsx("strong", { children: nic }),
      ") of ",
      /* @__PURE__ */ jsx("strong", { children: addr }),
      " (hereinafter referred to as the",
      " ",
      /* @__PURE__ */ jsx("strong", { children: '"First Party"' }),
      ") of the one part."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-center font-semibold my-3", children: "AND" }),
    /* @__PURE__ */ jsxs("p", { className: "text-justify", children: [
      /* @__PURE__ */ jsx("strong", { children: COMPANY.name }),
      ", a public limited company duly incorporated in Sri Lanka and having its registered office at ",
      COMPANY.address,
      " (hereinafter referred to as the",
      " ",
      /* @__PURE__ */ jsx("strong", { children: '"Second Party"' }),
      ") of the other part."
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-justify mt-3", children: [
      /* @__PURE__ */ jsx("strong", { children: "WHEREAS" }),
      " the First Party desires to be an outsourced intern in Ceylon Cold Stores PLC, in the ",
      /* @__PURE__ */ jsx("strong", { children: dept }),
      " Department of the Second Party and the Second Party has agreed to such outsourced contract subject to the terms and conditions set out herein, including the confidentiality of all information disclosed during the internship."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-justify mt-3", children: "The First Party shall not, during the term of internship or at any time thereafter, disclose to any third party any confidential information acquired in the course of the internship, including but not limited to business processes, trade secrets, customer data, financial information and proprietary technology." }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 font-semibold", children: "IN WITNESS WHEREOF" }),
    /* @__PURE__ */ jsx("p", { className: "text-justify", children: "The parties hereto have set their respective hands on the day and year first above written." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 grid grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        intern?.metadata?.signatures?.intern && /* @__PURE__ */ jsx(
          "img",
          {
            src: intern.metadata.signatures.intern,
            alt: "Intern Signature",
            className: "h-10 object-contain mb-1"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-neutral-500" }),
        /* @__PURE__ */ jsx("p", { className: "m-0 text-[10pt] font-semibold", children: "Signature of the First Party" }),
        /* @__PURE__ */ jsx("p", { className: "m-0 text-[10pt]", children: name }),
        intern?.phone ? /* @__PURE__ */ jsxs("p", { className: "m-0 text-[10pt]", children: [
          "Tel: ",
          intern.phone
        ] }) : null
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-neutral-500" }),
        /* @__PURE__ */ jsx("p", { className: "m-0 text-[10pt] font-semibold", children: "Date" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 font-semibold", children: "Witness of the First Party:" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-2 grid grid-cols-2 gap-x-8 gap-y-3 text-[10pt]", children: [
      /* @__PURE__ */ jsx("div", { children: "Name: _______________________________" }),
      /* @__PURE__ */ jsx("div", { children: "Designation: _________________________" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-end", children: /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-1", children: [
        /* @__PURE__ */ jsx("span", { children: "Signature:" }),
        intern?.metadata?.signatures?.witness ? /* @__PURE__ */ jsx(
          "img",
          {
            src: intern.metadata.signatures.witness,
            alt: "Witness Signature",
            className: "h-8 object-contain -mb-1"
          }
        ) : /* @__PURE__ */ jsx("span", { children: "___________________________" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { children: "Date: _______________________________" })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-6 border-neutral-300" }),
    /* @__PURE__ */ jsxs("p", { className: "font-semibold", children: [
      "AUTHORIZED SIGNATURE OF THE SECOND PARTY (",
      COMPANY.name,
      ")"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-2 grid grid-cols-2 gap-x-8 gap-y-3 text-[10pt]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "m-0", children: [
          /* @__PURE__ */ jsx("strong", { children: "Name:" }),
          " ",
          COMPANY.authorizedSignatory.name
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "m-0", children: [
          /* @__PURE__ */ jsx("strong", { children: "Designation:" }),
          " ",
          COMPANY.authorizedSignatory.title
        ] }),
        /* @__PURE__ */ jsx("div", { className: "m-0 mt-6 flex flex-col justify-end", children: /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-1", children: [
          /* @__PURE__ */ jsx("span", { children: "Signature:" }),
          intern?.metadata?.signatures?.hr ? /* @__PURE__ */ jsx(
            "img",
            {
              src: intern.metadata.signatures.hr,
              alt: "HR Signature",
              className: "h-8 object-contain -mb-1"
            }
          ) : /* @__PURE__ */ jsx("span", { children: "____________________" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "m-0", children: [
        /* @__PURE__ */ jsx("strong", { children: "Date:" }),
        " ",
        date
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-6 font-semibold", children: "Witness:" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-2 grid grid-cols-2 gap-x-8 gap-y-3 text-[10pt]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "m-0", children: [
          /* @__PURE__ */ jsx("strong", { children: "Name:" }),
          " ",
          COMPANY.witness.name
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "m-0", children: [
          /* @__PURE__ */ jsx("strong", { children: "Designation:" }),
          " ",
          COMPANY.witness.designation
        ] }),
        /* @__PURE__ */ jsx("div", { className: "m-0 mt-6 flex flex-col justify-end", children: /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-1", children: [
          /* @__PURE__ */ jsx("span", { children: "Signature:" }),
          /* @__PURE__ */ jsx("span", { children: "____________________" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "m-0", children: [
        /* @__PURE__ */ jsx("strong", { children: "Date:" }),
        " ",
        date
      ] }) })
    ] })
  ] });
}
function NdaPage() {
  const {
    id
  } = Route.useSearch();
  const navigate = Route.useNavigate();
  const {
    data: interns = []
  } = useQuery({
    queryKey: ["interns"],
    queryFn: listInterns
  });
  const [selectedId, setSelectedId] = useState(id);
  const [agreementDate, setAgreementDate] = useState(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
  const previewRef = useRef(null);
  useEffect(() => {
    if (id && id !== selectedId) setSelectedId(id);
  }, [id, selectedId]);
  const intern = useMemo(() => interns.find((r) => r.id === selectedId) ?? null, [interns, selectedId]);
  const onSelect = (val) => {
    setSelectedId(val);
    navigate({
      search: {
        id: val
      },
      replace: true
    });
  };
  const onExport = async () => {
    if (!previewRef.current || !intern) return toast.error("Select an intern first");
    const filename = `NDA_${intern.fullName.replace(/\s+/g, "_")}_${agreementDate}.pdf`;
    try {
      await exportElementToPdf(previewRef.current, filename);
      toast.success("PDF downloaded locally");
      toast.promise((async () => {
        const base64 = await generatePdfBase64(previewRef.current);
        const {
          uploadDocumentServer
        } = await import("./interns-BLzuUTAj.js").then((n) => n.i);
        await uploadDocumentServer({
          data: {
            internId: intern.id,
            type: "nda",
            documentBase64: base64,
            fileName: filename
          }
        });
      })(), {
        loading: "Saving copy to candidate's history...",
        success: "Saved to cloud history",
        error: "Failed to save to history"
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to export PDF");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl space-y-4 p-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "NDA Agreement" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "First Party details auto-populate from the selected intern." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-[340px_1fr]", children: [
      /* @__PURE__ */ jsxs(Card, { className: "h-fit", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4" }),
          " Agreement Configuration"
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Intern (First Party)" }),
            /* @__PURE__ */ jsxs(Select, { value: selectedId, onValueChange: onSelect, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select an intern…" }) }),
              /* @__PURE__ */ jsx(SelectContent, { children: interns.length === 0 ? /* @__PURE__ */ jsx("div", { className: "p-2 text-xs text-muted-foreground", children: "No records — create one first." }) : interns.map((r) => /* @__PURE__ */ jsxs(SelectItem, { value: r.id, children: [
                r.fullName,
                " · ",
                r.nic
              ] }, r.id)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "adate", children: "Agreement Date" }),
            /* @__PURE__ */ jsx(Input, { id: "adate", type: "date", value: agreementDate, onChange: (e) => setAgreementDate(e.target.value) })
          ] }),
          intern && /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-border bg-muted/40 p-3 text-xs space-y-1", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "NIC:" }),
              " ",
              intern.nic
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Address:" }),
              " ",
              intern.address
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Dept:" }),
              " ",
              intern.department
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-border bg-accent/40 p-3 text-xs space-y-1", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Second Party (fixed)" }),
            /* @__PURE__ */ jsx("p", { children: "Ceylon Cold Stores PLC" }),
            /* @__PURE__ */ jsx("p", { children: "Authorized: Wasantha Mudalige — Head of HR" }),
            /* @__PURE__ */ jsx("p", { children: "Witness: Kamal Hasan — Asst. Manager HR" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 pt-2", children: [
            /* @__PURE__ */ jsxs(Button, { onClick: onExport, disabled: !intern, className: "flex-1", children: [
              /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
              " PDF"
            ] }),
            /* @__PURE__ */ jsx(Button, { onClick: () => window.print(), variant: "outline", disabled: !intern, children: /* @__PURE__ */ jsx(Printer, { className: "h-4 w-4" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-auto rounded-lg bg-muted/40 p-4", children: /* @__PURE__ */ jsx("div", { ref: previewRef, children: /* @__PURE__ */ jsx(NdaDocument, { intern, agreementDate }) }) })
    ] })
  ] });
}
export {
  NdaPage as component
};
