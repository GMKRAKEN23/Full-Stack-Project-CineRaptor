import Image from "next/image";
import Logo from "../../../public/styles/logo.svg";


interface LogoSVGProps {
    width?: number;  
    height?: number; 
}

export default function LogoSVG({ width= 80, height= 80 }: LogoSVGProps){
    return(
        <>
        <Image src={Logo} alt="cineraptor" width={width} height={height}/>
        </>
    )
}