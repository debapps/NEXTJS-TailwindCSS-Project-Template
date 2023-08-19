"use client";
import { useContext } from "react";
import { AlertContext } from "../context/alert/AlertProvider";
import AlertComponent from "./AlertComponent";

export default function AlertPopup() {
    // Get the alert object.
    const { alertObj } = useContext(AlertContext);

    return <AlertComponent alert={alertObj} />;
}
