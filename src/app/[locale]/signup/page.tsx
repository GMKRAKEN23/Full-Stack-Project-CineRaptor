import SignupForm from "@/components/Signup-form/SignupForm";

interface SignupProps {
    params: {
        id: string;
        locale: "en" | "fr";
    };
}

export default function SignupPage({ params }: SignupProps) {
    const { locale } = params;

    return (
        <SignupForm locale={locale} />
    );
}
