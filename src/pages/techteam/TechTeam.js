import React from 'react'
import TeamData from './TeamData'
import './TechTeam.css'
const TechTeam = () => {
  return (
    <div> 
      <div class="bg_techteam"></div>
      <div class="bg_techteam bg2_techteam"></div>
      <div class="bg_techteam bg3_techteam"></div>
   <section className="wrapper   py-48 ">
    <div className=" py-32 mx-auto">
      <div className="row flex-column align-items-center text-align-center ">
        <div className="col-lg-5 col-md-10 col-xs-12   ">
          <h5 className="space text-color-development_color_1 py-8">
            TESTIMONIALS
          </h5>
          <h3 className="h3 content py-8">
            What Our Client says
          </h3>
          <p className="p content py-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pharetra ex. Mauris fringilla et tellus ac
            porttitor.
          </p>
        </div>
      </div>
      <div className="row justify-content-evenly">
        {TeamData.map((item ,index)=>{
          return(

            <div key={index} className="col-lg-4 col-md-8 col-xs-12  px-lg-20 py-lg-24 px-md-48 py-md-36 px-16 py-16">
              <div className=" cardteam px-lg-28 py-lg-24 px-18 py-16  border-radius-10">
              <div className="display-flex justify-content-center py-8  border-bottom mx-lg-16">
                <div className="  ">
                  <img src={item.image}
                    alt={item.name} className="border-circle" />
                </div>
                <div className=" pl-16">
                  <h6 className=" teamname font-weight-700 text-color-development_color_4  ">
                    {item.name}
                  </h6>
                  <p className="body1 text-color-development_color_3">
                    {item.title}
                  </p>
                </div>
              </div>
              <p className="body1 font-weight-300 text-color-development_color_3 py-10 ">
              {item.des}
              </p>
              <div className="">
                <div className="text-align-end">
                  <img src={item.icon}
                    alt={item.title} className="" />
                </div>
              </div>
            </div>
          </div>
          )
        }) }  
      </div>
    </div>
  </section>
  </div>
  )
}

export default TechTeam