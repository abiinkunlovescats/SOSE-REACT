import React from "react";
export default function Contact(){
    const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
    return(
        
    <section className="contact">
      <h1 className="heading"> get in touch </h1>
      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-clock" />
          <h3>opening hours :</h3>
          <p>00:07am to 00:06pm</p>
        </div>
        <div className="icons">
          <i className="fas fa-phone" />
          <h3>phone :</h3>
          <p>+91000000</p>
          <p>+91000000</p>
        </div>
        <div className="icons">
          <i className="fas fa-envelope" />
          <h3> email : </h3>
          <p>sectionc90@gmail.com</p>
          <p>sectionc90@gmail.com</p>
        </div>
        <div className="icons">
          <i className="fas fa-map" />
          <h3>address :</h3>
          <p> Delhi, india - 110075</p>
        </div>
      </div>
      <div className="row">
        <div className="image">
          <img src="/contact-img.png" alt="" />
        </div>
        <form action="">
          <h3>send us a message</h3>
          <input type="text" placeholder="name" className="box" />
          <input type="email" placeholder="email" className="box" />
          <input type="number" placeholder="phone" className="box" />
          <textarea
            name=""
            className="box"
            placeholder="message"
            id=""
            cols={30}
            rows={10}
            defaultValue={""}
          />
          <input type="submit" defaultValue="send message" className="btn" />
        </form>
      </div>
    </section>
  )
}