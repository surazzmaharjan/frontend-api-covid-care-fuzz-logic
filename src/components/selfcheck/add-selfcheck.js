import React, { PureComponent } from "react";
import SelfCheckDataService from "../../services/selfcheck.service";
import UserService from "../../services/user.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth.service";
// import Navigation from "../navigation/navigation"
import BurgerNavigation from "../navigation/burger-navigation"
import jsPDF from 'jspdf'
import moment from "moment";


const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };



export default class AddSelfCheck extends PureComponent {
  constructor(props) {
    super(props);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeQuarantine = this.onChangeQuarantine.bind(this);
    this.onChangeTemperature = this.onChangeTemperature.bind(this);
    this.onChangeDrycough= this.onChangeDrycough.bind(this);
    this.onChangeFatigue= this.onChangeFatigue.bind(this);
    this.onChangeSoreThroat= this.onChangeSoreThroat.bind(this);
    this.onChangeBreathe= this.onChangeBreathe.bind(this);
    this.onChangeBodypain= this.onChangeBodypain.bind(this);
    this.onChangeDiarrhoea = this.onChangeDiarrhoea.bind(this);
    this.onChangeRunnynose = this.onChangeRunnynose.bind(this);
    this.onChangeNausea = this.onChangeNausea.bind(this);
    this.onChangeReturnfromcountry = this.onChangeReturnfromcountry.bind(this);
    
    
    
    this.handleSelfCheck = this.handleSelfCheck.bind(this);


    this.state = {
      age: "",
      gender: "",
      contact:"",
      temperature: "",
      quarantine: "",
      drycough: "",
      fatigue: "",
      sorethroat: "",
      breathe: "",
      bodypain: "",
      diarrhoea: "",
      runnynose: "",
      nausea: "",
      returnfromcountry: "",
      status: "",
        errormessage:"",
        rightcontent:"",
        wrongcontent:"",
        successful: false,
        message: "",
      submitted: false,
      totalcount:0,
      totalpersons:"",
      currentUser: AuthService.getCurrentUser(),
  

    };
  }

