import { initializeApp, getApps, type FirebaseOptions } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'
import { getStorage, type FirebaseStorage } from 'firebase/storage'

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || '',
}

const hasFirebaseConfig = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
)

let firebaseApp = null as ReturnType<typeof initializeApp> | null
let authInstance: Auth | null = null
let firestoreInstance: Firestore | null = null
let storageInstance: FirebaseStorage | null = null

if (hasFirebaseConfig) {
  firebaseApp = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig)
  authInstance = getAuth(firebaseApp)
  firestoreInstance = getFirestore(firebaseApp)
  storageInstance = getStorage(firebaseApp)
}

export const auth = authInstance
export const db = firestoreInstance
export const storage = storageInstance
export const firebaseAvailable = hasFirebaseConfig && Boolean(auth) && Boolean(db) && Boolean(storage)
