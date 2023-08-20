"use client";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
}

// This is a Alert component. The props is the alert object that has following properties:
// severity -> info, success, warning, error.
// message -> Alert Message.

export default function AlertComponent({ alert }) {
    const open = Boolean(alert);

    return (
        open && (
            <Snackbar
                className="z-20"
                open={open}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                TransitionComponent={SlideTransition}>
                <Alert elevation={6} variant="filled" severity={alert.severity}>
                    <strong>{alert.message}</strong>
                </Alert>
            </Snackbar>
        )
    );
}
