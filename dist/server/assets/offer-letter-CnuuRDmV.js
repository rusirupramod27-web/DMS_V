import { jsxs, jsx } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { useState, useRef, useEffect, useMemo } from "react";
import { toast } from "sonner";
import { FileText, Download, Printer } from "lucide-react";
import { l as logo, R as Route, I as Input, B as Button } from "./router-Jeiu9RrA.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-g61gAWWs.js";
import { L as Label } from "./label-BdjZ6MRF.js";
import { C as COMPANY, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, e as exportElementToPdf, g as generatePdfBase64 } from "./pdf-BatXS8dv.js";
import { l as listInterns } from "./interns-BLzuUTAj.js";
import { f as formatDocDate, d as durationMonths, a as firstName, b as formatNic } from "./format-tn4fPyMX.js";
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
function Letterhead() {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b-2 border-[#1a3a1a] pb-3 mb-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-[20pt] font-bold tracking-tight text-[#1a3a1a] m-0", children: "CEYLON COLD STORES PLC" }),
      /* @__PURE__ */ jsx("p", { className: "text-[9pt] text-neutral-600 m-0", children: "No. 117, Sir Chittampalam A. Gardiner Mawatha, Colombo 02, Sri Lanka" })
    ] }),
    /* @__PURE__ */ jsx("img", { src: logo, alt: "Elephant House", className: "h-16 w-auto" })
  ] });
}
function OfferLetterDocument({
  intern,
  letterDate
}) {
  const name = intern?.fullName || "[Intern Full Name]";
  const addr = intern?.address || "[Address]";
  const start = formatDocDate(intern?.startDate);
  const end = formatDocDate(intern?.endDate);
  const dur = durationMonths(intern?.startDate, intern?.endDate);
  const fn = firstName(intern?.fullName) || "[First Name]";
  const nic = formatNic(intern?.nic) || "[NIC]";
  return /* @__PURE__ */ jsxs("div", { className: "doc-canvas", children: [
    /* @__PURE__ */ jsx(Letterhead, {}),
    /* @__PURE__ */ jsx("p", { className: "text-right", children: formatDocDate(letterDate) }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 mb-0", children: [
      "Mr./Ms. ",
      name
    ] }),
    /* @__PURE__ */ jsx("p", { className: "m-0 whitespace-pre-line", children: addr }),
    /* @__PURE__ */ jsxs("p", { className: "mt-6", children: [
      "Dear ",
      fn,
      ","
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "text-[13pt] font-bold underline mt-4 mb-2", children: "LETTER OF INTERNSHIP" }),
    /* @__PURE__ */ jsxs("p", { className: "text-justify", children: [
      "We are pleased to offer you a period of internship in the above company from",
      " ",
      /* @__PURE__ */ jsx("strong", { children: start }),
      " to ",
      /* @__PURE__ */ jsx("strong", { children: end }),
      ". We expect you to make use of this period to familiarize yourself with the corporate world by participating in our day-to-day operations along with our employees. You should liaise with the undersigned in relation to all matters during this period."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-8", children: "Yours faithfully," }),
    /* @__PURE__ */ jsx("p", { className: "font-semibold m-0", children: "Ceylon Cold Stores PLC" }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
      intern?.metadata?.signatures?.hr && /* @__PURE__ */ jsx(
        "img",
        {
          src: intern.metadata.signatures.hr,
          alt: "HR Signature",
          className: "h-10 object-contain mb-1"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "h-px w-56 bg-neutral-400" }),
      /* @__PURE__ */ jsx("p", { className: "m-0 font-semibold", children: COMPANY.authorizedSignatory.name }),
      /* @__PURE__ */ jsx("p", { className: "m-0 text-[10pt] text-neutral-600", children: COMPANY.authorizedSignatory.title })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "my-8 border-neutral-300" }),
    /* @__PURE__ */ jsx("h3", { className: "font-bold underline mb-2", children: "INTERN ACCEPTANCE" }),
    /* @__PURE__ */ jsxs("p", { className: "text-justify", children: [
      "I am pleased to accept this offer of ",
      /* @__PURE__ */ jsx("strong", { children: dur }),
      " internship commencing",
      " ",
      /* @__PURE__ */ jsx("strong", { children: start }),
      " on the basis given above."
    ] }),
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
        /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-neutral-400" }),
        /* @__PURE__ */ jsx("p", { className: "m-0 text-[10pt]", children: "Signature" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-neutral-400" }),
        /* @__PURE__ */ jsx("p", { className: "m-0 text-[10pt]", children: "Date" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-6 m-0", children: [
      /* @__PURE__ */ jsx("strong", { children: "Name:" }),
      " ",
      name
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "m-0", children: [
      /* @__PURE__ */ jsx("strong", { children: "NIC:" }),
      " ",
      nic
    ] }),
    intern?.phone ? /* @__PURE__ */ jsxs("p", { className: "m-0", children: [
      /* @__PURE__ */ jsx("strong", { children: "Telephone:" }),
      " ",
      intern.phone
    ] }) : null
  ] });
}
function OfferLetterPage() {
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
  const [letterDate, setLetterDate] = useState(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
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
    const filename = `OfferLetter_${intern.fullName.replace(/\s+/g, "_")}.pdf`;
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
            type: "offer",
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
    /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "Offer Letter" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Live preview updates as you change data. Export or print when ready." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 lg:grid-cols-[340px_1fr]", children: [
      /* @__PURE__ */ jsxs(Card, { className: "h-fit", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
          " Letter Configuration"
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Intern" }),
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
            /* @__PURE__ */ jsx(Label, { htmlFor: "ldate", children: "Letter Date" }),
            /* @__PURE__ */ jsx(Input, { id: "ldate", type: "date", value: letterDate, onChange: (e) => setLetterDate(e.target.value) })
          ] }),
          intern && /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-border bg-muted/40 p-3 text-xs space-y-1", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Address:" }),
              " ",
              intern.address
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Dept:" }),
              " ",
              intern.department
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Period:" }),
              " ",
              intern.startDate,
              " → ",
              intern.endDate
            ] })
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
      /* @__PURE__ */ jsx("div", { className: "overflow-auto rounded-lg bg-muted/40 p-4", children: /* @__PURE__ */ jsx("div", { ref: previewRef, children: /* @__PURE__ */ jsx(OfferLetterDocument, { intern, letterDate }) }) })
    ] })
  ] });
}
export {
  OfferLetterPage as component
};
