import React from "react";
import "./Testemonials.css";
// import testemonialsImg1 from "../../../assets/img/testimonials/testimonials-1.jpg";
// import testemonialsImg2 from "../../../assets/img/testimonials/testimonials-2.jpg";
// import testemonialsImg3 from "../../../assets/img/testimonials/testimonials-3.jpg";
// import testemonialsImg4 from "../../../assets/img/testimonials/testimonials-4.jpg";
// import testemonialsImg5 from "../../../assets/img/testimonials/testimonials-5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import { Pagination } from "swiper";

const Testemonials = () => {
  return (
    <section id="testimonials" className="section testimonials section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>
            It takes great pains to benefit. His needs result from something
            that actually drives him away. Let them be what they want. Anyone
            whom anyone desires. And no one who hinders receives the others.
            Because he should flee from the offices of convenience which he has
            here.
          </p>
        </div>
        <Swiper
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
          // modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="testimonial-item" data-aos="fade-up">
              <p style={{ color: "black" }}>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              {/* <img src={testemonialsImg1} className="testimonial-img" alt="" /> */}
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="testimonial-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p style={{ color: "black" }}>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure esse
                labore quem cillum quid cillum eram malis quorum velit fore eram
                velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              {/* <img src={testemonialsImg2} className="testimonial-img" alt="" /> */}
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="testimonial-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p style={{ color: "black" }}>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Enim nisi quem export duis labore cillum quae magna enim sint
                quorum nulla quem veniam duis minim tempor labore quem eram duis
                noster aute amet eram fore quis sint minim.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              {/* <img src={testemonialsImg3} className="testimonial-img" alt="" /> */}
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="testimonial-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p style={{ color: "black" }}>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                multos export minim fugiat minim velit minim dolor enim duis
                veniam ipsum anim magna sunt elit fore quem dolore labore illum
                veniam.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              {/* <img src={testemonialsImg4} className="testimonial-img" alt="" /> */}
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="testimonial-item"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p style={{ color: "black" }}>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                veniam tempor noster veniam enim culpa labore duis sunt culpa
                nulla illum cillum fugiat legam esse veniam culpa fore nisi
                cillum quid.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              {/* <img src={testemonialsImg5} className="testimonial-img" alt="" /> */}
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testemonials;
