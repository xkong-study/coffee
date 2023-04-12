import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {UilCreditCard, UilMinus, UilPlus, UilShoppingCart, UilUser} from '@iconscout/react-unicons'
import './Tab2.css';
import {Button, CapsuleTabs, Card, Input} from "antd-mobile";
import coffee from '../components/CoffeeCoupon.png';
import {UilMultiply} from '@iconscout/react-unicons'
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {Payment0, Payment1, Payment2, Payment3} from "../store/reducer";

const Tab2: React.FC = () => {
    const keys = Object.keys(localStorage);
    const id_array = []
    keys.forEach((item)=>{
        if(item[0]=='k'){
            id_array.push(item[3])
        }
    })

    const value0 = useSelector((state:RootState)=>state.user.value0)
    const value1 = useSelector((state:RootState)=>state.user.value1)
    const value2 = useSelector((state:RootState)=>state.user.value2)
    const value3 = useSelector((state:RootState)=>state.user.value3)

    const [total,setTotal] = useState(0)
    const [payment_total,setPayment_total] = useState(total)
    useEffect(()=>{
        setTotal(value0+value1+value2+value3)
    },[value0,value1,value2,value3])

    const [coupon, setCoupon] = useState(500)
    const [count, setCount] = useState(0)
    const MinuesCoupon = () => {
        setCoupon(coupon => coupon - 1)
        setCount(count => count - 0.5)
    }

    useEffect(()=>{
        setPayment_total(total+count)
    },[count,total])

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

        const AddNumber = () => {
            setKey(key => key + 1)
            setPay(payment * (key+1))
        }
        const MinueNumber = () => {
            setKey(key => key - 1)
            setPay(payment * (key-1))
        }
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
                            <Button className="Button" onClick={AddNumber}><UilPlus
                                style={{marginLeft: "-.05rem", width: "1rem", height: "1rem"}}/></Button>
                            <h6 style={{textAlign: "center", marginTop: "8px"}}>{key}</h6>
                            <Button className="Button" onClick={MinueNumber}><UilMinus
                                style={{marginLeft: "-.05rem", width: "1rem", height: "1rem"}}/></Button>
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
                    <div style={{width: "5rem"}}><UilShoppingCart style={{color: "#D2AC19"}}/></div>
                    <IonTitle className="title2">Cart</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {id_array.map((item)=>(
                   localStorage.getItem(`key${item}`)!=0?
                    <Card_Coffee payment={Number(localStorage.getItem(`Price${item}`))} Image={localStorage.getItem(`Image${item}`)} id={item} key={item} /> : null
                ))
                }
                <CapsuleTabs>
                    <CapsuleTabs.Tab title='coupon' key='coupon'>
                        <div className="total">
                            <h6>Total: {coupon}</h6>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <img src={coffee} alt="" style={{width: "60%", height: "auto"}}/>
                                <UilMultiply
                                    style={{position: "absolute", marginBottom: "0px", width: "1rem", height: "1rem"}}
                                    onClick={MinuesCoupon}/>
                            </div>
                        </div>
                    </CapsuleTabs.Tab>
                    <CapsuleTabs.Tab title='apply' key='apply'>
                        <div className="total">
                            <h6>Total: ${total}</h6>
                            <h6>Coupon: {count}</h6>
                            <h6>Need to Pay: ${payment_total}</h6>
                            <h6>Use card:</h6>
                            <img className="card2"
                                 src="https://t4.ftcdn.net/jpg/02/88/19/51/360_F_288195176_byYDO2Zo7sJaYgqmPKUjEtIqlfmYHZfj.jpg"
                                 alt=""/>
                        </div>
                    </CapsuleTabs.Tab>
                </CapsuleTabs>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
