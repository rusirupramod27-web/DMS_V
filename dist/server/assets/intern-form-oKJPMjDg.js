import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { c as cn, I as Input, B as Button } from "./router-Jeiu9RrA.js";
import { L as Label } from "./label-BdjZ6MRF.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-g61gAWWs.js";
import { s as saveIntern } from "./interns-BLzuUTAj.js";
import { d as durationMonths } from "./format-tn4fPyMX.js";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const empty = {
  fullName: "",
  nameWithInitials: "",
  nic: "",
  address: "",
  department: "",
  startDate: "",
  endDate: "",
  supervisor: "",
  phone: "",
  duration: ""
};
const nicValid = (v) => /^\d{12}$/.test(v) || /^\d{9}[vVxX]$/.test(v);
const phoneValid = (v) => /^\d{10,15}$/.test(v.replace(/\D/g, ""));
function InternForm({
  initial,
  existing
}) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ ...empty, ...initial });
  const [editingId, setEditingId] = useState(void 0);
  const [submitting, setSubmitting] = useState(false);
  const [openSuggest, setOpenSuggest] = useState(false);
  useEffect(() => {
    setForm({ ...empty, ...initial });
  }, [initial]);
  const suggestions = useMemo(() => {
    const q = form.fullName.trim().toLowerCase();
    if (!existing || q.length < 2) return [];
    return existing.filter((r) => r.fullName.toLowerCase().includes(q)).slice(0, 5);
  }, [form.fullName, existing]);
  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const pickSuggestion = (r) => {
    setForm({
      fullName: r.fullName,
      nameWithInitials: r.nameWithInitials,
      nic: r.nic,
      address: r.address,
      department: r.department,
      startDate: r.startDate,
      endDate: r.endDate,
      duration: r.duration ?? "",
      supervisor: r.supervisor,
      phone: r.phone
    });
    setEditingId(r.id);
    setOpenSuggest(false);
    toast.info(`Loaded existing record: ${r.fullName}`);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName.trim()) return toast.error("Full Name is required");
    if (!form.address.trim()) return toast.error("Home Address is required");
    if (!form.department.trim()) return toast.error("Department is required");
    if (!nicValid(form.nic)) return toast.error("NIC must be 12 digits or 9 digits + V/X");
    if (!form.startDate || !form.endDate) return toast.error("Start and End dates are required");
    if (form.endDate <= form.startDate) return toast.error("End Date must be after Start Date");
    if (form.phone && !phoneValid(form.phone)) return toast.error("Telephone must be 10–15 digits");
    setSubmitting(true);
    try {
      const saved = await saveIntern(form, editingId);
      toast.success(editingId ? "Record updated" : "Record created");
      navigate({ to: "/records/$id", params: { id: saved.id } });
    } catch (err) {
      console.error(err);
      toast.error("Failed to save record");
    } finally {
      setSubmitting(false);
    }
  };
  const dur = durationMonths(form.startDate, form.endDate);
  return /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", children: "Candidate Information" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 relative", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "fullName", children: "Full Name *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "fullName",
              value: form.fullName,
              onChange: (e) => {
                update("fullName", e.target.value);
                setOpenSuggest(true);
              },
              onFocus: () => setOpenSuggest(true),
              placeholder: "e.g. Tashen Chamikara Maddumabandara",
              autoComplete: "off"
            }
          ),
          openSuggest && suggestions.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute z-20 mt-1 w-full rounded-md border bg-popover p-1 shadow-lg", children: suggestions.map((s) => /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => pickSuggestion(s),
              className: "w-full rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent",
              children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: s.fullName }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
                  "NIC: ",
                  s.nic
                ] })
              ]
            },
            s.id
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "nameInit", children: "Name with Initials" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "nameInit",
              value: form.nameWithInitials,
              onChange: (e) => update("nameWithInitials", e.target.value),
              placeholder: "T.C. Maddumabandara"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "nic", children: "NIC *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "nic",
              value: form.nic,
              onChange: (e) => update("nic", e.target.value),
              placeholder: "200128801806"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "addr", children: "Home Address *" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "addr",
              value: form.address,
              onChange: (e) => update("address", e.target.value),
              rows: 2,
              placeholder: "No. 140B, Suwasewa Mawatha, …"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Telephone" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "phone",
              value: form.phone,
              onChange: (e) => update("phone", e.target.value),
              placeholder: "0716841036"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "dept", children: "Department *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "dept",
              value: form.department,
              onChange: (e) => update("department", e.target.value),
              placeholder: "Human Resource Department"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", children: "Internship Details" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "grid gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "start", children: "Start Date *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "start",
              type: "date",
              value: form.startDate,
              onChange: (e) => update("startDate", e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "end", children: "End Date *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "end",
              type: "date",
              value: form.endDate,
              onChange: (e) => update("endDate", e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "duration", children: "Duration" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "duration",
              value: form.duration || dur,
              onChange: (e) => update("duration", e.target.value),
              placeholder: String(dur)
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Clear to use auto-calculated duration." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "sup", children: "Supervisor Name & Designation *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "sup",
              value: form.supervisor,
              onChange: (e) => update("supervisor", e.target.value),
              placeholder: "Wasantha Mudalige — Head of Human Resource Operation"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2", children: [
      /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => navigate({ to: "/records" }), children: "Cancel" }),
      /* @__PURE__ */ jsx(Button, { type: "submit", disabled: submitting, children: submitting ? "Saving…" : editingId ? "Update record" : "Save record" })
    ] })
  ] });
}
export {
  InternForm as I
};
