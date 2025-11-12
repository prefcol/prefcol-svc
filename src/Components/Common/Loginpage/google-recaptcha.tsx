// declare global {
//   interface Window {
//     grecaptcha?: {
//       render: (container: HTMLElement, parameters: any) => number;
//       reset: (widgetId: number) => void;
//     };
//   }
// }

// import React, { useEffect, useRef, useState } from "react"
// import { RefreshCcw } from "lucide-react"

// export default function GoogleRecaptcha({
//   onVerify,
//   onExpire,
//   onError,
//   siteKey = "6Lex6uwqAAAAAEURZlNdaXLQgLv1q1C1lSVrBSQg", 
// }) {
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const recaptchaRef = useRef(null)
//   const widgetIdRef = useRef<number | null>(null)

//   useEffect(() => {
//     // Load the reCAPTCHA script
//     const loadRecaptchaScript = () => {
//       setLoading(true)

//       // Check if script already exists
//       if (window.grecaptcha) {
//         renderRecaptcha()
//         return
//       }

//       // Create script element
//       const script = document.createElement("script")
//       script.src = `https://www.google.com/recaptcha/api.js?render=explicit`
//       script.async = true
//       script.defer = true

//       script.onload = renderRecaptcha
//       script.onerror = () => {
//         setError("Failed to load reCAPTCHA")
//         setLoading(false)
//         if (onError) onError()
//       }

//       document.head.appendChild(script)
//     }

//     // Render the reCAPTCHA widget
//     const renderRecaptcha = () => {
//       if (!window.grecaptcha || !window.grecaptcha.render) {
//         setTimeout(renderRecaptcha, 100)
//         return
//       }

//       if (recaptchaRef.current && !widgetIdRef.current) {
//         try {
//           widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
//             sitekey: siteKey,
//             callback: (token) => {
//               onVerify(token)
//             },
//             "expired-callback": () => {
//               if (onExpire) onExpire()
//             },
//             "error-callback": () => {
//               if (onError) onError()
//             },
//           })
//           setLoading(false)
//         } catch (error) {
//           console.error("Error rendering reCAPTCHA:", error)
//           setError("Error rendering reCAPTCHA")
//           setLoading(false)
//         }
//       }
//     }

//     loadRecaptchaScript()

//     // Cleanup function
//     return () => {
//       if (widgetIdRef.current !== null && window.grecaptcha && window.grecaptcha.reset) {
//         window.grecaptcha.reset(widgetIdRef.current)
//       }
//     }
//   }, [siteKey, onVerify, onExpire, onError])

//   const resetCaptcha = () => {
//     if (widgetIdRef.current !== null && window.grecaptcha && window.grecaptcha.reset) {
//       window.grecaptcha.reset(widgetIdRef.current)
//     }
//   }

//   const loadRecaptchaScript = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
//     setLoading(true)
//     setError(null)

//     // Check if script already exists
//     if (window.grecaptcha) {
//       renderRecaptcha()
//       return
//     }

//     // Create script element
//     const script = document.createElement("script")
//     script.src = `https://www.google.com/recaptcha/api.js?render=explicit`
//     script.async = true
//     script.defer = true

//     script.onload = renderRecaptcha
//     script.onerror = () => {
//       setError("Failed to load reCAPTCHA")
//       setLoading(false)
//       if (onError) onError()
//     }

//     document.head.appendChild(script)
//   }
//   return (
//     <div className="w-full flex flex-col items-center justify-center space-y-2">
//       {loading && (
//         <div className="flex items-center justify-center py-3">
//           <RefreshCcw className="animate-spin w-5 h-5 text-teal-700" />
//           <span className="ml-2 text-sm text-teal-700">Loading reCAPTCHA...</span>
//         </div>
//       )}

//       {error && (
//         <div className="text-red-500 text-sm py-2">
//           {error}.{" "}
//           <button onClick={loadRecaptchaScript} className="text-teal-700 underline">
//             Try again
//           </button>
//         </div>
//       )}

//       <div ref={recaptchaRef} className="g-recaptcha" />
//     </div>
//   )
// }

