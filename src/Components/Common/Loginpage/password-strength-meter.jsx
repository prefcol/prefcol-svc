// import React from "react"
// import { useState, useEffect } from "react"

// interface PasswordStrengthMeterProps {
//   strength: number
// }

// const PasswordStrengthMeter = ({ strength }: PasswordStrengthMeterProps) => {
//   const [label, setLabel] = useState("Weak")
//   const [color, setColor] = useState("bg-red-500")

//   useEffect(() => {
//     if (strength === 0) {
//       setLabel("None")
//       setColor("bg-gray-300")
//     } else if (strength < 40) {
//       setLabel("Weak")
//       setColor("bg-red-500")
//     } else if (strength < 70) {
//       setLabel("Medium")
//       setColor("bg-yellow-500")
//     } else {
//       setLabel("Strong")
//       setColor("bg-green-500")
//     }
//   }, [strength])

//   return (
//     <div className="w-full space-y-1">
//       <div className="flex justify-between items-center">
//         <span className="text-xs text-gray-500">Password Strength</span>
//         <span
//           className={`text-xs font-medium ${
//             color === "bg-red-500"
//               ? "text-red-500"
//               : color === "bg-yellow-500"
//                 ? "text-yellow-600"
//                 : color === "bg-green-500"
//                   ? "text-green-600"
//                   : "text-gray-500"
//           }`}
//         >
//           {label}
//         </span>
//       </div>
//       <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//         <div className={`h-full ${color} transition-all duration-300 ease-in-out`} style={{ width: `${strength}%` }} />
//       </div>
//     </div>
//   )
// }

// export default PasswordStrengthMeter

"use client"

// export function PasswordStrengthMeter({ strength }) {
//   const getStrengthLabel = (strength) => {
//     if (strength < 20) return { label: "Very Weak", color: "bg-red-500" }
//     if (strength < 40) return { label: "Weak", color: "bg-orange-500" }
//     if (strength < 60) return { label: "Medium", color: "bg-yellow-500" }
//     if (strength < 80) return { label: "Strong", color: "bg-lime-500" }
//     return { label: "Very Strong", color: "bg-green-500" }
//   }

//   const { label, color } = getStrengthLabel(strength)

//   return (
//     <div className="space-y-1">
//       <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
//         <div className={`h-full ${color} transition-all duration-300 ease-in-out`} style={{ width: `${strength}%` }} />
//       </div>
//       <div className="flex justify-between items-center text-xs">
//         <span className="text-muted-foreground">Password strength:</span>
//         <span className="font-medium">{label}</span>
//       </div>
//     </div>
//   )
// }


export function PasswordStrengthMeter({ strength }) {
    const strengthLevels = [
      { limit: 2, label: "Very Weak", color: "bg-red-500" },
      { limit: 4, label: "Weak", color: "bg-orange-500" },
      { limit: 5, label: "Medium", color: "bg-yellow-500" },
      { limit: 6, label: "Strong", color: "bg-lime-500" },
      { limit: 8, label: "Very Strong", color: "bg-green-500" },
    ]
  
    const { label, color } =
      strengthLevels.find(({ limit }) => strength < limit) || strengthLevels[2]
  
    return (
      <div className="space-y-1">
        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${color} transition-all duration-300`}
            style={{ width: `${strength}%` }}
          />
        </div>
        <div className="flex justify-between text-xs">
          <span>Password strength:</span>
          <span className={`font-medium ${color.replace("bg-", "text-")}`}>
            {label}
          </span>
        </div>
      </div>
    )
  }
  
