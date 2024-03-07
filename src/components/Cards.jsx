import React from 'react'
import { Link } from 'react-router-dom'

function Cards({ id, name, slug, type, price, image, cbfn }) {
    const clickHandle = (e) => {
        e.preventDefault()
        cbfn({ id, name, slug, type, price })
    }
    return (
        <div className="relative">
            <div className="group">
                <a href="#" onClick={clickHandle}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img src={image} alt="image" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                </a>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700 hover:underline">
                        <Link to={`/products/${slug}`}>
                            <span aria-hidden="true" />
                            {name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{type}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${price}</p>
            </div>
        </div>
    )
}

export default Cards
