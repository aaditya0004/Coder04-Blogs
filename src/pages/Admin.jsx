import { useContext } from "react";
import BlogContext from "../context/BlogContext";
import AdminNavbar from "../components/AdminNavbar";


const Admin = () => {

  const { isAuth, setIsAuth } = useContext(BlogContext);

  return (
    <div>
      {
        !isAuth ? (
          <div className="h-screen flex justify-center items-center">
            {/* Admin Login */}
            <form action="" className="grid grid-cols-1 gap-3 bg-white w-[80vw] md:w-[20vw] p-3 rounded-lg">
              <div className="flex flex-col">
                <label
                  htmlFor="username"
                  className="text-lg font-semibold text-gray-600"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  required
                  className="rounded-2xl px-3 py-1 text-lg outline-none bg-gray-100"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-lg font-semibold text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="rounded-2xl px-3 py-1 text-lg outline-none bg-gray-100"
                />
              </div>
              <button
                type="submit"
                className="bg-purple-500 rounded-2xl px-3 py-1 text-gray-100 font-semibold hover:bg-purple-600 transition-all duration-300 ease-in-out"
              >
                Login
              </button>
            </form>

          </div>)
          :
          (
            <div>
              <AdminNavbar />
            </div>
          )
      }
      

    </div>
  )
}

export default Admin
