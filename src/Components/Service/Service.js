
import React from 'react';
import './Service.css';


const Service = (props) => {
    console.log(props);

    // const { name, picture, Details } = props.Servic;
    return (


        <div className="m-5   ">

            <div>
                <img className='fluid img' src={props.servic.picture} alt="" srcset="" />
                <h4 className='text mt-3 '>{props.servic.name}</h4>
                <p >{props.servic.Details.slice(0, 40)}</p>
                <button to="/detail" className="btn details-btn btn-primary">Details</button>
            </div>


        </div>

    );
};

export default Service;