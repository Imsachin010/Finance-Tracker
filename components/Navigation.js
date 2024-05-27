import { IoMdStats } from "react-icons/io";


function Nav(){
    return (
        <header className="container max-w-2xl px-6 py-6 mx-auto">

    <div className="flex items-center justify-between">
    {/* User Info - user section */}
    <div className="flex items-center gap-2">
      {/* image of usep */}
      <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
        <img className="w-full h-full object-cover"
        src="https://thispersondoesnotexist.com/image" alt="Profile picture" 
        />
      </div>

      {/* username */}
      <small>Hii, Sachin!</small>
    </div>
    {/* right side of Navigaton */}
     <nav className="flex items-center gap-4">
        <div>
          <IoMdStats className="text-3xl"/> 
        </div>
        <div>
          <button className="btn btn-danger">Sign Out</button>
        </div>
     </nav>
   </div>
  </header>
    )
}
export default Nav;