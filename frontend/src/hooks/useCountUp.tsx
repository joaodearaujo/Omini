import { CountUp } from "countup.js";
import type { CountUpOptions } from "countup.js";
 
import { useRef, useEffect } from "react";

const useCountUp = (endValue: number, options?: CountUpOptions) => {

    const countRef = useRef<HTMLElement>(null)        
    const instanceRef = useRef<CountUp | 'null'>(null)   

    const config = {
        startVal: 0,
        duration: 1,
        useEasing: true,
        useGrouping: true,
        smartEasingThreshold: 999,
        smartEasingAmount: 333,
        separator: '.',
        decimal: ',',
        ...options
      }
    
    useEffect(() => {
            if(countRef.current) {
                instanceRef.current = new CountUp(countRef.current, endValue, config);
                
                if (!instanceRef.current.error) {
                instanceRef.current.start()
            }  
        }
    }, []) ;
    
    useEffect(() => {
        if (instanceRef.current)  {
            instanceRef.current.update(endValue)
        }
    }, [endValue])

    return {countRef}
}

export default useCountUp