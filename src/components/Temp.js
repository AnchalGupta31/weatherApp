import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './style.css';
import axios from 'axios';
const Temp = ()=>{

    const [data,setData] = useState({});
    const[inputCity,setInputCity] = useState("");
    const apiKey = "7e781de52e22adcca5c4d03b2e416c44"
    const getWeatherDetails = (cityName)=>{
        if(!cityName)return;
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey;
        axios.get(apiUrl).then((res)=>{
          console.log(res); 
          setData(res.data) 
        }).catch((err)=>{
            console.log('err');
        })
    }

    const handleInput = (e)=>{
        setInputCity(e.target.value);
    }
    const handleSearch = ()=>{
       getWeatherDetails(inputCity);
    }

    useEffect(()=>{
        getWeatherDetails("pune");
    },[])

    return (
        <>
            <div className='col-md-12'>
                <div className='weatherBg'>
                     <h1 className='heading'>Weather App</h1>
                     <div className='d-grid gap-3 col-4 mt-4'>
                     <input type='text' className='form-control' value={inputCity} onChange={handleInput}/>
                     <button className='btn btn-primary' type='button'
                        onClick={handleSearch}
                     >search</button>
                </div>
                </div>
                <div className='col-md-12 text-center mt-5'>
                    <div className='shadow rounded weatherResultBox'>
                    {/* <img src='E:/reactfirst/weather App/tempreact/src/images/images.png'/> */}
                        <h5 className='weatherCity'>{data?.name}</h5>
                        <h6 className='weatherTemp'>{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Temp;