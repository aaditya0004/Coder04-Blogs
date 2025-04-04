import { Link } from "react-router-dom"

const BlogCard = () => {
    return (
        <Link to={`/blog/$(12374)`}
            className="realtive flex flex-col md:flex-row py-2 gap-3 justify-start items-center md:px-5 rounded-3xl shadow-md bg-white w-full h-fit"
        >
            <img src="/thumbnail2.jpeg" alt="thumbnail" className="md:w-[20vw] rounded-2xl md:rounded-3xl" />
            <div className="px-3 md:px-0">
                <h3 className="text-xl font-bold">
                    Mern Stack is the best
                </h3>
                <div className="flex gap-2 py-2 flex-wrap">
                    <span  className="px-4 py-2 text-gray-600 text-xs md:text-sm rounded-full font-semibold shadow-md capitalize">
                        Coding
                    </span>
                    <span  className="px-4 py-2 text-gray-600 text-xs md:text-sm rounded-full font-semibold shadow-md capitalize">
                        Programming
                    </span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-start items-center gap-3">
                    <img src="/logo.jpeg" alt="logo" className="rounded-full w-[30px] h-[30px]" />
                    <div>
                        <h4 className="font-bold text-sm">Coder04</h4>
                        <p className="font-bold text-sm">24 Mar 2025</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard
