import { useEffect, useState } from "react";

interface CreditCardProps {
  cardNumber: string;
}

export function CreditCard({ cardNumber }: CreditCardProps) {
  const [brand, setBrand] = useState("");
  cardNumber = cardNumber.replace(/ /g, "")

  let sumDigits = 0, sumDoubleDigits = 0;

  for (let i = cardNumber.length - 1; i >= 0; i -= 2) {
    sumDigits += Number(cardNumber.charAt(i))
  }

  for (let i = cardNumber.length - 2; i >= 0; i -= 2) {
    sumDoubleDigits += ((Number(cardNumber.charAt(i)) * 2) % 10) + Math.floor((Number(cardNumber.charAt(i)) * 2) / 10)
  }

  const totalSum = sumDigits + sumDoubleDigits

  const twoFirstDigits = Number(cardNumber.substring(0, 2))

  useEffect(() => {
    if (totalSum % 10 === 0) {
      if (cardNumber.startsWith("4") && (cardNumber.length === 13 || cardNumber.length === 16)) {
        setBrand("VISA")
      }
      
      if ((cardNumber.startsWith("34") || cardNumber.startsWith("37")) && cardNumber.length === 15) {
        setBrand("AMEX")
      }
      
      if ((twoFirstDigits > 50 && twoFirstDigits < 56) && cardNumber.length === 16) {
        setBrand("MASTERCARD")
      }
    } else {
      setBrand("")
    }

    if (cardNumber === "") {
      setBrand("")
    }
  }, [totalSum, twoFirstDigits, cardNumber])

  const cardNumberFormatted = cardNumber.replace(/(\d{4})/g, "$1 ");

  return (
    <div className="w-full h-full flex flex-col sm:items-center gap-6">
      <div className={`flex items-end w-full h-full min-h-[230px] max-h-[250px] max-w-sm rounded-xl p-6 bg-cover bg-no-repeat bg-bottom
        ${brand === "VISA" ? 'bg-blue-card' : brand === "MASTERCARD" || brand === "AMEX" ? 'bg-gray-card' : 'bg-invalid-card'}
      `}>
        <div className="flex w-full h-full items-center justify-between">
          <div className="flex flex-col items-start justify-between h-full">
            <img src="/subtract.svg" alt="Approach icon" />
            <img src="/chip.svg" alt="Chip icon" />
            <span className="text-slate-50 text-lg font-semibold tracking-widest">
              {cardNumberFormatted}
            </span>
          </div>
          <div className="self-end">
            {
              brand === "VISA" ? (
                <img className="w-14" src="/visa.svg" alt="Visa" />
              ) : brand === "AMEX" ? (
                <img className="w-14" src="/amex.svg" alt="American Express" />
              ) : brand === "MASTERCARD" ? (
                <img className="w-14" src="/mastercard.svg" alt="Mastercard" />
              ) : (
                null
              )
            }
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-around sm:w-full gap-2 text-sm sm:text-base sm:text-center">
        <p>
          <span className="font-bold">Status:</span> <br/> { brand !== "" ? "Valid" : "Invalid" }
        </p>
        <p>
          <span className="font-bold">Card Number:</span> <br/> { !!cardNumber ? cardNumberFormatted : "No number" }
        </p>
        <p>
          <span className="font-bold">Brand:</span> <br/> { !!brand ? brand : "No brand" }
        </p>
      </div>
    </div>
  )
}