import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Diva Clinic AI Skin Analysis",description:"Personalized skin analysis and appointment booking for Diva Clinic.",openGraph:{title:"Diva Clinic AI Skin Analysis",description:"Understand your skin and book personalized care.",type:"website"},icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
