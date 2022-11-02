import { useState } from "react"
import { CreditCard } from "./components/CreditCard";
import { Info } from "phosphor-react";
import { Tooltip, TooltipTrigger } from "./components/Tooltip";
import { TooltipContent } from "./components/Tooltip/TooltipContent";

export function App() {
  const [number, setNumber] = useState("")

  function formatInput(number: string) {
    number = number.replace(/\D/g,"")
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(-\d{4})\d+?$/, '$1'); // Allow only digits
    // number = number.replace(/(\d{4})/g, "$1 ")
    setNumber(number)

    return number
  }
  
  return (
    <main className="flex flex-col h-screen items-center justify-center bg-neutral-900">
      <div className="mb-8 flex items-center">
        <h1 className="mr-4 text-3xl font-bold text-zinc-100">
          Credit Card - Luhn Algorithm
        </h1>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info size={32} className="text-zinc-100 hover:opacity-60 transition-opacity" />
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Type a credit card number to verify if is valid using the Luhn Algorithm. <br />
            <a 
              href="https://gocardless.com/guides/posts/what-is-luhn-algorithm/" 
              className="text-blue-300 hover:text-blue-400 transition-colors inline-block mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about Luhn Algorithm.
            </a>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="p-6 rounded flex flex-col h-1/2 w-1/2 items-center bg-zinc-800 border border-zinc-700">
        <div className="w-full h-full">
          <CreditCard cardNumber={number} />
          <div>
            <p></p>
          </div>
        </div>
        <form className="w-full mt-6 relative">
          <label
            htmlFor="number"
            className="bg-zinc-800 text-sm text-zinc-100 block absolute -top-2 left-4 px-1 leading-tight"
          >
            Card Number
          </label>
          <input
            className="w-full h-12 rounded px-4 border border-zinc-500 bg-transparent text-zinc-100 outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            placeholder="0000 0000 0000 0000"
            onChange={(e) => formatInput(e.target.value)}
            value={number}
            maxLength={19}
            id="number"
            autoFocus
          />
        </form>
      </div>
    </main>
  )
}
