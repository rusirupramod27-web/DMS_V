import { f as firebaseEnabled } from "./use-auth-syaCSZRD.js";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, a as createServerFn } from "./server-CE_WGxYq.js";
import { z } from "zod";
import { s as serverAuthMiddleware } from "./auth.middleware-DgjM0vfs.js";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const listInternsServer = createServerFn({
  method: "GET"
}).middleware([serverAuthMiddleware]).handler(createSsrRpc("86aebdef6fec70030253d5a71d28e374eb5efe8171580910aa9d372f87abeca2"));
const getInternServer = createServerFn({
  method: "GET"
}).inputValidator(z.string()).middleware([serverAuthMiddleware]).handler(createSsrRpc("2c3f701636cc5c0e5f0af56d0bcb033a90d9ad7704c8100da970847385c6fa42"));
const saveInternServer = createServerFn({
  method: "POST"
}).inputValidator(z.object({
  input: z.object({
    fullName: z.string().min(1),
    nameWithInitials: z.string().optional(),
    nic: z.string().min(1),
    address: z.string().min(1),
    department: z.string().min(1),
    startDate: z.string().min(1),
    endDate: z.string().min(1),
    supervisor: z.string().min(1),
    phone: z.string().optional(),
    duration: z.string().optional()
  }),
  existingId: z.string().optional()
})).middleware([serverAuthMiddleware]).handler(createSsrRpc("69cc56bb1052d34741d1fbf07ac264615268845c218e973ed934216189a74d32"));
const deleteInternServer = createServerFn({
  method: "POST"
}).inputValidator(z.string()).middleware([serverAuthMiddleware]).handler(createSsrRpc("ab74db7b544a8534c9db8d1d0475cd2d39b020db9ca00d55d4b685cb06d17cf0"));
const uploadSignatureServer = createServerFn({
  method: "POST"
}).inputValidator(z.object({
  internId: z.string(),
  type: z.enum(["intern", "witness", "hr"]),
  signatureBase64: z.string()
  // PNG base64 data string (with or without header)
})).middleware([serverAuthMiddleware]).handler(createSsrRpc("9fd13ec7c42469920d2a622e4ff7b4d5fc944a684f38350f8b57acbb2b11502b"));
const uploadDocumentServer = createServerFn({
  method: "POST"
}).inputValidator(z.object({
  internId: z.string(),
  type: z.enum(["offer", "nda"]),
  documentBase64: z.string(),
  // PDF base64 data (with or without header)
  fileName: z.string()
})).middleware([serverAuthMiddleware]).handler(createSsrRpc("810aa416a3c874745b73eef78eb3715598e484b4f7af337cd488f102bd25c836"));
const interns_functions = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  deleteInternServer,
  getInternServer,
  listInternsServer,
  saveInternServer,
  uploadDocumentServer,
  uploadSignatureServer
}, Symbol.toStringTag, { value: "Module" }));
const KEY = "docuflow.interns.v1";
function readLocal() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function writeLocal(rows) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(rows));
}
function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
async function listInterns() {
  if (firebaseEnabled) {
    try {
      const rows = await listInternsServer();
      writeLocal(rows);
      return rows;
    } catch (err) {
      console.warn("Server listInterns failed, falling back to localStorage", err);
    }
  }
  return readLocal().sort((a, b) => b.updatedAt - a.updatedAt);
}
async function saveIntern(input, existingId) {
  if (firebaseEnabled) {
    try {
      const saved = await saveInternServer({
        data: {
          input: {
            fullName: input.fullName,
            nameWithInitials: input.nameWithInitials ?? "",
            nic: input.nic,
            address: input.address,
            department: input.department,
            startDate: input.startDate,
            endDate: input.endDate,
            supervisor: input.supervisor,
            phone: input.phone ?? "",
            duration: input.duration ?? ""
          },
          existingId
        }
      });
      const all2 = readLocal();
      const next2 = existingId ? all2.map((r) => r.id === saved.id ? saved : r) : [saved, ...all2];
      writeLocal(next2);
      return saved;
    } catch (err) {
      console.warn("Server saveIntern failed, falling back to localStorage", err);
    }
  }
  const now = Date.now();
  const all = readLocal();
  const existing = existingId ? all.find((r) => r.id === existingId) : void 0;
  const record = {
    ...input,
    id: existing?.id ?? newId(),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now
  };
  const next = existing ? all.map((r) => r.id === record.id ? record : r) : [record, ...all];
  writeLocal(next);
  return record;
}
async function deleteIntern(id) {
  const next = readLocal().filter((r) => r.id !== id);
  writeLocal(next);
  if (firebaseEnabled) {
    try {
      await deleteInternServer({ data: id });
    } catch (err) {
      console.warn("Server deleteIntern failed", err);
    }
  }
}
async function getIntern(id) {
  if (firebaseEnabled) {
    try {
      return await getInternServer({ data: id });
    } catch (err) {
      console.warn("Server getIntern failed, falling back to localStorage", err);
    }
  }
  const rows = await listInterns();
  return rows.find((r) => r.id === id) ?? null;
}
export {
  deleteIntern as d,
  getIntern as g,
  interns_functions as i,
  listInterns as l,
  saveIntern as s
};
