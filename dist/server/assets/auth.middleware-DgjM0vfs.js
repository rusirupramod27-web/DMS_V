import { c as createMiddleware, b as getRequestHeaders } from "./server-CE_WGxYq.js";
import { b as getIdToken } from "./use-auth-syaCSZRD.js";
import admin from "firebase-admin";
let initialized = false;
let isMock = false;
const mockDb = /* @__PURE__ */ new Map();
const mockAdmin = {
  auth: () => ({
    verifyIdToken: async (token) => {
      console.warn("Firebase Admin (Mock): Bypassing token verification.");
      return {
        uid: "mock-user-123",
        email: "recruiter@example.com",
        name: "Demo Recruiter",
        role: "recruiter"
      };
    }
  }),
  firestore: () => {
    const getCollection = (colName) => {
      if (!mockDb.has(colName)) {
        mockDb.set(colName, []);
      }
      return {
        get: async () => {
          const docs = mockDb.get(colName) || [];
          return {
            docs: docs.map((d) => ({
              id: d.id,
              data: () => d
            }))
          };
        },
        doc: (id) => {
          const docs = mockDb.get(colName) || [];
          const docData = docs.find((d) => d.id === id) || null;
          return {
            get: async () => ({
              exists: !!docData,
              data: () => docData
            }),
            set: async (data, options) => {
              const list = mockDb.get(colName) || [];
              const idx = list.findIndex((d) => d.id === id);
              const merged = options?.merge ? { ...docData, ...data } : data;
              merged.id = id;
              if (idx > -1) {
                list[idx] = merged;
              } else {
                list.push(merged);
              }
              mockDb.set(colName, list);
              return { writeTime: /* @__PURE__ */ new Date() };
            },
            delete: async () => {
              const list = mockDb.get(colName) || [];
              const nextList = list.filter((d) => d.id !== id);
              mockDb.set(colName, nextList);
              return { writeTime: /* @__PURE__ */ new Date() };
            }
          };
        }
      };
    };
    return {
      collection: getCollection
    };
  },
  storage: () => ({
    bucket: () => ({
      file: (filePath) => {
        return {
          save: async (content, options) => {
            console.log(`Mock Firebase Storage: file saved to ${filePath}`);
            return true;
          },
          getSignedUrl: async (options) => {
            console.log(`Mock Firebase Storage: generating signed URL for ${filePath}`);
            if (filePath.includes("signature")) {
              return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
            }
            return "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
          },
          delete: async () => {
            console.log(`Mock Firebase Storage: file deleted from ${filePath}`);
            return true;
          }
        };
      }
    })
  })
};
function getFirebaseAdmin() {
  if (initialized) {
    return isMock ? mockAdmin : admin;
  }
  const svc = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!svc) {
    {
      throw new Error("FIREBASE_SERVICE_ACCOUNT is required in production");
    }
  }
  try {
    const serviceAccount = JSON.parse(Buffer.from(svc, "base64").toString("utf8"));
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET
    });
    initialized = true;
    isMock = false;
    return admin;
  } catch (err) {
    {
      throw err;
    }
  }
}
async function verifyIdToken(idToken) {
  const admin2 = getFirebaseAdmin();
  try {
    const decoded = await admin2.auth().verifyIdToken(idToken);
    return decoded;
  } catch (err) {
    console.error("Failed to verify ID token", err);
    throw err;
  }
}
function getTokenFromHeader(authorization) {
  if (!authorization) return null;
  const parts = authorization.split(" ");
  if (parts.length !== 2) return null;
  return parts[1];
}
const serverAuthMiddleware = createMiddleware({ type: "function" }).client(async ({ next }) => {
  let token = null;
  if (typeof window !== "undefined") {
    try {
      token = await getIdToken();
    } catch (err) {
      console.error("Client middleware failed to get ID token", err);
    }
  }
  return next({
    headers: {
      ...token ? { Authorization: `Bearer ${token}` } : {}
    }
  });
}).server(async ({ next }) => {
  const headers = getRequestHeaders();
  const authHeader = headers["authorization"];
  const token = getTokenFromHeader(authHeader);
  if (!token) {
    throw new Error("Unauthorized: No authentication token provided");
  }
  try {
    const decodedUser = await verifyIdToken(token);
    return next({
      context: {
        user: decodedUser
      }
    });
  } catch (err) {
    console.error("Server middleware token verification failed", err);
    throw new Error("Unauthorized: Invalid token");
  }
});
export {
  getFirebaseAdmin as g,
  serverAuthMiddleware as s
};
