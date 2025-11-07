import React, { useState } from 'react';
import { useEffect } from 'react';
import { data } from 'react-router';
import Letesproduct from './Letesproduct';

const Home = () => {

    const [product ,  setProduct] = useState([])


    useEffect(() => {

        fetch('http://localhost:3000/letes-product')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProduct(data);
        })


    }, [])


    return (
        <div>
            <h4>this is the home for samrt deals site</h4>

            <h4 className='text-3xl font-bold text-center'>Letest product</h4>
            <div className='max-w-10/12 m-auto   grid grid-cols-1  md:grid-cols-3  gap-6 mt-6'>
                {
                    product.map(product => <Letesproduct product={product} key={data._id}></Letesproduct>)
                }
            </div>
        </div>
    );
};

export default Home;