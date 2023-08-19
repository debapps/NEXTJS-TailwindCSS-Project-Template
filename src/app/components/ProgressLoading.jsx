"use client";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProgressLoading({ active }) {
    return (
        active && (
            <div className="text-center">
                <CircularProgress color="success" />
            </div>
        )
    );
}
