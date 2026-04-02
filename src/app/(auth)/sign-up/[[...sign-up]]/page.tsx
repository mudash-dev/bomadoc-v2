import { SignUp } from "@clerk/nextjs";

export default function SignUpPage(){
    return( 
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-4">
            <SignUp
                appearance={{
                 elements: {
                        formButtonPrimary: "bg-primary hover:bg-primary/90 text-sm",
                        card: "shadow-xl border border-border"
                    }
                }}
            />
        </div>
    );
}