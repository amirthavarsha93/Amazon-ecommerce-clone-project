import {ProductCard, ProductCard2} from "./ProductCard";
import { AmazonPay, Upcominglaunches, StylesForMen } from '../Details/OfferDetail'
import ProductSlider from "./ProductSlider";
import { ProductDetail } from '../Details/ProductDetail'
import PrimeSlider from "./PrimeSlider";

const MainSection = () => {
  return (
    <>
      <div id="container">
        <PrimeSlider/>
        <div className="product-gallery">
        <ProductCard
          title="Up to 70% off | Clearance store"
          img="../image/Productimage/b1.jpg"
          offer="Shop Now"
        />
        <ProductCard2 Detail={Upcominglaunches}  title="Latest and upcoming launches" />
        <ProductCard
          title="Amazon pay Book Travel Tickets"
          img="https://pbs.twimg.com/media/F3pLr26aAAAFG6r.jpg"
          offer="Shop Now"
        />
        <ProductCard2 Detail={AmazonPay}  title="Amazon pay Book Travel Tickets" />
        </div>
        <div className="product-gallery">
        <ProductCard
          title="Bluetooth Calling Smartwatch starts at ₹1,999"
          img="../image/Productimage/b2.jpg"
          offer="Shop Now"
        />
        <ProductCard2 Detail={StylesForMen}  title="Up to 60% off | Styles for men" />
        <ProductCard
          title="Women Trending Tops flat 50% off"
          img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKd6csadSK8mBMEBto3VXIhHQ-X5ragHte1rA9Sf9ICfYF55eejyR9ju2_gvDT7u4ZLGTC3DsttNkUjUvDD93rIcgSrY-UugVxDH95VNHOMNAUuJSOXSnyK9Bx9vQ5HKNrW4SeBc4&usqp=CAc"
          offer="Shop Now"
        />
        <ProductCard2 Detail={AmazonPay}  title="Amazon pay Book Travel Tickets" />
        </div>

        <ProductSlider />
      </div>
    </>
  );
};

export default MainSection;
