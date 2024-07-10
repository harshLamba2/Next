import Link from "next/link";


export default function Navbar(){
   return  (
<nav className="bg-slate-900 px-4 py-2 flex justify-between items-center">
    <Link href={'/'} className="text-white">Home</Link>
    <Link href={'/addTopic'} className="bg-slate-100 text-slate-900 p-1">Add</Link>
</nav>
    )
}