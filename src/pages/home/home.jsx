import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Carts from '../../components/Carts'
import Cards from '../../components/Cards'

function Home() {
    const [data, setData] = useState(null)
    const [carts, setCarts] = useState([])
    const [total, setTotal] = useState(0)
    const [show, setShow] = useState(false)

    const addCarts = (v) => {
        const items = [...carts]
        const index = items.findIndex((i) => i.id === v.id)
        if (index !== -1) {
            items[index].qty += 1
        } else {
            items.push({ ...v, qty: 1 })
        }

        setCarts(items)
    }

    const delCarts = (v) => {
        const items = [...carts]
        const index = items.findIndex((i) => i.id === v.id)
        if (index !== -1) {
            if (items[index].qty > 1) {
                items[index].qty -= 1
            } else {
                items.splice(index, 1)
            }
        }

        setCarts(items)
    }

    useEffect(() => {
        let count = 0
        const items = [...carts]
        items.forEach((v) => {
            count = count + v.price * v.qty
        })
        setTotal(count)
    }, [carts])

    useEffect(() => {
        axios
            .get('http://localhost:8000/product')
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Header total={total} show={show} setShow={setShow} />
            <main className="bg-white">
                <Carts carts={carts} show={show} delete={delCarts} />
                <section className="product-list my-10">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {data &&
                            data.map((v) => {
                                return <Cards key={v.product_id} id={v.product_id} name={v.product_name} slug={v.slug} type={v.product_type} price={v.price} image={v.image} cbfn={addCarts} />
                            })}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
