import {IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import {UilCoffee} from '@iconscout/react-unicons'
import './Tab1.css';
import {IonSearchbar} from "@ionic/react"
import {CapsuleTabs} from 'antd-mobile'
import Coffee from "../components/coffee"
import {RootState} from "../store";
import {useSelector} from "react-redux";

const imags = ["https://www.irishexaminer.com/cms_media/module_img/6894/3447086_5_seoimage4x3_21832212-1.jpg", "https://www.thespruceeats.com/thmb/0CK65lVOSHILEZXSh1dVJ_Hl4Hc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-caffe-latte-765372-hero-01-2417e49c4a9c4789b3abdd36885f06ab.jpg",
    "https://supervalu.ie/thumbnail/800x600/var/files/recipes/SuperValu_StPatricksDay_IrishCoffee.jpg", "https://www.allrecipes.com/thmb/Hqro0FNdnDEwDjrEoxhMfKdWfOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg"]
const recommendation=["https://img.taste.com.au/AagB_6rM/taste/2016/11/vietnamese-coffee-65816-1.jpeg","https://www.beanhive.ie/wp-content/uploads/2022/03/beanhive-coffee-art.jpg",
    "https://athome.starbucks.com/sites/default/files/styles/homepage_banner_xlarge/public/2022-05/CAH_Header_Caramel_macch_2880x1660.jpg?h=cf77c377&itok=5RbgY8Ng","https://cdn.shopify.com/s/files/1/0015/3750/7373/files/hot-coffee-products.jpg?v=1678294872&width=550"]
const newest = ["https://realfood.tesco.com/media/images/RFO-1400x919-IcedCoffee-76221116-2565-4103-9899-89571028018e-0-1400x919.jpg","https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/untitled_design_-_2023-01-18t164043.118_0-sixteen_nine.png?VersionId=yNVodTG22w2qsGqnM12QsdP5mnbvLcJN&size=690:388",
    "https://www.wikihow.com/images/thumb/1/12/Make-Instant-Coffee-Step-22-Version-6.jpg/v4-1200px-Make-Instant-Coffee-Step-22-Version-6.jpg","https://img.taste.com.au/Ag8LVj09/taste/2016/11/vienna-coffee-38361-1.jpeg"]
const prices_ne = [6.5,5.5,7.5,8.5]
const Tab1: React.FC = () => {
    const key = useSelector((state:RootState)=>state.user.click)

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="card">
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <div><IonSearchbar style={{width: "50rem"}}/></div>
                        <div><UilCoffee style={{color: "#CAB43A", width: "2rem", height: "2rem", marginLeft: "10rem"}}/>
                        </div>
                    </div>
                    <div className="item text-center">
                        <img
                            src="https://s3.amazonaws.com/thumbnails.venngage.com/template/083bbd11-054a-4c7b-898b-64c73da51636.png"
                            alt=""/>
                    </div>
                    <div className="item  text-center">
                        <i className="icon ion-ios7-telephone"></i>
                        <CapsuleTabs>
                            <CapsuleTabs.Tab title='Product' key='coffee'>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap"
                                }}>
                                    {imags.map((key,value) => (
                                        <Coffee i={key} key={value} price={value}/>
                                    ))}
                                </div>
                            </CapsuleTabs.Tab>
                            <CapsuleTabs.Tab title='Recommend' key='recommend'>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap"
                                }}>
                                    {recommendation.map((key,value) => (
                                        <Coffee i={key} key={value} price={value}/>
                                    ))}
                                </div>
                            </CapsuleTabs.Tab>
                            <CapsuleTabs.Tab title='newest' key='newest'>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    flexWrap: "wrap"
                                }}>
                                    {newest.map((key,value) => (
                                        <Coffee i={key} key={value} price={prices_ne[value]}/>
                                    ))}
                                </div>
                            </CapsuleTabs.Tab>
                        </CapsuleTabs>
                    </div>
                </div>
                    <div className="run" key={key}>
                        <p style={{width: '6rem', height: '1rem',fontSize:"1.2rem",marginBottom:"1rem"}}>+1</p>
                    </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
