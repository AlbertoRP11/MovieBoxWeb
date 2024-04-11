import Link from "next/link";
import { Film, Clapperboard, Heart, CircleUserRound } from 'lucide-react';


export default function NavBar() {

    return (
        <nav className="flex w-full justify-between items-center px-4 py-4 bg-customYellow">
            <div >
                <Link href="/">
                    <div className="flex gap-1">
                        <Film size={40} style={{ color: 'black' }}/>
                        <h1 className="text-4xl font-bold text-black">MovieBox</h1>
                    </div>
                </Link>
            </div>
            <div className="flex gap-10">
                <Link href="/titulos"><Clapperboard size={40} style={{ color: 'black' }}/></Link>
                <Link href="/favoritos"><Heart size={40} style={{ color: 'black' }}/></Link>
                <Link href="/perfil"><CircleUserRound size={40} style={{ color: 'black' }}/></Link>
            </div>
        </nav>
    )
}