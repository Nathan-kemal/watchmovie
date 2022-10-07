import React, {useEffect, useState} from 'react';
import {movieDb} from "../../api/movieDb.js";
import Container from "../../layout/Container.jsx";
import CustomSwipper from "../swiper/customSwipper.jsx";

function Similar({category, id}) {
    const [similar, setSimilar] = useState();
    useEffect(() => {
        async function getData (){
            const response = await movieDb.similar(category,id);
            if(response !== undefined){
                setSimilar(response.results);
                console.log('nathan', response);
            }
        }

        getData();
    }, [])
    return (
        <Container>
            <h1 style={{color: '#ffff'}}>Similar</h1>

            {similar &&  <CustomSwipper datas={similar} numberofPreview={7}/>}
        </Container>
    );
}

export default Similar;