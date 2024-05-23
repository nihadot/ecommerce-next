'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Orders from '../Tables/Orders';
import Refund from '../Tables/Refund';
import TrackOrder from '../Tables/TrackOrder';
import Address from '../Tables/Address';
import PaymentMethod from '../Tables/PaymentMethod';

type Props = {}

const Profile = (props: Props) => {

    const [selectedTab,useSelectedTab] = useState(1);
    return (
        <div className="grid h-[70vh]  my-10 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className=" rounded-lg bg-gray-200 p-3">
                <SideSections useSelectedTab={useSelectedTab} />
            </div>
            <div className="p-3 rounded-lg bg-gray-200 lg:col-span-2">
                { selectedTab === 1 &&  <ProfileComponent /> }
                { selectedTab === 2 &&  <Orders /> }
                { selectedTab === 3 &&  <Refund /> }
                { selectedTab === 3 &&  <Refund /> }
                { selectedTab === 5 &&  <TrackOrder /> }
                { selectedTab === 6 &&  <PaymentMethod /> }
                { selectedTab === 7 &&  <Address /> }
            </div>
        </div>
    )
}

export default Profile






export const SideSections = ({useSelectedTab}) => {
    
    return (
        <ul className="space-y-1">
            <li>
                <Link onClick={()=>{
                    useSelectedTab(1)
                }} href="#me" className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                    Profile
                </Link>
            </li>

            <li>
                <Link onClick={()=>{
                    useSelectedTab(2)
                }} 
                    href="#orders"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    Orders
                </Link>
            </li>

            <li>
                <Link
                onClick={()=>{
                    useSelectedTab(3)
                }}
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    Refund
                </Link>
            </li>

            <li>
                <Link
                onClick={()=>{
                    useSelectedTab(4)
                }}
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    Inbox
                </Link>
            </li>
            <li>
                <Link
                onClick={()=>{
                    useSelectedTab(5)
                }}
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    Track order
                </Link>
            </li>


            <li>
                <Link
                onClick={()=>{
                    useSelectedTab(6)
                }}
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    Payment method
                </Link>
            </li>

            <li>
                <Link
                onClick={()=>{
                    useSelectedTab(7)
                }}
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    Address
                </Link>
            </li>


            <li>
                <Link
                onClick={()=>{
                    useSelectedTab(8)
                }}
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    Logout
                </Link>
            </li>


        </ul>
    )
}



const ProfileComponent = () => {
    return (
        <div className="grid grid-cols-2 gap-3">
            <div>
                <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Email </label>

                <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Email </label>

                <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>

            <div>
                <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Email </label>

                <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Email </label>

                <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700"> Email </label>

                <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>

        </div>
    )
}



