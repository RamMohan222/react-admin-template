import React from "react";
import { Paper, Toolbar } from "@mui/material";

export default function Users() {
    return (
        <Paper elevation={0} style={{ margin: '20px' }}>
            <Toolbar style={{ padding: '10px' }}>
                <h1>Users</h1>
            </Toolbar>
        </Paper>);
}