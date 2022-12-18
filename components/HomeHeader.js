export default function HomeHeader() {
    return (<section className="home">
        <div className="swiper home-slider">
            <div className="swiper-wrapper">
                <section
                    className="swiper-slide slide"
                    style={{ background: "url(/home-slide-1.jpg) no-repeat" }}
                >
                    <div className="content">
                        <h3>Dr.B.R.Ambedkar School of Specialized Excellence</h3>
                        <p>HE-21 Century Skill</p>
                        {/*<a href="#" class="btn">Read more</a>*/}
                    </div>
                </section>
            </div>
            <div className="swiper-pagination" />
        </div>
    </section>);
}
