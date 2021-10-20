

import { useParams } from 'react-router';
import './Details.css'
import fakeData from '../../fackeDb/fackeDb.json'
const Detail = () => {
    const { serviceId } = useParams();
    console.log(fakeData);

    const service = fakeData.find(data => data.key === serviceId);
    console.log(service);
    const { name, picture, Details } = service;
    return (
        <div>
            <img className='w-100 pic' src={picture} alt="" height="300" width="300" />
            <h2 className='text mt-2 text-center'> {name}</h2>
            <p className='pera'>{Details}</p>
        </div>
    );
};

export default Detail;