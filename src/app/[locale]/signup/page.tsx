import SignupForm from "@/components/Signup-form/SignupForm";

interface SignupProps {
    params: Promise<{
        id: string;
        locale: "en" | "fr"; 
    }>;
    searchParams: Record<string, string | undefined>; 
}

export default async function SignupPage({ params }: SignupProps) {
    const { locale } = await params;

    return(
        <SignupForm locale={locale} />
    );
}
