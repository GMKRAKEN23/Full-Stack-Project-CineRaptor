import SignupForm from "@/components/Signup-form/SignupForm";

interface SignupProps {
    params: {
        id: string;
        locale: "en" | "fr"; 
    };
    searchParams: Record<string, string | undefined>; 
  }
  
export default function SignupPage({params} : SignupProps){
    return(
        <SignupForm locale={params.locale}/>
    )
}