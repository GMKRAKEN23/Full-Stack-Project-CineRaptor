import Image from "next/image";
import Logo from "@/styles/logo.svg";

export default function LogoSVG(){
    return(
        <>
        <Image src={Logo} alt="cineraptor" width={80} height={80}/>
        </>
    )
}