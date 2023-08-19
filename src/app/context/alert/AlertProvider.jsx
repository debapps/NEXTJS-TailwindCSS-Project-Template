"use client";
import { createContext, useState } from "react";

export const AlertContext = createContext();

export default function AlertProvider({ children }) {
    // Alert hooks.
    const [alertObj, setAlertObj] = useState(null);

    // This function sets the severity and alert message.
    // severity -> info, success, warning, error.
    // message -> Alert Message.
    function showAlert(severity, message) {
        setAlertObj({
            severity,
            message,
        });

        // Alert disapears after 1.5s.
        setTimeout(() => {
            setAlertObj(null);
        }, 2000);
    }

    return (
        <AlertContext.Provider value={{ alertObj, showAlert }}>
            {children}
        </AlertContext.Provider>
    );
}
