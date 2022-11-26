
import './contact.css'
import ContactForm from '../../components/ContactForm/ContactForm';
const Contact = () =>{

  return( 
    <div className="container">

    <div className="content-page">
    <h1 className="text-center heading-page">Chào mừng đến với My store</h1>
    <div className="container">
      <div className="row">
        <div className="col col-lg-6 col-12">
          <h1 className="heading-1 line-seperate">STORE</h1>
          <p className="text">
            <a href="https://goo.gl/maps/3ZgBBednrBUQfaWc6" >Store 1: </a>
          </p>
          <p className="text">
            <a href="https://goo.gl/maps/BY7bJQ8ZdkEM9r2b9" >Store 2:</a>
          </p>
          <div className="contact-img">
            <img src="../image/store-1.jpg" alt=""/>
          </div>
        </div>
        <div className="col col-lg-6 col-12 mt-md-5 mt-lg-0 mt-sm-5 mt-5">
         
          <h1 className="heading-1 line-seperate">Thông tin liên hệ:</h1>
          <ContactForm />
        </div>

      </div>
    </div>
    <div className="contact-map container-fuild">
      <h1 className="heading-1 text-center">
        Địa chỉ
      </h1>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9544107053234!2d106.67334742307764!3d10.737997167871342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f62a90e5dbd%3A0x674d5126513db295!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgU8OgaSBHw7Ju!5e0!3m2!1svi!2s!4v1669359531690!5m2!1svi!2s"style={ { height:"450px" ,border:"0" , loading:"lazy" }}></iframe>
      </div>
    </div>

  </div>
    </div>
  )
}


export default Contact;