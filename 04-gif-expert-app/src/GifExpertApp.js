import React, { useState } from 'react';
import  AddCategory  from './components/AddCategory';
import  { GifGrid }  from './GifGrid';

const GifExpertApp = () => {


    const [categorias, setCategorias] = useState(['One Punch']);

    //    const handelAdd = () => {
    //       setCategorias( [...categorias, 'Inuyasha' ] );
    //   }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr />

            <ul>
                {
                    categorias.map((categoria) => {
                        return <GifGrid key={categoria} categoria={ categoria } />
                    })
                }
            </ul>

        </>
    )
}

export default GifExpertApp;