import { useState } from "react"
import { CreditCard } from "./components/CreditCard";
import { Info } from "phosphor-react";
import { Popover, PopoverTrigger } from "./components/Popover";
import { PopoverContent } from "./components/Popover/PopoverContent";

export function App() {
  const [number, setNumber] = useState("")

  function formatInput(number: string) {
    number = number.replace(/\D/g,"")
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(-\d{4})\d+?$/, '$1'); // Allow only digits
    setNumber(number)

    return number
  }
  
  return (
    <main className="flex flex-col h-screen items-center sm:justify-center">
      <div className="mb-8 flex items-center mt-6 sm:mt-0">
        <h1 className="mr-4 text-xl sm:text-2xl md:text-3xl font-bold">
          Credit Card - Luhn's Algorithm
        </h1>
        <Popover>
          <PopoverTrigger asChild>
            <Info size={20} className="hover:opacity-60 transition-opacity" />
          </PopoverTrigger>
          <PopoverContent side="left" sideOffset={5}>
            Type a credit card number to verify if is valid using the Luhn's Algorithm. <br />
            <a 
              href="https://gocardless.com/guides/posts/what-is-luhn-algorithm/" 
              className="text-blue-300 hover:text-blue-400 transition-colors inline-block mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about Luhn's Algorithm.
            </a>
          </PopoverContent>
        </Popover>
      </div>
      <div className="p-6 rounded flex flex-col w-full sm:w-3/4 max-w-[750px] items-center bg-zinc-800 border border-zinc-700">
        <div className="w-full">
          <CreditCard cardNumber={number} />
          <div>
            <p></p>
          </div>
        </div>
        <form className="w-full mt-6 relative">
          <label
            htmlFor="number"
            className="bg-zinc-800 text-smblock absolute -top-2 left-4 px-1 leading-tight"
          >
            Card Number
          </label>
          <input
            className="w-full h-12 rounded px-4 border border-zinc-500 bg-transparent outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            placeholder="0000 0000 0000 0000"
            onChange={(e) => formatInput(e.target.value)}
            value={number}
            maxLength={19}
            id="number"
            autoFocus
            inputMode="numeric"
          />
        </form>
      </div>
    </main>
  )
}
