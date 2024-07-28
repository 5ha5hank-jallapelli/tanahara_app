import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="container mx-auto h-[100vh] flex items-center justify-center">
        <SignIn fallbackRedirectUrl="/dashboard" />
    </main>
  );
}