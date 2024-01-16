import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`}>
      <div className="card">
        <div className="index flex flex-col gap-2 items-center text-white text-center font-mono">
          <img className="w-3/4 h-[130px] rounded-md " src={product.image} alt="product's image" />
          <h4> {product.title.length > 15 ? (
            <span>{product.title.slice(0, 30)}..</span>
          ) : (
            <span>{product.title}</span>
          )}
          </h4>

          <h4 className='text-gray-400'>{product.category}</h4>
          <div className="flex gap-2">
            <span>{product.price}$</span>
            <button className='bg-teal-100 rounded-sm text-gray-700 font-serif font-semibold text-xs p-1 '>ORDER</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card