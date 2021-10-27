import { createContext, ReactNode, useState } from 'react'

type NavbarType = {
  isBG: boolean,
  setBG: (arg: boolean) => void
}

export const NavbarContext = createContext<NavbarType>({
  isBG: false,
  setBG: (a) => { }
})

export const NavbarContextProvider = ({ children }: { children: ReactNode }) => {

  const [isBG, setIsBG] = useState(false)

  return (
    <NavbarContext.Provider value={{ isBG, setBG: setIsBG }}>
      {children}
    </NavbarContext.Provider>
  )
}
