import React ,{ Component }from 'react';
import FaqService from "../../services/faq.service";
// import Navigation from "../navigation/navigation"
import BurgerNavigation from "../navigation/burger-navigation"
import faq from "../images/FAQ.gif";
import ReactPlayer from "react-player";

class FaqAccordion extends Component{
// const DatatablePage = () => {
  constructor(props) {
    super(props);
  
    this.state = {
      faqs: [],
      isLoaded :false,
    }
  
  }

   
    componentDidMount() {

        FaqService.getAllbyVideo().then((response) => {

              this.setState({
                faqs: response.data
              })
              // console.log(response.data)
          });

  }


render() {
    const alldata = this.state.faqs.map((hlists,index)=>{
        return ( 
        <div className="user_card sized card text-white bg-dark mb-3" key={hlists._id}>
          
        <div id={'heading'+index} >
          <h4 className="mb-0">
            <span className="btn-link card-header faq-question text-green"  data-toggle="collapse" data-target={"#collapse"+index} aria-expanded="true" aria-controls="collapseOne">
              {hlists.question}
            </span>
          </h4>
        </div>
        <div id={"collapse"+index} className={index===0 ? "collapse show":"collapse"} aria-labelledby={'heading'+index} data-parent="#accordionExample">
          <div className="card-body">
                <ReactPlayer
              url={hlists.answer}
            />
                

          </div>
        </div>
      </div>)
        
       

    })
  return (
    <div className="container custom-container"> 
    <img src={faq} alt="FAQ-one" className="rounded mx-auto d-block sizing"/> 
    <div><BurgerNavigation/>
     <div className="container custom-container">
        <div className="accordion" id="accordionExample">
            {alldata}

        </div>

        </div>
          </div>
    </div>
   
  );
        
}
}

export default FaqAccordion;


