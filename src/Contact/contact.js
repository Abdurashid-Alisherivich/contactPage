import './contact.scss'
import React ,  {useState , useEffect}  from 'react'
import axios from 'axios'
import Maps from '../componenta/map/map'





const Contact = (props) =>{

  const  [contact, setContact] = useState({
    name: '',
    surname: '',
    number: '',
    magazin: '',
    message: ''
  })

  const changeHandle = (e) => {
    setContact({...contact , [e.target.name]:e.target.value})
  }
  async function SendForm(e){
    await axios.post('http://localhost:5000/contact', contact)
    .then((res)=>{
          e.preventDefult()
      console.log(res)
    }) .catch((err)=>{
      console.log(err)
    })
  }

  const [contacts , setContacts] = useState([])
  useEffect(async () => {
    const res = await axios.get('http://localhost:5000/contact')
    setContacts(res.date)
  }, [])


    return(
        <>
      
          <div className="container row">
            <div className="col sm-12">
                     <div className="images"></div>
            </div>
          </div>
        
        <h1 className="conversation">Biz bilan bog'lanish</h1>


  <div className="container second-section">
  <div className="row">
    <div className="col">
      <h2 className="contact_text_color">Assalomu Alaykum aziz obunachilar!</h2>
      
     <p className="contact_p" > Bu sahifa orqali siz admin bilan bog 'lanishingiz va o'
     zingizni savollaringizni va yana qo 'shimcha qulaylik yaratish uchun takliflar berishiz mumkin.</p>
           <h4 className="contact_text_color"> Biz bilan bog 'lanish uchun </h4> 
            <p className="contact_p">Tel: +998(99) 002 88 35 </p> 
           <p className="contact_p"> Email manzil: TechnobackTeam @gamil.com </p>
           <h4 className="contact_text_color">Manzil:</h4>
    <p className = "contact_p" > Farg'ona viloyati, Fargo'na shahri, Farg'ona soliq boshqarmasi to'g'risidagi "Verona mebel" binosi 3 qavat.</p>
    </div>
    
    <div className="col-sm-6 order-5">
      <nav className="navbar navbar-light ">
  <form className="container-fluid" onSubmit={SendForm}>


     <div className="row container">
    <div className="col">
    <div className="input-group ">
     
      <input type="text" placeholder="Ismingizni yozing" className="form-control" value={contact.name} name="name" aria-label="Username" onChange={changeHandle}/>
    </div>
    
    </div>
    <div className="col-sm-6 order-5">
    <div className="input-group" >
   
    <input type="text" placeholder="Familiyangizni yozing" className="form-control" value={contact.surname}  name="surname" onChange={changeHandle} aria-label="Username"/>
    </div>
    </div>
  </div>




   <div className="row container">
    <div className="col">
              <div className = "input-group contact_input_section_action_bottom" >
      
      <input type="number" placeholder="Telefon raqamingizni yozing" className="form-control" value={contact.number} name="number" onChange={changeHandle} aria-label="Username"/>
    </div>
    </div>
    <div className="col-sm-6 order-5">
              <div className = "input-group contact_input_section_action_bottom" >
      
      <input type="text" placeholder="Officingizni nomini yozing" className="form-control" value={contact.magazin} name="magazin" onChange={changeHandle} aria-label="Username"/>
    </div>
    </div>
  </div>

      <div className = "input-group contact_input_section_action_bottom container" >
  <textarea className="form-control width-area-w-100" placeholder="Xabar yuborish..." name="message" value={contact.message} onChange={changeHandle} aria-label="With textarea"></textarea>
</div>
  </form>
</nav>
    </div>
  </div>
</div>
     <form onSubmit={SendForm}>
             <button type="submit" className="btn btn-primary for_btn_style">Submit</button>
    </form>


{/* <div className="basic-location-map">
  <Maps />
</div> */}






        {
            contacts.map((elem) =>{

                return(

                    <div className="cart" key={elem._id}>

                        <p>{elem.name}</p>
                        <p>{elem.surname}</p>
                        <p>{elem.number}</p>
                        <p>{elem.magazin}</p>
                        <p>{elem.message}</p>

                    </div>
                    
                )

            })
        }


        </>
    )
}

export default Contact