import React from 'react';
import { GifGrifItem } from './GifGrifItem';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid = ({ categoria }) => {

    const { data:images, loading } = useFetchGifs( categoria );
    
    return (
        <>
            <h3 className="animate__animated.animate__fadeIn" > { categoria }</h3>
            { loading && <p className="animate__animated.animate__flash"  >Loading</p> }
            <div className="card-grid" >
                {
                    images.map ( img => (
                      <GifGrifItem key={img.id} img={img} {...img} />
                   ))
                }
            </div>
        </>
    )
}
