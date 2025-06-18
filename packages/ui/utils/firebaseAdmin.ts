import { cert, getApps, initializeApp } from 'firebase-admin/app'
import {
    type DecodedIdToken,
    type SessionCookieOptions,
    type UserRecord,
    getAuth,
} from 'firebase-admin/auth'
import 'server-only'

const APP_NAME = 'cloudflare-issue-repro'




const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://DATABASE_NAME.firebaseio.com",
    projectId: "PROJECT_ID",
    // The value of `storageBucket` depends on when you provisioned your default bucket (learn more)
    storageBucket: "PROJECT_ID.firebasestorage.app",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    measurementId: "G-MEASUREMENT_ID",
};



const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
    ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
    : null

export const firebaseApp =
    getApps().find((it) => it.name === APP_NAME) ||
    initializeApp(
        firebaseConfig,
        APP_NAME
    )

export const auth = getAuth(firebaseApp)

export const verifyIdToken = async (
    token: string,
    checkRevoked?: boolean
): Promise<DecodedIdToken> => {
    return await auth.verifyIdToken(token, checkRevoked)
}

export async function isUserAuthenticated(
    session: string | undefined = undefined
): Promise<boolean> {
    if (!session) return false

    try {
        const isRevoked = !(await auth.verifySessionCookie(session, true))
        return !isRevoked
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function verifySessionCookie(
    session: string,
    checkRevoked?: boolean
) {
    return await auth.verifySessionCookie(session, checkRevoked)
}

export async function createSessionCookie(
    idToken: string,
    sessionCookieOptions: SessionCookieOptions
) {
    return auth.createSessionCookie(idToken, sessionCookieOptions)
}

export async function revokeAllSessions(session: string) {
    const decodedIdToken = await auth.verifySessionCookie(session)

    return await auth.revokeRefreshTokens(decodedIdToken.uid)
}