import { differenceInMonths, parseISO, format } from "date-fns";
function formatDocDate(iso) {
  if (!iso) return "—";
  try {
    return format(parseISO(iso), "dd MMMM yyyy");
  } catch {
    return iso;
  }
}
function durationMonths(startISO, endISO) {
  if (!startISO || !endISO) return "—";
  try {
    const m = differenceInMonths(parseISO(endISO), parseISO(startISO));
    if (m <= 0) return "—";
    return `${m} ${m === 1 ? "month" : "months"}`;
  } catch {
    return "—";
  }
}
function firstName(full) {
  if (!full) return "";
  return full.trim().split(/\s+/)[0] ?? "";
}
function formatNic(nic) {
  if (!nic) return "—";
  const cleaned = nic.replace(/\s|-/g, "");
  if (/^\d{12}$/.test(cleaned))
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 8)} ${cleaned.slice(8)}`;
  return nic;
}
export {
  firstName as a,
  formatNic as b,
  durationMonths as d,
  formatDocDate as f
};
