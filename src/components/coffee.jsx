import React, {useEffect, useState} from 'react'
import { Card, Toast, Button } from 'antd-mobile'
import './coffee.css'
import { UilHeart, UilPlus } from '@iconscout/react-unicons'
import { useDispatch } from 'react-redux'
import {Click, Price} from '../store/reducer'

export default function Coffee({i,price}) {
    const prices_re = [6.5,5.5,7.5,8.5]
    const [arr,setArr] = useState([])
    const [clicked, setClicked] = useState(Number(localStorage.getItem(`key${price}`)));
    const dispatch = useDispatch()
    const handleClick = (e) => {
            e.stopPropagation(); // 阻止事件冒泡
            setClicked(clicked=>clicked + 1);
            setArr([...arr, i]);
            localStorage.setItem(`Image${price}`,i)
            localStorage.setItem(`Price${price}`,prices_re[price])
    };

    useEffect(()=>{
        localStorage.setItem(`test${price}`,arr)
    },[arr]);

    useEffect(() => {
        dispatch(Click(clicked));
        localStorage.setItem(`key${price}`,clicked)
    }, [clicked]);

    return (
        <Card
            title={
                <div className="icon">
                    <UilHeart/>
                </div>
            }
            style={{ borderRadius: '16px',borderColor:"black",width:"48%",marginBottom:"1rem"}}
        >
            <img src={i} alt="" style={{width:"50rem",height:"5rem",margin:"0 auto",objectFit:"cover",objectPosition:"30% 10%"}}/>
            <div onClick={e => e.stopPropagation()}>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:"white",justifyContent:"space-around",width:"80%",borderRadius:"25px",height:"2rem",marginTop:".5rem"}}  className={`order ${clicked ? 'clicked' : ''}`}>
                    <div style={{marginTop:"-.5rem"}}><h6>${prices_re[price]}</h6></div>
                    <div><UilPlus style={{color:"#A8B718",width:"1rem",height:"1rem",marginLeft:"1rem"}} onClick={handleClick}/></div>
                </div>
            </div>
        </Card>
    );
}
