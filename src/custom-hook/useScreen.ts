
import { useState,useEffect } from "react";

export default function useScreen(){
    const [screenSize,setScreenSize] = useState("");
    useEffect(()=>{
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);

        return ()=> {
            window.removeEventListener('resize',checkScreenSize);
        }

    },[])
    const checkScreenSize = () => {
        if(window.innerWidth > 992)return setScreenSize('Lg');
        if(window.innerWidth < 992 && window.innerWidth > 600)return setScreenSize('Md');
        if(window.innerWidth < 600)return setScreenSize('Sm');
    }
    return screenSize;
}