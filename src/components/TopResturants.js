import React, {useState} from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6"
import Card from './Card'

function TopResturants() {
    const [slide, setSlide] = useState(0);

    const CardContainer = {"cardDetails":[
        {   
            "id": 1,
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/2b4f62d606d1b2bfba9ba9e5386fabb7",
            "offer": "Items at ₹179",
            "title": "Pizza Hut",
            "rating": 4.2,
            "minTime": 30,
            "maxTime": 40,
            "name": "Pizzas",
            "place": "Sahid Nagar"
        },
        {   
            "id": 2,
            "image": "https://static.toiimg.com/photo/54407104.cms",
            "offer": "₹50 OFF ABOVE ₹199",
            "title": "Chhapan Bhog Sweets",
            "rating": 4.5,
            "minTime": 35,
            "maxTime": 40,
            "name": "Sweets,South Indian",
            "place": "Jaydev Vihar"
        },
        {   
            "id": 3,
            "image": "https://b.zmtcdn.com/data/pictures/3/18780343/a04740bbd8e071eca19eef0cb065c657.jpg?fit=around|750:500&crop=750:500;*,*",
            "offer": "₹85 OFF ABOVE ₹149",
            "title": "Haldi",
            "rating": 4.3,
            "minTime": 35,
            "maxTime": 40,
            "name": "North India, Thalis",
            "place": "ID Market"
        },
        {   
            "id": 4,
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/l3muzpxy1ivhufrkv8zb",
            "offer": "₹70 OFF ABOVE ₹149",
            "title": "Kwality Walls Frozen",
            "rating": 4.5,
            "minTime": 25,
            "maxTime": 25,
            "name": "Desserts,Ice Cream",
            "place": "CRP Square"
        },
        {   
            "id": 5,
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/6e04be27387483a7c00444f8e8241108",
            "offer": "₹1-5 OFF ABOVE ₹179",
            "title": "The Good Bowl",
            "rating": 4.4,
            "minTime": 30,
            "maxTime": 35,
            "name": "Biryani, North India",
            "place": "Nayapali"
        },
        {   
            "id": 6,
            "image": "https://nicicecreams.com/wp-content/uploads/2023/01/Indian-Flavours.png",
            "offer": "₹100 OFF ABOVE ₹499",
            "title": "NIC Ice Creams",
            "rating": 4.7,
            "minTime": 25,
            "maxTime": 30,
            "name": "Desserts,Ice Cream",
            "place": "Vani Vihar"
        },
        {   
            "id": 7,
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/f1bc9ddf53de574cdc35ab2f717df234",
            "offer": "Items at ₹109",
            "title": "Hare Krishna Dosa",
            "rating": 4.0,
            "minTime": 35,
            "maxTime": 40,
            "name": "South Indian",
            "place": "Achaya Vihar"
        },
        {   
            "id": 8,
            "image": "https://imgmedia.lbb.in/media/2022/05/628d02abb244e5600088c718_1653408427183.jpg",
            "offer": "₹125 OFF ABOVE ₹349",
            "title": "Namaste Meals and Thalis",
            "rating": 4.3,
            "minTime": 30,
            "maxTime": 35,
            "name": "Biryani, North India",
            "place": "ID Market"
        },
        {   
            "id": 9,
            "image": "https://www.foodandwine.com/thmb/zaL9eyOyTgCjX99DFOhB3iG7YEk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/The-Worst-Time-to-Visit-McDonalds-FT-BLOG0823-711a27313d1a448baf4db4817310ff5d.jpg",
            "offer": "₹70 OFF ABOVE ₹249",
            "title": "McDonald's",
            "rating": 4.4,
            "minTime": 30,
            "maxTime": 35,
            "name": "American",
            "place": "Kharbel Nagar"
        },
        {   
            "id": 10,
            "image": "https://www.thecookierookie.com/wp-content/uploads/2021/07/featured-funfetti-cake-recipe.jpg",
            "offer": "₹100 OFF ABOVE ₹449",
            "title": "Paris Bakery",
            "rating": 4.5,
            "minTime": 35,
            "maxTime": 40,
            "name": "Cake",
            "place": "Jaydev Vihar"
        }
    ]}

    const nextSlide = () => {
        if (CardContainer.cardDetails.length - 4 === slide) return false;
        setSlide(slide + 1)
    }

    const prevSlide = () => {
        if (slide === 0) return false;
        setSlide(slide - 1)
    }

    return (
        <div className="max-w-[1200px] mx-auto px-2">
                <div className="flex my-3 items-center justify-between">
                    <div className="text-[20px] font-bold">Top restaurant chains in Bhubaneswar</div>
                        <div className="flex">
                            <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" onClick={prevSlide}><FaArrowLeft /></div>
                            <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" onClick={nextSlide}><FaArrowRight /></div>
                        </div>
                </div>
                <div className="flex gap-5 overflow-hidden">
                    {
                        CardContainer.cardDetails.map(
                            (d, i) => {
                                return (
                                <div style = {{transform:`translateX(-${slide * 100}%)`}}>
                                    <Card width="w-full md:w-[273px]" {...d} key={i.id}/>
                                </div>
                                )
                            }
                        )
                    }
                </div>
                <hr className="my-6 border-[1px]"/>
        </div>
        
    )
}

export default TopResturants