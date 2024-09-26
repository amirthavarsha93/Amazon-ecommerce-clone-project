import Slider from "react-slick";

const PrimeSlider = () => {

  const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
  };


  const styles = {
    sliderImage: {
      width: "100%",
      zIndex: "-1",
      marginBottom: "-150px",
      WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
    },
  };

  return (
    <>
    <div>
    <Slider {...settings}>
      <div>
        <img
        style={styles.sliderImage}
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      </div>
      <div>
      <img
        style={styles.sliderImage}
        src="https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg"
        alt=""
      />
      </div>
      <div>
      <img
        style={styles.sliderImage}
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/980_AB_GIF_Wave03_SP_TopBanner_1242x450_1.jpg"
        alt=""
      />
      </div>
      <div>
      <img
        style={styles.sliderImage}
        src="https://i.gadgets360cdn.com/large/amazon_sale_2020_1602838572301.jpg"
        alt=""
      />
      </div>
      <div>
      <img
        style={styles.sliderImage}
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      </div>
      <div>
      <img
        style={styles.sliderImage}
        src="https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg"
        alt=""
      />
      </div>
    </Slider>
  </div>
  </>
  );
};

export default PrimeSlider;