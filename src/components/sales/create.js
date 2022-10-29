import React from "react";
import { Paper, Toolbar } from "@mui/material";

export default function Create() {
    return (
        <Paper elevation={0} style={{ margin: '20px' }}>
            <Toolbar >
                <h2>Create New Sales</h2>
            </Toolbar>
        </Paper>);
}