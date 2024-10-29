import { NavLink as Link } from "react-router-dom"

export function Header() {
  return (
    <div className="Header flex justify-between items-center bg-slate-700 p-4 text-white text-xl">
        <div className="Logo"> <span className=" text-orange-500">L</span>ogo </div>
        <nav>
          <Link className=' mr-2' to='/'> <span className=" text-orange-500">H</span>ome </Link>
          <Link className=' mr-2' to='/about'> <span className=" text-orange-500">A</span>bout </Link>
          <Link className=' mr-2' to='/contact'> <span className=" text-orange-500">C</span>ontact </Link>
        </nav>
        <div className="search"><i className="fas fa-search text-orange-500 cursor-pointer"></i></div>
    </div>
  )
}
