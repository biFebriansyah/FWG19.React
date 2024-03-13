import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function HeaderOLD({ total, show, setShow }) {
    return (
        <header className="relative bg-white">
            <nav aria-label="Top" className="mx-auto">
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        <button type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        <div className="ml-4 flex lg:ml-0">
                            <Link to="/">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            </Link>
                        </div>
                        <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                            <div className="flex h-full space-x-8">
                                <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                    Company
                                </a>
                                <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                    Stores
                                </a>
                            </div>
                        </div>
                        <div className="ml-auto flex items-center">
                            <div>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className="text-gray-500 sm:text-sm">$</span>
                                    </div>
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="0"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center">
                                        <label htmlFor="currency" className="sr-only">
                                            Currency
                                        </label>
                                        <select
                                            id="currency"
                                            name="currency"
                                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-2 m-1 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        >
                                            <option>Name</option>
                                            <option>Price</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-4 flow-root lg:ml-6">
                                <a href="#" onClick={() => setShow(!show)} className="group -m-2 flex items-center p-2">
                                    <svg
                                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                        />
                                    </svg>
                                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">${total}</span>
                                    <span className="sr-only">items in cart, view bag</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

function Header({ total, show, setShow }) {
    const [pShow, pSetSwho] = useState(false)
    const isAuth = false

    return (
        <header className="relative bg-white">
            <nav aria-label="Top" className="mx-auto">
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        <button type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        <div className="ml-4 flex lg:ml-0">
                            <Link to="/">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            </Link>
                        </div>
                        <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                            <div className="flex h-full space-x-8">
                                <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                    Company
                                </a>
                                <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                    Stores
                                </a>
                            </div>
                        </div>
                        <div className="ml-auto flex items-center">
                            <div>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className="text-gray-500 sm:text-sm">$</span>
                                    </div>
                                    <input
                                        type="text"
                                        name="price"
                                        id="price"
                                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="0"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center">
                                        <label htmlFor="currency" className="sr-only">
                                            Currency
                                        </label>
                                        <select
                                            id="currency"
                                            name="currency"
                                            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-2 m-1 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        >
                                            <option>Name</option>
                                            <option>Price</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-4 flow-root lg:ml-6">
                                <a href="#" onClick={() => setShow(!show)} className="group -m-2 flex items-center p-2">
                                    <svg
                                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                        />
                                    </svg>
                                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">${total}</span>
                                    <span className="sr-only">items in cart, view bag</span>
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <div className="relative">
                                    <div>
                                        <button
                                            type="button"
                                            className="relative flex max-w-xs items-center rounded-full border-solid border-gray-600 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600"
                                            id="user-menu-button"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            onClick={() => {
                                                pSetSwho(!pShow)
                                            }}
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full" src="https://www.svgrepo.com/show/507445/user-square.svg" alt="" />
                                        </button>
                                    </div>
                                    <div
                                        className={`${pShow ? 'absolute' : 'hidden'} left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1`}
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu-button"
                                        tabIndex={-1}
                                    >
                                        {isAuth ? (
                                            <>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">
                                                    Your Profile
                                                </a>
                                                <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">
                                                    Admin
                                                </Link>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">
                                                    Sign out
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                                <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">
                                                    Sign Up
                                                </Link>
                                                <Link to="/signin" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">
                                                    Sign In
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
