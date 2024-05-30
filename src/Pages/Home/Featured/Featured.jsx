import SectionTitle from "../../../Component/Section/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'

import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-items bg-fixed text-white pt-8 my-20">
            <SectionTitle
            heading={'Featured item'}
            subHeading={'check it out'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-600/60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 space-y-4 ">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloremque cupiditate possimus vero quas deleniti quibusdam nobis dignissimos, facilis aliquid, aspernatur cumque doloribus quaerat illo atque sapiente recusandae eveniet fuga inventore reprehenderit laboriosam amet fugiat, ipsa quod! Facere id, quidem beatae ut sapiente amet! Qui corrupti beatae porro modi perspiciatis!</p>
                    <button className="btn btn-outline uppercase border-0 border-b-4 border-black">order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;