const ProductCard = ({ product }) => {
    return (
        <div className='justify-self-center'>
            <img className='size-[250px] bg-white object-scale-down p-10 border' src={product.gallery[0]} alt="" />
            <h3 className='text-lg font-semibold mt-5'>{product.title}</h3>
            <p className='text-red-600'>{product.currency}{product.price}</p>
        </div>
    )
}

export default ProductCard