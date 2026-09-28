import './globals.css';
import { ReactNode } from 'react';
export const metadata={title:'Ajaia Docs',description:'Lightweight collaborative document editor'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
