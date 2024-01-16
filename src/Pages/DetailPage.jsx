import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState([])

  //Get Products Detail
  useEffect(() => {
    axios.get(`products/${id}`)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="product-detail flex gap-20 p-20">
      
        <div className="h-80 w-80">
          <img className="" src={detail.image} alt="product's image" />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="uppercase font-semibold">{detail.title}</h2>
          <p>{detail.category}</p>
          <p className="text-justify">{detail.description}</p>
          <p>{detail.price}</p>
          <div><span>{detail.rating?.count}</span>
            <span>{detail.rating?.rate}</span></div>
          </div>
        </div>
        
      )
}

      export default DetailPage