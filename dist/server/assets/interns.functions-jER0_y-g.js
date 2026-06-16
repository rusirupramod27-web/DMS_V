import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-CE_WGxYq.js";
import { z } from "zod";
import { g as getFirebaseAdmin, s as serverAuthMiddleware } from "./auth.middleware-DgjM0vfs.js";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "react";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "./use-auth-syaCSZRD.js";
import "firebase/auth";
import "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase-admin";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
function getDb() {
  const admin = getFirebaseAdmin();
  return admin.firestore();
}
function getStorageBucket() {
  const admin = getFirebaseAdmin();
  return admin.storage().bucket();
}
async function logAuditEvent(userId, action, targetType, targetId, metadata = {}) {
  try {
    const db = getDb();
    const ref = db.collection("audit_logs").doc();
    await ref.set({
      id: ref.id,
      userId: userId || "system",
      action,
      targetType,
      targetId,
      metadata,
      createdAt: Date.now()
    });
  } catch (err) {
    console.error("Failed to write audit log:", err);
  }
}
function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
const listInternsServer_createServerFn_handler = createServerRpc({
  id: "86aebdef6fec70030253d5a71d28e374eb5efe8171580910aa9d372f87abeca2",
  name: "listInternsServer",
  filename: "src/lib/api/interns.functions.ts"
}, (opts) => listInternsServer.__executeServer(opts));
const listInternsServer = createServerFn({
  method: "GET"
}).middleware([serverAuthMiddleware]).handler(listInternsServer_createServerFn_handler, async () => {
  const db = getDb();
  const snap = await db.collection("interns").get();
  const rows = snap.docs.map((d) => d.data());
  return rows.sort((a, b) => b.updatedAt - a.updatedAt);
});
const getInternServer_createServerFn_handler = createServerRpc({
  id: "2c3f701636cc5c0e5f0af56d0bcb033a90d9ad7704c8100da970847385c6fa42",
  name: "getInternServer",
  filename: "src/lib/api/interns.functions.ts"
}, (opts) => getInternServer.__executeServer(opts));
const getInternServer = createServerFn({
  method: "GET"
}).inputValidator(z.string()).middleware([serverAuthMiddleware]).handler(getInternServer_createServerFn_handler, async ({
  input: id
}) => {
  const db = getDb();
  const doc = await db.collection("interns").doc(id).get();
  if (!doc.exists) return null;
  return doc.data();
});
const saveInternServer_createServerFn_handler = createServerRpc({
  id: "69cc56bb1052d34741d1fbf07ac264615268845c218e973ed934216189a74d32",
  name: "saveInternServer",
  filename: "src/lib/api/interns.functions.ts"
}, (opts) => saveInternServer.__executeServer(opts));
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
})).middleware([serverAuthMiddleware]).handler(saveInternServer_createServerFn_handler, async ({
  input,
  context
}) => {
  const db = getDb();
  const now = Date.now();
  const userUid = context.user.uid;
  let recordId = input.existingId || newId();
  let existingRecord = null;
  if (input.existingId) {
    const doc = await db.collection("interns").doc(input.existingId).get();
    if (doc.exists) {
      existingRecord = doc.data();
    }
  }
  const record = {
    ...existingRecord || {},
    ...input.input,
    id: recordId,
    createdAt: existingRecord?.createdAt ?? now,
    updatedAt: now
  };
  await db.collection("interns").doc(recordId).set(record, {
    merge: true
  });
  await logAuditEvent(userUid, input.existingId ? "update_intern" : "create_intern", "intern", recordId, {
    fullName: record.fullName,
    nic: record.nic
  });
  return record;
});
const deleteInternServer_createServerFn_handler = createServerRpc({
  id: "ab74db7b544a8534c9db8d1d0475cd2d39b020db9ca00d55d4b685cb06d17cf0",
  name: "deleteInternServer",
  filename: "src/lib/api/interns.functions.ts"
}, (opts) => deleteInternServer.__executeServer(opts));
const deleteInternServer = createServerFn({
  method: "POST"
}).inputValidator(z.string()).middleware([serverAuthMiddleware]).handler(deleteInternServer_createServerFn_handler, async ({
  input: id,
  context
}) => {
  const db = getDb();
  const userUid = context.user.uid;
  const doc = await db.collection("interns").doc(id).get();
  if (doc.exists) {
    const data = doc.data();
    const bucket = getStorageBucket();
    try {
      if (data.metadata?.signatures) {
        for (const type of Object.keys(data.metadata.signatures)) {
          const url = data.metadata.signatures[type];
          if (url && url.includes("signatures/")) {
            const fileName = url.substring(url.indexOf("signatures/"));
            const decodedFileName = decodeURIComponent(fileName.split("?")[0]);
            await bucket.file(decodedFileName).delete().catch(() => {
            });
          }
        }
      }
      if (data.metadata?.documents) {
        for (const docObj of data.metadata.documents) {
          const url = docObj.storageUrl;
          if (url && url.includes("documents/")) {
            const fileName = url.substring(url.indexOf("documents/"));
            const decodedFileName = decodeURIComponent(fileName.split("?")[0]);
            await bucket.file(decodedFileName).delete().catch(() => {
            });
          }
        }
      }
    } catch (err) {
      console.error("Failed to delete associated storage files:", err);
    }
    await db.collection("interns").doc(id).delete();
    await logAuditEvent(userUid, "delete_intern", "intern", id, {
      fullName: data.fullName,
      nic: data.nic
    });
  }
});
const uploadSignatureServer_createServerFn_handler = createServerRpc({
  id: "9fd13ec7c42469920d2a622e4ff7b4d5fc944a684f38350f8b57acbb2b11502b",
  name: "uploadSignatureServer",
  filename: "src/lib/api/interns.functions.ts"
}, (opts) => uploadSignatureServer.__executeServer(opts));
const uploadSignatureServer = createServerFn({
  method: "POST"
}).inputValidator(z.object({
  internId: z.string(),
  type: z.enum(["intern", "witness", "hr"]),
  signatureBase64: z.string()
  // PNG base64 data string (with or without header)
})).middleware([serverAuthMiddleware]).handler(uploadSignatureServer_createServerFn_handler, async ({
  input,
  context
}) => {
  const db = getDb();
  const bucket = getStorageBucket();
  const userUid = context.user.uid;
  const base64Data = input.signatureBase64.replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");
  const filePath = `signatures/${input.internId}/${input.type}-${Date.now()}.png`;
  const file = bucket.file(filePath);
  await file.save(buffer, {
    contentType: "image/png",
    metadata: {
      metadata: {
        uploadedBy: userUid
      }
    }
  });
  const [signedUrl] = await file.getSignedUrl({
    action: "read",
    expires: Date.now() + 100 * 365 * 24 * 60 * 60 * 1e3
    // ~100 years
  });
  const docRef = db.collection("interns").doc(input.internId);
  const doc = await docRef.get();
  if (!doc.exists) {
    throw new Error("Intern record not found");
  }
  const currentData = doc.data();
  const currentMetadata = currentData.metadata || {};
  const currentSignatures = currentMetadata.signatures || {};
  const updatedMetadata = {
    ...currentMetadata,
    signatures: {
      ...currentSignatures,
      [input.type]: signedUrl
    }
  };
  await docRef.update({
    metadata: updatedMetadata,
    updatedAt: Date.now()
  });
  await logAuditEvent(userUid, "upload_signature", "intern", input.internId, {
    type: input.type,
    url: signedUrl
  });
  return {
    url: signedUrl
  };
});
const uploadDocumentServer_createServerFn_handler = createServerRpc({
  id: "810aa416a3c874745b73eef78eb3715598e484b4f7af337cd488f102bd25c836",
  name: "uploadDocumentServer",
  filename: "src/lib/api/interns.functions.ts"
}, (opts) => uploadDocumentServer.__executeServer(opts));
const uploadDocumentServer = createServerFn({
  method: "POST"
}).inputValidator(z.object({
  internId: z.string(),
  type: z.enum(["offer", "nda"]),
  documentBase64: z.string(),
  // PDF base64 data (with or without header)
  fileName: z.string()
})).middleware([serverAuthMiddleware]).handler(uploadDocumentServer_createServerFn_handler, async ({
  input,
  context
}) => {
  const db = getDb();
  const bucket = getStorageBucket();
  const userUid = context.user.uid;
  const base64Data = input.documentBase64.replace(/^data:application\/pdf;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");
  const filePath = `documents/${input.internId}/${input.type}-${Date.now()}.pdf`;
  const file = bucket.file(filePath);
  await file.save(buffer, {
    contentType: "application/pdf",
    metadata: {
      metadata: {
        uploadedBy: userUid
      }
    }
  });
  const [signedUrl] = await file.getSignedUrl({
    action: "read",
    expires: Date.now() + 100 * 365 * 24 * 60 * 60 * 1e3
    // ~100 years
  });
  const docRef = db.collection("interns").doc(input.internId);
  const doc = await docRef.get();
  if (!doc.exists) {
    throw new Error("Intern record not found");
  }
  const currentData = doc.data();
  const currentMetadata = currentData.metadata || {};
  const currentDocs = currentMetadata.documents || [];
  const newDocObj = {
    id: newId(),
    type: input.type,
    fileName: input.fileName,
    storageUrl: signedUrl,
    generatedAt: Date.now()
  };
  const updatedMetadata = {
    ...currentMetadata,
    documents: [...currentDocs, newDocObj]
  };
  await docRef.update({
    metadata: updatedMetadata,
    updatedAt: Date.now()
  });
  await logAuditEvent(userUid, "generate_document", "intern", input.internId, {
    type: input.type,
    fileName: input.fileName,
    url: signedUrl
  });
  return newDocObj;
});
export {
  deleteInternServer_createServerFn_handler,
  getInternServer_createServerFn_handler,
  listInternsServer_createServerFn_handler,
  saveInternServer_createServerFn_handler,
  uploadDocumentServer_createServerFn_handler,
  uploadSignatureServer_createServerFn_handler
};
