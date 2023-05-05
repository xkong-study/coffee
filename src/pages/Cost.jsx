import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Cost.css';
import {  Card } from "antd-mobile";
import { UilBill } from '@iconscout/react-unicons'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {Payment0, Payment1, Payment2, Payment3} from "../store/reducer";

const Cost: React.FC = () => {
    const keys = Object.keys(localStorage);
    const id_array = []

    keys.forEach((item)=>{
        if(item[0]=='k'){
            id_array.push(item[3])
        }
    })

    const total = localStorage.getItem('total')
    const payment_total = localStorage.getItem('cost')
    const count = localStorage.getItem('coupon')
    console.log(count)

    const Card_Coffee = ({payment, Image, id}) => {
        const [key, setKey] = useState(Number(localStorage.getItem(`key${id}`)))
        const [pay, setPay] = useState(payment * key)
        const dispatch = useDispatch()
        useEffect(() => {
            localStorage.setItem(`key${id}`, Number(key))
        }, [key]);

        useEffect(() => {
            if(id==0) {
                dispatch((Payment0(pay)))
            }
            if(id==1){
                dispatch((Payment1(pay)))
            }
            if(id==2){
                dispatch((Payment2(pay)))
            }
            if(id==3){
                dispatch((Payment3(pay)))
            }
        }, [pay]);

        return (
            <div>
                <Card>
                    <div className="cart">
                        <img src={Image} alt=""
                             style={{width: "8rem", height: "6.5rem", alignSelf: "stretch", marginTop: "1.2rem"}}/>
                        <div style={{alignSelf: "stretch", marginLeft: ".5rem"}}>
                            <h6>Hot chocolate coco</h6>
                            <p> 300ml </p>
                            <h5 style={{marginBottom: "2px"}}> ${pay} </h5>
                        </div>
                        <div style={{alignSelf: "stretch", marginLeft: ".5rem", marginTop: "16px"}}>
                            <h6 style={{textAlign: "center", marginTop: "8px",marginRight:'5px'}}>{key}</h6>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="bar2">
                    <div style={{width: "8rem"}}><UilBill style={{color: "#D2AC19"}}/></div>
                    <IonTitle className="title_cost">Order</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {id_array.map((item)=>(
                    localStorage.getItem(`key${item}`)!=0?
                        <Card_Coffee payment={Number(localStorage.getItem(`Price${item}`))} Image={localStorage.getItem(`Image${item}`)} id={item} key={item} /> : null
                ))
                }
                <div className="total1">
                    <h6>Total: ${total}</h6>
                    <h6>Coupon: {count}</h6>
                    <h6>Payed: ${payment_total}</h6>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Cost;
