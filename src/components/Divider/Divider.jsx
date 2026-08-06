

const Divider = () => {
  return (
    <div>


       <section class="bg-gradient-to-r from from-[#4F39F6] to-[#7C3AED] py-8 px-4 text-white ">

        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-0 ">

{/*  Item-1 */}
<div className="flex-1 text-center ">

    <h3 className="text-4xl md:text-5xl font-bold tracking-tight"> 50k+</h3>
    <p className="text-sm md:text-base text-purple-100 font-normal mt-2 opacity-90"> Active Users</p>

</div>
{/* Divider-1 */}
<div className="hidden md:block w-[1px] h-12 bg-white/30"></div>

{/* Stat Item 2 */}
<div className="flex-1 text-center ">

  
   <h3 className="text-4xl md:text-5xl font-bold tracking-tight">200+</h3>
   <p className="text-sm md:text-base text-purple-100 font-normal mt-2 opacity-90"> Partners</p>
</div>
{/* Divider-2 */}
<div className="hidden md:block w-[1px] h-12 bg-white/30"></div>

 {/* Stat Item 3 */}
 <div className="flex-1 text-center">
    <h3 className="text-4xl md:text-5xl font-bold tracking-bold">4.9</h3>
<p className="text-sm md:text-base text-purple-100 font-normal mt-2 opacity-90">Rating </p>
    </div>

 
</div>

       </section>
      
    </div>
  )
}

export default Divider