// function renderRecaptcha() {
//   throw new Error("Function not implemented.");
// }

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, parameters: any) => number;
      reset: (widgetId: number) => void;
      execute: (siteKey: string, action: { action: string }) => Promise<string>;
      ready: (callback: () => void) => void;
    };
  }
}

import React, { useEffect, useRef, useState } from "react";
import { RefreshCcw } from "lucide-react";

export default function GoogleRecaptcha({
  onVerify,
  onExpire,
  onError,
  siteKey = "6LfCV5MrAAAAAFMAewmA0gz7YVXslW1Gd92ovv6a",
  type = "v2", // Added type to allow choosing between v2 and v3
}: {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  siteKey: string;
  type: "v2" | "v3"; // Specify reCAPTCHA type (v2 or v3)
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const recaptchaRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);

  // Function to load the reCAPTCHA script
  const loadRecaptchaScript = () => {
    setLoading(true);
    setError(null);

    if (window.grecaptcha) {
      renderRecaptcha();
      return;
    }

    const script = document.createElement("script");
    script.src = type === "v2" 
      ? `https://www.google.com/recaptcha/api.js?render=explicit`
      : `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    
    script.async = true;
    script.defer = true;

    script.onload = renderRecaptcha;
    script.onerror = () => {
      setError("Failed to load reCAPTCHA");
      setLoading(false);
      if (onError) onError();
    };

    document.head.appendChild(script);
  };

  const renderRecaptcha = () => {
    const grecaptcha = window.grecaptcha;
    if (!grecaptcha?.render) {
      setTimeout(renderRecaptcha, 100);
      return;
    }

    // Prevent rendering the reCAPTCHA if it's already rendered
    if (widgetIdRef.current && recaptchaRef.current) {
      console.log("reCAPTCHA has already been rendered");
      return; // Prevent re-rendering
    }

    // Check if reCAPTCHA is already rendered and reset if necessary
    if (widgetIdRef.current && grecaptcha.reset) {
      try {
        grecaptcha.reset(widgetIdRef.current);
      } catch (error) {
        console.error("Error resetting reCAPTCHA:", error);
      }
    }

    // Render reCAPTCHA v2
    if (type === "v2" && recaptchaRef.current && !widgetIdRef.current) {
      try {
        widgetIdRef.current = grecaptcha.render(recaptchaRef.current, {
          sitekey: siteKey,
          callback: (token) => {
            onVerify(token);
          },
          "expired-callback": () => {
            if (onExpire) onExpire();
          },
          "error-callback": () => {
            if (onError) onError();
          },
        });
        setLoading(false);
      } catch (error) {
        console.error("Error rendering reCAPTCHA:", error);
        setError("Error rendering reCAPTCHA");
        setLoading(false);
      }
    }

    // Render reCAPTCHA v3 (Invisible reCAPTCHA)
    if (type === "v3" && grecaptcha) {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(siteKey, { action: "submit" })
          .then((token) => {
            onVerify(token);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error executing reCAPTCHA:", error);
            setError("Error with reCAPTCHA");
            setLoading(false);
            if (onError) onError();
          });
      });
    }
  };

  useEffect(() => {
    loadRecaptchaScript();

    return () => {
      // Cleanup: Reset reCAPTCHA when component unmounts
      const grecaptcha = window.grecaptcha;
      if (widgetIdRef.current !== null && grecaptcha?.reset) {
        grecaptcha.reset(widgetIdRef.current);
      }
    };
  }, [siteKey, onVerify, onExpire, onError, type]);

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-2">
      {loading && (
        <div className="flex items-center justify-center py-3">
          <RefreshCcw className="animate-spin w-5 h-5 text-teal-700" />
          <span className="ml-2 text-sm text-teal-700">Loading reCAPTCHA...</span>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-sm py-2">
          {error}.{" "}
          <button onClick={loadRecaptchaScript} className="text-teal-700 underline">
            Try again
          </button>
        </div>
      )}

      {type === "v2" && <div ref={recaptchaRef} className="g-recaptcha" />}
    </div>
  );
}