  onChangeContact(e) {
    this.setState({
        contact: e.target.value
    });
  }
  onChangeAge(e) {
    this.setState({
        age: e.target.value
    });
  }

  

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }


  onChangeTemperature(e) {
    this.setState({
      temperature: e.target.value
    });
  }

  onChangeQuarantine(e) {
    this.setState({
      quarantine: e.target.value
    });
  }

  

  onChangeDrycough(e) {
    this.setState({
      drycough: e.target.value
    });
  }



  onChangeFatigue(e) {
    this.setState({
      fatigue: e.target.value
    });
  }


  onChangeSoreThroat(e) {
    this.setState({
      sorethroat: e.target.value
    });
  }


  onChangeBreathe(e) {
    this.setState({
      breathe: e.target.value
    });
  }


  onChangeBodypain(e) {
    this.setState({
      bodypain: e.target.value
    });
  }


  onChangeDiarrhoea(e) {
    this.setState({
      diarrhoea: e.target.value
    });
  }

  onChangeRunnynose(e) {
    this.setState({
      runnynose: e.target.value
    });
  }


  onChangeNausea(e) {
    this.setState({
      nausea: e.target.value
    });
  }

  onChangeReturnfromcountry(e) {
    this.setState({
      returnfromcountry: e.target.value
    });
  }




  
  

  handleSelfCheck(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    
   
    this.form.validateAll();
  
  

  var count=0;

     if (this.checkBtn.context._errors.length === 0) {


      if(this.state.quarantine==="true"){
        count = count+1;
      }else{
        count = count-1;

      }

      if(this.state.sorethroat==="true"){
        count = count+1;
      }else{
        count = count-1;
      }


      if(this.state.drycough==="true"){
        count = count+1;
      }else{
        count = count-1;
      }

      if(this.state.fatigue==="true"){
        count = count+1;
      }else{
        count = count-1;
      }


      if(this.state.breathe==="true"){
        count = count+1;
      }else{
        count = count-1;
      }


      if(this.state.bodypain==="true"){
        count = count+1;
      }else{
        count = count-1;
      }


      if(this.state.diarrhoea==="true"){
        count = count+1;
      }else{
        count = count-1;
      }

      if(this.state.runnynose==="true"){
        count = count+1;
      }else{
        count = count-1;
      }

      if(this.state.nausea==="true"){
        count = count+1;
      }else{
        count = count-1;
      }


      if(this.state.returnfromcountry==="true"){
        count = count+1;
      }else{
        count = count-1;
      }

      console.log(count)

      this.setState({
        totalcount:count
      })
      
      var cstatus="";
      if(count>=4){
        
        cstatus="Positive"
      
      }else{
        cstatus="Negative"
       

      }

      console.log(cstatus)
      

        var data = {
            profession: this.state.profession,
            age: this.state.age,
            gender: this.state.gender,
            contact: this.state.contact,
            temperature: this.state.temperature,
            quarantine: this.state.quarantine,
            drycough: this.state.drycough,
            fatigue: this.state.fatigue,
            sorethroat: this.state.sorethroat,
            breathe: this.state.breathe,
            bodypain: this.state.bodypain,
            diarrhoea: this.state.diarrhoea,
            runnynose: this.state.runnynose,
            nausea: this.state.nausea,
            status:cstatus,
            returnfromcountry: this.state.returnfromcountry,
            currentuserfullname: this.state.currentUser.fullname,
            currentuseremail: this.state.currentUser.email,
            currentusername: this.state.currentUser.username,
          };
          SelfCheckDataService.create(data)
      .then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });

          if(this.state.totalcount>=4){
            var lMargin=15; //left margin in mm
            var rMargin=15; //right margin in mm
            var pdfInMM=210;  // width of A4 in mm
            var doc = new jsPDF("p","mm","a4");
          
              doc.setFontSize(18);
              doc.setFont('times')
              doc.setFontType('bold')
              doc.text(15, 25, 'Self Check Positive Report')
              doc.setFontSize(16);
              doc.setFont('times')
              doc.setFontType('normal')
              doc.text(15, 35, 'Your username: '+this.state.currentUser.username)
              doc.setFontSize(16);
              doc.setFont('times')
              doc.setFontType('normal')
              doc.text(15, 42, 'Your contact number: '+this.state.contact)
  
              doc.setFontSize(16);
              doc.setFont('times')
              doc.setFontType('normal')
              doc.text(15, 50, 'Date: '+moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
  
              doc.setFontSize(14);
              doc.setFont('times')
              doc.setFontType('normal')
              doc.text(15,65,'Dear Sir/Madam,')
  
              doc.setFontSize(14);
              doc.setFont('times')
              doc.setFontType('normal')
              var paragraph="As per you submissions and answers, it seems that you are experiencing matching symptoms of Covid-19 virus.";
              var lines =doc.splitTextToSize(paragraph, (pdfInMM-lMargin-rMargin));
              doc.text(lMargin,72,lines);
  
  
              doc.setFontSize(14);
              doc.setFont('times')
              var par1="However, a proper PCR test is still recommended to detect and confirm the transmission and existence of virus within you. Thus, keep calm and to keep your loved ones and people around you safe and away from chances of transmission, you should still take necessary precautions such as maintaing safe distance from the prople around you and keep yourself in home quaratine, avoid the contact with anyone else until further confirmation is done."
              var lines1 =doc.splitTextToSize(par1, (pdfInMM-lMargin-rMargin));
              doc.text(lMargin,85,lines1);
  
              
              doc.setFontSize(14);
              doc.setFont('times')
              var par2="To do that, please contact authorized testing facilities and hospitals to perform a proper test for confirmation."
              var lines2 =doc.splitTextToSize(par2, (pdfInMM-lMargin-rMargin));
              doc.text(lMargin,115,lines2);
  
              doc.setFontSize(14);
              doc.setFont('times')
              var par3='Keep yourself and others around you safe by following provided guideline to stop the possibility of spreading the virus and contact the needed authorities as soon as possible.'
              var lines3 =doc.splitTextToSize(par3, (pdfInMM-lMargin-rMargin));
              doc.text(lMargin,127,lines3);
              
  
              doc.setFontSize(14);
              doc.setFont('times')
              doc.text(15,142,'List of links')
              doc.textWithLink('https://covid19.mohp.gov.np/', 15, 148, {url: 'https://covid19.mohp.gov.np/'});
              doc.textWithLink('https://www.who.int/', 15, 154, {url: 'https://www.who.int/'});
  
              doc.setFontSize(14);
              doc.setFont('times')
              doc.text(15,165,'Contact Numbers')
              doc.text(15,172,'9851-255-834')
              doc.text(15,178,'9851-255-837')
              doc.text(15,184,'9851-255-839')
    
              doc.setFontSize(14);
              doc.setFont('times')
              doc.text(60,165,'Hotline Numbers')
              doc.text(60,172,'1115')
              doc.text(60,178,'1133')
              
    
              doc.setFontSize(14);
              doc.setFont('times')
              doc.text(15,197,'Thank You!')
  
              // Save the Data
              doc.save(this.state.currentUser.fullname+'-self-check-report-positive.pdf');
          }else{

                var plMargin=15; //left margin in mm
                var prMargin=15; //right margin in mm
                var ppdfInMM=210;  // width of A4 in mm
                 var negativedoc = new jsPDF("p","mm","a4");
                
                    negativedoc.setFontSize(18);
                    negativedoc.setFont('times')
                    negativedoc.setFontType('bold')
                    negativedoc.text(15, 25, 'Self Check Negative Report')
                    negativedoc.setFontSize(16);
                    negativedoc.setFont('times')
                    negativedoc.setFontType('normal')
                    negativedoc.text(15, 35, 'Your username: '+this.state.currentUser.username)
                    negativedoc.setFontSize(16);
                    negativedoc.setFont('times')
                    negativedoc.setFontType('normal')
                    negativedoc.text(15, 42, 'Your contact number: '+this.state.contact)
          
                    negativedoc.setFontSize(16);
                    negativedoc.setFont('times')
                    negativedoc.setFontType('normal')
                    negativedoc.text(15, 50, 'Date: '+moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
          
                    negativedoc.setFontSize(14);
                    negativedoc.setFont('times')
                    negativedoc.setFontType('normal')
                    negativedoc.text(15,65,'Dear Sir/Madam,')
          
                    negativedoc.setFontSize(14);
                    negativedoc.setFont('times')
                    negativedoc.setFontType('normal')
                    var pparagraph="As per you submissions and answers, it seems that you are momentarily safe from Covid-19 virus.";
                    var plines =negativedoc.splitTextToSize(pparagraph, (ppdfInMM-plMargin-prMargin));
                    negativedoc.text(plMargin,72,plines);
          
          
                    negativedoc.setFontSize(14);
                    negativedoc.setFont('times')
                    var ppar1="However, a proper PCR test is recommended to detect and confirm the transmission and existence of virus. Thus, you should still take necessary precautions such as maintaing safe distance from large group, maintain atleast 2 to 3 meter distance if you must go outside and always wear a mask. Use sanitizer or soap after your outside visits."
                    var plines1 =negativedoc.splitTextToSize(ppar1, (ppdfInMM-plMargin-prMargin));
                    negativedoc.text(plMargin,85,plines1);
          
                    
                    negativedoc.setFontSize(14);
                    negativedoc.setFont('times')
                    var ppar2="We have listed few contact numbers to help you get in touch with proper testing authorities as well as hospitals."
                    var plines2 =negativedoc.splitTextToSize(ppar2, (ppdfInMM-plMargin-prMargin));
                    negativedoc.text(plMargin,110,plines2);
          
                    negativedoc.setFontSize(14);
                    negativedoc.setFont('times')
                    var ppar3='Stay safe and follow provided guideline to stop the spread of virus.'
                    var plines3 =negativedoc.splitTextToSize(ppar3, (ppdfInMM-plMargin-prMargin));
                    negativedoc.text(plMargin,125,plines3);
                    
                    negativedoc.setFontSize(14);
                    negativedoc.setFont('times')
                    negativedoc.text(15,137,'List of links')
                    negativedoc.textWithLink('https://covid19.mohp.gov.np/', 15, 143, {url: 'https://covid19.mohp.gov.np/'});
                    negativedoc.textWithLink('https://www.who.int/', 15, 150, {url: 'https://www.who.int/'});
          
                    negativedoc.setFontSize(14);
                    negativedoc.setFont('times')
                    negativedoc.text(15,160,'Contact Numbers')
                    negativedoc.text(15,167,'9851-255-834')
                    negativedoc.text(15,173,'9851-255-837')
                    negativedoc.text(15,179,'9851-255-839')
          
                    negativedoc.setFontSize(14);
                    negativedoc.setFont('times')
                    negativedoc.text(60,160,'Hotline Numbers')
                    negativedoc.text(60,167,'1115')
                    negativedoc.text(60,173,'1133')
                    
          
                    negativedoc.setFontSize(14);
                    negativedoc.setFont('times')
                    negativedoc.text(15,192,'Thank You!')
          
                   
            
            // Save the Data
                   negativedoc.save(this.state.currentUser.fullname+'-self-check-report-negative.pdf');
          
          }

         


          setTimeout(function() {
            window.location.reload()
           }, 3000);
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }



  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          rightcontent: response.data
        });
      },
      error => {
        this.setState({
          wrongcontent:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );






    
  }






  render() {


      if(this.state.wrongcontent){
      return  <div><BurgerNavigation/> <div className="container custom-container">{this.state.wrongcontent}</div></div>
      }
      else{
    return (
    <div><BurgerNavigation/>


    <div className="container custom-container">

  


      <div className="container user_card">
   

        <div className="col-md-12">
  
                                
               
            <Form
            onSubmit={this.handleSelfCheck}
            ref={c => {
              this.form = c;
            }}
          >
               {!this.state.successful && (
       
            <div>
                <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <Input
                  type="text"
                  className="form-control"
                  value={this.state.currentUser.fullname}
                  disabled
                />
              </div>


              <div className="form-group">
                <label htmlFor="name">Email</label>
                <Input
                  type="email"
                  className="form-control"
                  value={this.state.currentUser.email}
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact">Contact Number</label>
                <Input
                  type="text"
                  className="form-control"
                  value={this.state.contact}
                  onChange={this.onChangeContact}
                  name="contact"
                  validations={[required]}
                />
              </div>



              <div className="form-group">
                <label htmlFor="age">Your Age</label>
                <Input
                  type="number"
                  className="form-control"
                  id="age"
                  required
                  value={this.state.age}
                  onChange={this.onChangeAge}
                  name="age"
                  validations={[required]}

                />
              </div>

              <div className="form-group">
              <label htmlFor="gender">Choose Gender</label>
           
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="Male"
                      checked={this.state.gender === "Male"}
                      onChange={this.onChangeGender}
                    />
                    Male
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="Female"
                      checked={this.state.gender === "Female"}
                      onChange={this.onChangeGender}
                    />
                    Female
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="Other"
                      checked={this.state.gender === "Other"}
                      onChange={this.onChangeGender}
                    />
                    Other
                  </label>
                </div>
              </div>

              <div className="form-group">
              <label htmlFor="temperature">Choose Temperature</label>
           
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="Normal"
                      checked={this.state.temperature === "Normal"}
                      onChange={this.onChangeTemperature}
                    />
                    Normal
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="Mild Fever"
                      checked={this.state.temperature === "Mild Fever"}
                      onChange={this.onChangeTemperature}
                    />
                    Mild Fever
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="High Fever"
                      checked={this.state.temperature === "High Fever"}
                      onChange={this.onChangeTemperature}
                    />
                    High Fever
                  </label>
                </div>
              </div>

              <div className="form-group">
              <label htmlFor="quarantine">Are you staying in quarantine?</label>
           
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="true"
                      checked={this.state.quarantine === "true"}
                      onChange={this.onChangeQuarantine}
                    />
                    Yes
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="false"
                      checked={this.state.quarantine === "false"}
                      onChange={this.onChangeQuarantine}
                    />
                    No
                  </label>
                </div>
              
              </div>

          
            

              <div className="form-group">
              <label htmlFor="drycough">Dry Cough</label>
           
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="true"
                      checked={this.state.drycough === "true"}
                      onChange={this.onChangeDrycough}
                    />
                    Yes
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="false"
                      checked={this.state.drycough === "false"}
                      onChange={this.onChangeDrycough}
                    />
                    No
                  </label>
                </div>
              
              </div>


              <div className="form-group">
              <label htmlFor="fatigue">Fatigue</label>
           
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="true"
                      checked={this.state.fatigue === "true"}
                      onChange={this.onChangeFatigue}
                    />
                    Yes
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="false"
                      checked={this.state.fatigue === "false"}
                      onChange={this.onChangeFatigue}
                    />
                    No
                  </label>
                </div>
              
              </div>


              <div className="form-group">
              <label htmlFor="sorethroat">Sore Throat</label>
           
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="true"
                      checked={this.state.sorethroat === "true"}
                      onChange={this.onChangeSoreThroat}
                    />
                    Yes
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="false"
                      checked={this.state.sorethroat === "false"}
                      onChange={this.onChangeSoreThroat}
                    />
                    No
                  </label>
                </div>
              
              </div>



              <div className="form-group">
              <label htmlFor="quarantine">Shortness of breathe</label>
           
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="true"
                      checked={this.state.breathe === "true"}
                      onChange={this.onChangeBreathe}
                    />
                    Yes
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="false"
                      checked={this.state.breathe === "false"}
                      onChange={this.onChangeBreathe}
                    />
                    No
                  </label>
                </div>
              
              </div>



              <div className="form-group">
              <label htmlFor="bodypain">Body Pain</label>
           
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="true"
                      checked={this.state.bodypain === "true"}
                      onChange={this.onChangeBodypain}
                    />
                    Yes
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="false"
                      checked={this.state.bodypain === "false"}
                      onChange={this.onChangeBodypain}
                    />
                    No
                  </label>
                </div>
              
              </div>

              <div className="form-group">
              <label htmlFor="diarrhoea">Diarrhoea</label>
           
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="true"
                      checked={this.state.diarrhoea === "true"}
                      onChange={this.onChangeDiarrhoea}
                    />
                    Yes
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="false"
                      checked={this.state.diarrhoea === "false"}
                      onChange={this.onChangeDiarrhoea}
                    />
                    No
                  </label>
                </div>
              
              </div>

              <div className="form-group">
              <label htmlFor="runnynose">Runny Nose</label>
           
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="true"
                      checked={this.state.runnynose === "true"}
                      onChange={this.onChangeRunnynose}
                    />
                    Yes
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="false"
                      checked={this.state.runnynose === "false"}
                      onChange={this.onChangeRunnynose}
                    />
                    No
                  </label>
                </div>
              
              </div>



              <div className="form-group">
              <label htmlFor="nausea">Nausea</label>
           
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="true"
                      checked={this.state.nausea === "true"}
                      onChange={this.onChangeNausea}
                    />
                    Yes
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="false"
                      checked={this.state.nausea === "false"}
                      onChange={this.onChangeNausea}
                    />
                    No
                  </label>
                </div>
              
              </div>



              <div className="form-group">
              <label htmlFor="returnfromcountry">Did you recently return from any covid risk countries/location or 
              have recently visited covid risk countries/location?
              </label>
           
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="true"
                      checked={this.state.returnfromcountry === "true"}
                      onChange={this.onChangeReturnfromcountry}
                    />
                    Yes
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      value="false"
                      checked={this.state.returnfromcountry === "false"}
                      onChange={this.onChangeReturnfromcountry}
                    />
                    No
                  </label>
                </div>
              
              </div>


          

            
              <div className="form-group">
                  <button className="btn btn-success" >Submit </button>
                </div>
              </div>
            )}



            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
            </div>
      </div>
      </div>

    </div>

      );
    }
}
}