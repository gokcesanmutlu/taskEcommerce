import { Link, useSearchParams } from "react-router-dom";

const Header = ({ }) => {
    const [params, setParams] = useSearchParams();

    const handleSubmit = (e) => {
      e.preventDefault();
      params.set('q', e.target[0].value);
      setParams(params);
    };

    return (
        <>
            <div className="px-5 py-3 flex justify-between bg-gray-100 text-orange-600 font-bold  font-mono ">
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <h1>SAN-COMMERCE</h1>
                </div>

                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input 
                        type="text"
                        className="border-orange-500 border-2 rounded-md"
                    />
                    <button type="submit" className="border-orange-500 border-2 rounded-md px-2">
                        Search
                    </button>
                </form>

                <div className="flex gap-7 ">
                    <Link to={"/"} className="btn btn-primary">
                        PRODUCTS
                    </Link>
                    <Link to={"/about"} className="btn btn-primary">
                        ABOUT
                    </Link>
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
    );
};

export default Header;
