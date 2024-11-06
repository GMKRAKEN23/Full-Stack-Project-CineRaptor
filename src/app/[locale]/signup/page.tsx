import SignupForm from "@/components/Signup-form/SignupForm";

interface SignupProps {
  params: {
    locale: "en" | "fr";  L
  };
}

export default function SignupPage({ params }: SignupProps) {
  const { locale } = params;

  return (
    <SignupForm locale={locale} />
  );
}
