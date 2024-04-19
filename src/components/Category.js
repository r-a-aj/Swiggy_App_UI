import React, { useState } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6"


function Category() {
    const [slide, setSlide] = useState(0);

    const Category = {"foodCategory":[
        {
            "image": "https://indigo-restaurant.hu/Views/Images/home_page/thali_menu.png?v=8",
            "path": "north-indian"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/previews/022/149/342/non_2x/hot-italian-pizza-cutout-png.png",
            "path": "pizza"
        },
        {
            "image": "https://foods.sithaiya.com/onlinedelivery/wp-content/uploads/2023/11/prawn-noddles.png",
            "path": "noodles"
        },
        {
            "image": "https://assets-global.website-files.com/6305f7d600c9842969920a58/64be4dce089aca2670712bff_pasta.png",
            "path": "pasta"
        },
        {
            "image": "https://indiamap.com/images/gobi_paratha.webp",
            "path": "paratha"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/previews/038/450/443/non_2x/ai-generated-a-plate-of-chicken-biryani-isolated-on-transparent-background-free-png.png",
            "path": "biryani"
        },
        {
            "image": "https://5.imimg.com/data5/VO/LB/GLADMIN-40426501/ifc-special-burger.png",
            "path": "burger"
        },
        {
            "image": "https://www.cakebyoccasion.in/wp-content/uploads/2022/12/chocolate-cake.png",
            "path": "cakes"
        },
        {
            "image": "https://kitchensutra.co.in/wp-content/uploads/2022/08/chinese_food.png",
            "path": "chinese"
        },
        {
            "image": "https://mysorecafe.com.au/wp-content/uploads/2022/07/Chole-Bhature.png",
            "path": "chole-bature"
        },
        {
            "image": "https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-masala-dosa-indian-traditional-food-with-sambhar-png-image_11521731.png",
            "path": "dosa"
        },
        {
            "image": "https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0185_186-Ghulab-Jamun.png",
            "path": "gulab-jamun"
        },
        {
            "image": "https://static.vecteezy.com/system/resources/previews/024/699/715/non_2x/ice-cream-in-glass-cups-generative-with-ai-free-png.png",
            "path": "ice-creams"
        },
        {
            "image": "https://ammasidli.com/wp-content/uploads/2023/04/unlimited-idli-1024x1024.png",
            "path": "idli"
        },
        {
            "image": "https://t4.ftcdn.net/jpg/07/54/14/57/360_F_754145780_ZdB5TqZUJRWrBmm7Q7PmJuiLpG0Th3Op.webp",
            "path": "khichdi"
        },
        {
            "image": "https://img.pikbest.com/origin/10/06/45/66MpIkbEsTiv9.png!w700wp",
            "path": "poori"
        },
        {
            "image": "https://ratnagiripurevegfood.in/img/hero.png",
            "path": "pure-veg"
        },
        {
            "image": "https://5.imimg.com/data5/SELLER/Default/2023/5/306820855/PB/TV/ST/137124616/frozen-cigar-roll-sheet-500x500.png",
            "path": "rolls"
        },
        {
            "image": "https://jow.fr/_next/image?url=https%3A%2F%2Fstatic.jow.fr%2F880x880%2Frecipes%2Frp3XmIT58VbSqw.png&w=2560&q=100",
            "path": "salad"
        },
        {
            "image": "https://static.wixstatic.com/media/f4fac8_7aba4bcef7154f8c962fce4309aface0~mv2_d_3720_3806_s_4_2.png/v1/fill/w_560,h_574,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f4fac8_7aba4bcef7154f8c962fce4309aface0~mv2_d_3720_3806_s_4_2.png",
            "path": "south-indian"
        }
    ]}

    const nextSlide = () => {
        if (Category.foodCategory.length - 8 === slide) return false;
        setSlide(slide + 3)
    }

    const prevSlide = () => {
        if (slide === 0) return false;
        setSlide(slide - 3)
    }
                                                                                                  
    return (
        <div className="max-w-[1200px] mx-auto px-2">
                <div className="flex my-3 items-center justify-between">
                    <div className="text-[20px] font-bold">What's on your mind?</div>
                        <div className="flex">
                            <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" onClick={prevSlide}><FaArrowLeft /></div>
                            <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2" onClick={nextSlide}><FaArrowRight /></div>
                        </div>
                </div>
            <div className="flex overflow-hidden">
                {
                    Category.foodCategory.map(
                        (item, index) => {
                            return (
                                <div style = {{transform:`translateX(-${slide * 100}%)`}} key = {index} className="w-[150px] shrink-0">
                                    <div className="text-center m-4">
                                        <img src={`${item.image}`} alt={item.path} />
                                        <h1 className="font-bold tex-[black]">{`${item.path}`}</h1>
                                    </div>
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

export default Category