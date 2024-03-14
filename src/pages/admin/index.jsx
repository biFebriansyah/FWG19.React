import React, { useState } from 'react'
import Header from '../../components/Header'
import useApi from '../../utils/useApi'

function Admin() {
    const api = useApi()
    const [data, setData] = useState({ img: 'https://www.svgrepo.com/show/522152/image-picture.svg' })

    const changeHanlder = (e) => {
        const datas = { ...data }
        datas[e.target.name] = e.target.value
        setData(datas)
    }

    const fileHandler = (event) => {
        const file = event.target.files[0]
        if (file) {
            const tmpdata = { ...data }
            tmpdata['image'] = file

            let reader = new FileReader()
            reader.onload = () => {
                tmpdata['img'] = reader.result
                setData(tmpdata)
            }
            reader.readAsDataURL(file)
        }
    }

    const submitHandler = () => {
        const formData = new FormData()
        for (const key in data) {
            formData.append(`${key}`, data[key])
        }

        api({
            method: 'POST',
            url: '/product',
            headers: { 'Content-Type': 'multipart/form-data' },
            data: formData
        })
            .then((_) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <Header />
            <div className="py-10">
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Product Management</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">only admin can open this page</p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        onChange={changeHanlder}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product Price
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="price"
                                        id="last-name"
                                        autoComplete="family-name"
                                        onChange={changeHanlder}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product Type
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="type"
                                        autoComplete="country-name"
                                        onChange={changeHanlder}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Accessories</option>
                                        <option>Food</option>
                                        <option>Movie</option>
                                        <option>Basic Tee</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product image
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <img className="mx-auto h-60 w-40 text-gray-300" src={data.img} alt="img" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={fileHandler} />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        onClick={submitHandler}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </>
    )
}

export default Admin
