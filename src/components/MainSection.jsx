import {Link} from "react-router-dom"

const MainSection = () => {
  return (
    <section className="py-20 bg-purple-500 min-h-[80vh] flex flex-col-reverse md:flex-row justify-between gap-5 items-center px-10">
        {/* Information Div */}
        <div className="flex flex-col gap-3">
            <h2 className="text-4x md:text-7xl font-bold text-white">I love vs code and do read this</h2>
            <p className="text-lg md:text-3xl text-white font-sans lg:w-[50vw]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, facere quo architecto cum est nam unde recusandae rem sed hic.
            </p>
            <hr />
            <div className="flex gap-2">
                <span  className="px-3 py-2 text-xs md:text-sm bg-white rounded-full font-semibold
         capitalize">Coding</span>
                <span  className="px-3 py-2 text-xs md:text-sm bg-white rounded-full font-semibold
         capitalize">Programming</span>
            </div>
            <Link to={`/blog/12314`} className="px-8 py-2 text-xs md:text-sm bg-white rounded-full font-semibold w-fit mt-3 decoration-white text-black">
                Read Now
            </Link>
        </div>
 
        {/* Image Div */}
        <div>
            <img src="/thumbnail.png" alt="thumbnail" className="md:w-[40vw] rounded-3xl mt-14 md:mt-0 shadow-lg" />
        </div>
    </section>
  )
}

export default MainSection
