// "use client"

// import React from "react"
// import { motion } from "framer-motion"
// import { Check, X } from "lucide-react"

// const StatusAnimation = React.memo(({ type, message }) => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-50"
//   >
//     <motion.div
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       exit={{ scale: 0 }}
//       className={`bg-white rounded-full p-6 shadow-lg mb-4 ${type === "success" ? "text-emerald-500" : "text-red-500"}`}
//     >
//       {type === "success" ? <Check size={48} strokeWidth={3} /> : <X size={48} strokeWidth={3} />}
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="bg-white rounded-lg p-4 shadow-lg"
//     >
//       <p className="text-lg font-semibold text-center">{type === "success" ? "Success" : "Error"}</p>
//       <p className="text-gray-600 text-center">{message}</p>
//     </motion.div>
//   </motion.div>
// ))

// export default StatusAnimation




// "use client";

// import React, { useState } from "react";
// import { Check, X } from "lucide-react";

// const StatusMessage = ({ type, message }) => {
//   const [visible, setVisible] = useState(true);

//   if (!visible) return null; 

//   return (
//     <div
//       className={`fixed top-5 right-5 flex items-center gap-3 p-4 rounded-lg shadow-xl border-l-4 ${
//         type === "success"
//           ? "bg-green-100 border-green-500 text-green-700"
//           : "bg-red-100 border-red-500 text-red-700"
//       }`}
//     >
//       {type === "success" ? <Check size={24} /> : <X size={24} />}
//       <p className="text-sm">{message}</p>
//       <button onClick={() => setVisible(false)} className="ml-3 text-gray-500 hover:text-black">
//         ✖
//       </button>
//     </div>
//   );
// };

// export default StatusMessage;

// // "use client"
// // import { motion } from "framer-motion"
// // import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

// // const StatusAnimation = ({ type, message }) => {
// //   const icons = {
// //     success: CheckCircle,
// //     error: XCircle,
// //     warning: AlertCircle,
// //   }

// //   const colors = {
// //     success: "bg-green-500",
// //     error: "bg-red-500",
// //     warning: "bg-yellow-500",
// //   }

// //   const Icon = icons[type]

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: -50 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       exit={{ opacity: 0, y: -50 }}
// //       className={`fixed top-4 right-4 ${colors[type]} text-white p-4 rounded-lg shadow-lg flex items-center space-x-3 z-50`}
// //     >
// //       <Icon size={24} />
// //       <span className="font-semibold">{message}</span>
// //     </motion.div>
// //   )
// // }

// // export default StatusAnimation

// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { CheckCircle, AlertCircle, XCircle, Info } from "lucide-react"

// export default function StatusAnimation({ type, message }) {
//   const getIcon = () => {
//     switch (type) {
//       case "success":
//         return <CheckCircle className="w-6 h-6 text-green-500" />
//       case "error":
//         return <XCircle className="w-6 h-6 text-red-500" />
//       case "warning":
//         return <AlertCircle className="w-6 h-6 text-amber-500" />
//       case "info":
//         return <Info className="w-6 h-6 text-blue-500" />
//       default:
//         return <Info className="w-6 h-6 text-blue-500" />
//     }
//   }

//   const getBackgroundColor = () => {
//     switch (type) {
//       case "success":
//         return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
//       case "error":
//         return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
//       case "warning":
//         return "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800"
//       case "info":
//         return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
//       default:
//         return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
//     }
//   }

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
//       >
//         <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border ${getBackgroundColor()}`}>
//           {getIcon()}
//           <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{message}</p>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }




"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, AlertCircle, Info } from "lucide-react"

export default function StatusAnimation({ type, message }) {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="text-white" size={24} />
      case "error":
        return <AlertCircle className="text-white" size={24} />
      case "info":
        return <Info className="text-white" size={24} />
      default:
        return <Info className="text-white" size={24} />
    }
  }

  const getColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500"
      case "error":
        return "bg-red-500"
      case "info":
        return "bg-blue-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className={`${getColor()} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3`}>
          {getIcon()}
          <span className="font-medium">{message}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

