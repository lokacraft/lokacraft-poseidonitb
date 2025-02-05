"use client"
import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
interface Props {
  name: string;
  price: number;
  custom: boolean;
  pages: number;
  dynamic: boolean;
  uiux: boolean;
  revision: number;
  domain: boolean;
  ssl: boolean;
  bandwith: number;
  storage: number;
  socialMedia: boolean;
}

function Card({name, price, custom, pages, dynamic, uiux, revision, domain, ssl, bandwith, storage}:Props) {
  const formattedAmount = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(price);
  return (
<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{name}</h5>
<div className="flex items-baseline text-gray-700 dark:text-white">
{custom===true ? (
<span className="text-4xl font-extrabold tracking-tight">CALL US</span>
) : (
  <>
{/* <span className="text-3xl font-semibold">Rp.</span> */}
<span className="text-4xl font-extrabold tracking-tight">{formattedAmount}</span>
  </>
)}
</div>
<ul role="list" className="space-y-5 my-7">
<li className="flex items-center">
<FaRegCircleCheck className="h-5 w-5 text-blue-500" />
<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{pages<=8?(<>{pages} Pages</>):(<>Custom Pages</>)}</span>
</li>
<li className="flex">
<FaRegCircleCheck className="h-5 w-5 text-blue-500" />
<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{bandwith<=20?(<>{bandwith} Bandwith</>):(<>Up To Unlimited Bandwith</>)}</span>
</li>
<li className="flex">
<FaRegCircleCheck className="h-5 w-5 text-blue-500" />
<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{uiux===true?(<>Free UI/UX</>):(<>Custom UI/UX</>)}</span>
</li>
<li className="flex decoration-gray-500">
<FaRegCircleCheck className="h-5 w-5 text-blue-500" />
<span className="text-base font-normal leading-tight text-gray-500 ms-3">{dynamic===true?(<>Dynamic Website</>):(<></>)}</span>
</li>
<li className="flex decoration-gray-500">
<FaRegCircleCheck className="h-5 w-5 text-blue-500" />
<span className="text-base font-normal leading-tight text-gray-500 ms-3">{revision<3?(<>{revision} Revision</>):<>Custom Number of Revision</>}</span>
</li>
<li className="flex decoration-gray-500">
<FaRegCircleCheck className="h-5 w-5 text-blue-500" />
<span className="text-base font-normal leading-tight text-gray-500 ms-3">{domain===true?(<>Free Domain</>):(<>Free Domain</>)}</span>
</li>
<li className="flex decoration-gray-500">
<FaRegCircleCheck className="h-5 w-5 text-blue-500" />
<span className="text-base font-normal leading-tight text-gray-500 ms-3">{ssl===true?(<>Free SSL</>):(<>Free SSL</>)}</span>
</li>
<li className="flex decoration-gray-500">
<FaRegCircleCheck className="h-5 w-5 text-blue-500" />
<span className="text-base font-normal leading-tight text-gray-500 ms-3">{storage<=5?(<>{storage} GB Storage</>):(<>Custom Storage</>)}</span>
</li>
</ul>
<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
  WhatsApp
</button>
</div>

  )
}

export default Card