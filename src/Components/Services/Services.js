import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fackeDb.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    return (
        <div>
            <h1 className='text-center mt-4 text '>Our Services</h1>
            <div className="container box">



                {

                    services.map(servic => <Service
                        key={servic.key}
                        servic={servic}

                    ></Service>)


                }

            </div>

        </div>
    );
};

export default Services;