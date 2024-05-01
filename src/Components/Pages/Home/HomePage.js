import React from "react";
import CarouselSlider from "../../Home/CarouselSlider";
import HomeCatogery from "../../Home/HomeCatogery";
import CardProductContainer from "../../Products/CardProductContainer";
import DiscountSection from "../../Home/DiscountSection";
import img1 from "../../Images/item.png";
import img2 from "../../Images/labtop.png";
import BrandFeature from "../../Brands/BrandFeature";

const HomePage = () => {
  return (
    <div>
      <CarouselSlider />
      <HomeCatogery title="التصنيفات" btntitle="المزيد" />
      <CardProductContainer
        title="الاكثر مبيعاً"
        btntitle="المزيد"
        img={img1}
        pathText="/products"
      />
      <DiscountSection />
      <CardProductContainer
        title="احدث الازياء"
        btntitle="المزيد"
        img={img2}
        pathText="/products"
      />
      <BrandFeature title="أشهر الماركات" btntitle="المزيد" />
    </div>
  );
};

export default HomePage;
