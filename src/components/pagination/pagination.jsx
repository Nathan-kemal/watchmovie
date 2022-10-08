import React from 'react';
import {Pagination} from "@mui/material";
import {red} from "@mui/material/colors";

function PaginationComponent({total_page, change}) {
    return (
        <div style={{
            marginTop: '100px',
            marginBottom: '100px',

            display: 'flex',
            justifyContent: 'center'
        }}>
            <Pagination count={total_page} variant="outlined" shape="rounded" onChange={change}/>
        </div>
    );
}

export default PaginationComponent;