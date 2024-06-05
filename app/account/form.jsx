'use client'
import { useCallback } from 'react'
import React from 'react'
import { createClient } from "@/utils/supabase/client"

const form = ({user, data}) => {

    console.log(data)
    
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
  
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
  
          <div className="flex flex-col justify-center bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <div className="flex  mb-10 gap-4 items-center">
          <img
              className="h-32 w-32 rounded-md"
              src={data.avatar_url}   alt=""
            />
            <p className="text-md leading-2 text-gray-600">
            A bold, chaotic, and charismatic shark leading the ocean's misfits with fearless determination and style.
                  </p>
          </div>
            <form className="space-y-6" action="#" method="POST">
              <div className="flex gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 Name
                </label>
                <div className="mt-2">
                  <input
                    value={data.full_name}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>  <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Location
                </label>
                <div className="mt-2">
                  <input
                    value ={data.location}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                  value={user}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Occupation
                </label>
                <div className="mt-2">
                  <input
                    value = {data.occupation}
                    id="password"
                    name="password"
                    type="text"
                    autoComplete="current-password"
                    required
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update Info
                </button>
              </div>
            </form>
  
            <div>
            </div>
          </div>
        </div>
      </div>
    )

}
export default form