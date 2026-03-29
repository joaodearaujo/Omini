import CardsSection from "./components/CardsSection"
import Header from "../../features/Header/Header"
import CardsStatus from "./components/CardsStatus"
import FloatingCard from "../../components/ui/FloatingCard/FloatingCard"
import { useState, useEffect } from "react";

  const title = 'Credit Cards'
  const subtitle = 'Manage your credit cards!'

const MyCards = () => {

  
        const [isVisible, setIsVisible] = useState<boolean>(false)
    
        useEffect(() => {
    
            setIsVisible(false);
    
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 50)
    
            return () => clearTimeout(timer)
        }, []);
  

  return (
      <div className={`w-full h-full max-h-full flex flex-col gap-8 items-center overflow-y-auto transition-all`}>
          <Header title={title} subtitle={subtitle}/>
              <div className={`w-full max-h-full h-min-0 flex flex-col gap-7 items-start justify-between overflow-y-auto duration-800 ${isVisible ? 'opacity-100 translate-x-0 ' : 'opacity-0 -translate-x-1'}`}>
                  <FloatingCard>
                      <CardsSection />
                  </FloatingCard>  
                      <CardsStatus />
              </div>
      </div>
    )
  }

export default MyCards
