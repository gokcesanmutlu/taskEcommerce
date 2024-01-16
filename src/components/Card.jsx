const Card = ({ product }) => {
  return (
    <div class="card">
      <div className="w-[200px] index flex flex-col items-center text-white font-mono">
      <img className="w-3/4 rounded-md " src={product.image} alt="" />
      <h2>gokce</h2>
      </div>
    </div>
  )
}

export default Card