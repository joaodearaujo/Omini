import { useEffect, useState } from "react";

const useFadeIn = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {

        setIsVisible(false);

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50)

        return () => clearTimeout(timer) 
    }, []);

    return { isVisible }
}

  export default useFadeIn;