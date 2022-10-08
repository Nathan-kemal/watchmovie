import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom'
import router from "./router/router.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {BrowserRouter as Router} from "react-router-dom";
import AnimatedRoute from "./router/router.jsx";

const queryclient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryclient}>

        <Router>
          <AnimatedRoute/>
        </Router>

        </QueryClientProvider>

    </React.StrictMode>,
);
