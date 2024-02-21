import React from 'react'
import demon from '../img/demon.jpg'
import neha from '../img/neha.jpg'
function About() {
  return (
    <div className='Anime' style={{ backgroundColor: 'black', color:'aliceblue' }}>
      <h1  style={{textAlign:'center', marginBottom:'5%'}}>ABOUT US</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'style={{textAlign:'justify'}}>
            <h4>
              Welcome to Anime World, a platform where anime enthusiasts can enjoy their favorite shows and movies for free. As a student and passionate anime fan, I created this project to showcase my skills and provide a space for fellow fans to indulge in their love for anime.
              At Anime World, we believe that everyone should have access to the best anime content without breaking the law. As such, we do not support piracy or illegal activities in any form. All the content available on our website is sourced from legal and licensed streaming services and is made available for free to our users.
              Our team works hard to curate the best anime shows and movies from around the world, so you can enjoy a diverse range of content. We also prioritize user experience and strive to make our platform easy to navigate and use.
              <br/><br/>
              <b>Please note that Anime World is not affiliated with any official anime streaming service or company. This project was solely created for educational purposes and to showcase my skills as a student. While we strive to provide a safe and legal platform for anime fans, we cannot guarantee the accuracy or legality of the content on our platform.
              Thank you for choosing Anime World as your go-to destination for anime content. If you have any questions or feedback, please don't hesitate to contact us.</b>
            <br/><br/>
            </h4>
          </div>
          <div className='col-md-1'></div>
          <div className='col-md-5'>
            <h2  style={{textAlign:'center', marginBottom:'5%', backgroundColor:"aliceblue", color:"black"}}><b>OUR TEAM</b></h2>
            <div className='card1'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6'>
                  <img src={demon} alt=''></img>
                  </div>
                  <div className='col-md-6'>
                    <h5> <b style={{backgroundColor:"aliceblue", padding:"2px", color:"black", lineHeight:"35px"}}>Name :</b><br/> Gautam kumar <br/><br/>
                    <b  style={{backgroundColor:"aliceblue", padding:"2px", color:"black", lineHeight:"35px"}}>Education Qualification :</b><br/> BCA  <br/><br/>
                    <b  style={{backgroundColor:"aliceblue", padding:"2px", color:"black", lineHeight:"35px"}}>Techlogies :</b><br/> HTML, CSS , JavaScript , React , FireBase Database, MongoDB, SQL  <br/><br/></h5>
                   
                  </div>
                </div>
                <br/>
                <div className='row'>
                  <div className='col-md-6'>
                  <img src={neha} alt=''></img>
                  </div>
                  <div className='col-md-6'>
                    <h5> <b style={{backgroundColor:"aliceblue", padding:"2px", color:"black", lineHeight:"35px"}}>Name :</b><br/> Neha Kumari <br/><br/>
                    <b  style={{backgroundColor:"aliceblue", padding:"2px", color:"black", lineHeight:"35px"}}>Education Qualification :</b><br/> B.Tech CSE  <br/><br/>
                    <b  style={{backgroundColor:"aliceblue", padding:"2px", color:"black", lineHeight:"35px"}}>Techlogies :</b><br/> HTML, CSS , JavaScript , React , MongoDB, SQL, Java (major)  <br/><br/></h5>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
