import SignupForm from "@/components/Signup-form/SignupForm";

interface SignupProps {
  params: Promise<{
    locale: "en" | "fr"; 
  }>;
}

export default async function SignupPage({ params }: SignupProps) {
  const { locale } = await params;

  return (
    <SignupForm locale={locale} />
  );
}
