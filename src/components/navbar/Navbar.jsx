
//navbar.jsx
const Navbar = ({cart}) => {
  return (
   <div className="max-lg:collapse bg-base-200  shadow-sm w-full rounded-md">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button className="btn btn-ghost text-xl font-semibold ml-[200px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</button>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><button>Products</button></li>
        
        <li><button>Features</button></li>
        <li><button>Pricing</button></li>
        <li><button>Testimonials</button></li>
        <li><button>FAQ</button></li>
      </ul>
    </div>

    <div className="navbar-end">

      <div className="relative inline-block">
      <svg xmlns="http://www.w3.org/2000/svg" 
      height="24px" viewBox="0 -960 960 960" 
      width="24px" 
      fill="#1f1f1f">
      <path d="M223.5-103.5Q200-127
       200-160t23.5-56.5Q247-240 280-240t56.5
        23.5Q360-193 360-160t-23.5 56.5Q313-80 
        280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240
       680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 
       200h280l110-200H246Zm-38-80h590q23
       0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 
        0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-5 h-5 flex items-center justify-center px-1">{cart.length}</span>
</div>
      <button className="ml-[12px]"> Login</button>
      <button className="btn  ml-[12px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started</button>
    </div>
    
    
  </div>

 
</div>
  )
}

export default Navbar
