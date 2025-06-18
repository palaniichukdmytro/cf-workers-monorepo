import { auth } from '@repo/ui/utils/firebaseAdmin'


export default async function AuthPage() {
    return (
        <div>
            <h1>Auth Page</h1>
            <p>This page uses the firebaseAdmin utility.</p>
            <p>Firebase Auth initialized: {auth ? 'Yes' : 'No'}</p>
        </div>
    )
}