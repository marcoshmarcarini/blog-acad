import { ReactNode } from "react";
import AppBar from "./AppBar";

interface IProps {
  children: ReactNode
}

export default function RootLayout({children}: IProps){
  return (
    <html lang="en">
      <body>
        <AppBar />
        <div>{children}</div>
      </body>
    </html>
  )
}