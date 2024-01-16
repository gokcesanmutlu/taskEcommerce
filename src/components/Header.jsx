import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const Header = ({ products, setproducts }) => {
    const [text, setText] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    return (
        <>
            <div className="px-5 py-3 flex justify-between bg-gray-100 text-orange-600 font-bold  font-mono ">
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <h1>SAN-COMMERCE</h1>
                </div>

                <div>
                    <input type="text" onChange={(e) => setText(e.target.value)} className="border-orange-500 border-2 rounded-md" />
                    {/* {console.log(text)} */}
                </div>

                <div className="flex gap-7 ">
                    <Link to={"/"} className="btn btn-primary">PRODUCTS</Link>
                    <Link to={"/about"} className="btn btn-primary">ABOUT</Link>
                    <Link className="btn btn-primary">CAMPAIGNS!</Link>
                    <Link className="btn btn-primary">CHART</Link>
                </div>

            </div>
            <div className="flex">
                <div className=" h-2 w-[35vw] bg-orange-500"></div>
                <div className=" h-2 w-[25vw] bg-green-500"></div>
                <div className=" h-2 w-[20vw] bg-blue-400"></div>
                <div className=" h-2 w-[15vw] bg-purple-500"></div>
                <div className=" h-2 w-[15vw] bg-[#3b2388]"></div>
            </div>
        </>
    )
}

export default Header