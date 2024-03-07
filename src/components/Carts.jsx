import React from 'react'

function Carts(props) {
    return (
        <section className={`${props.show ? 'block' : 'hidden'} cart-table my-10`}>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.carts.map((v) => {
                            return (
                                <tr key={v.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {v.name}
                                    </th>
                                    <td className="px-6 py-4">{v.type}</td>
                                    <td className="px-6 py-4">{v.qty}</td>
                                    <td className="px-6 py-4">${v.price}</td>
                                    <td className="px-6 py-4 text-right">
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                props.delete(v)
                                            }}
                                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Carts
