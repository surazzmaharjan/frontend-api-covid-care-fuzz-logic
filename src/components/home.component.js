
// import UserService from "../services/user.service";
import Level from "./quickfacts/quickfacts";
import MiniGraph from "./minigraph/minigraph";
import moment from "moment";
import axios from "axios";
import DistrictCases from "../components/district/view-districts-cases-table"
// import Navigation from "../components/navigation/navigation"
import BurgerNavigation from "./navigation/burger-navigation"

// export default class Home extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       content: ""
//     };
//   }

//   componentDidMount() {
//     UserService.getPublicContent().then(
//       response => {
//         this.setState({
//           content: response.data
//         });
//       },
//       error => {
//         this.setState({
//           content:
//             (error.response && error.response.data) ||
//             error.message ||
//             error.toString()
//         });
//       }
//     );
//   }

//   render() {
//     return (
//       <div className="container">
//         {/* <header className="jumbotron"> */}
//           {/* <h3>{this.state.content}</h3> */}
//         {/* </header> */}
//       </div>
//     );
//   }
// }

import {
  mergeTimeseries,
  preprocessTimeseries,
  parseStateTimeseries,
  parseStateTestTimeseries,
  parseTotalTestTimeseries,
} from '../utils/common-functions';

import React, {useState} from 'react';
import {useEffectOnce} from 'react-use';



function Home(props) {
  const [states, setStates] = useState(null);
 
  const [timeseries, setTimeseries] = useState(null);
  const [covidData, setCovidData] = useState(null);
  // const [recentData, setRecentData] = useState(null);
 

  useEffectOnce(() => {
  
    getStates();
  });


  const getStates = async () => {
    try {
      const [
        {data: statesDailyResponse},
   

      ] = await Promise.all([
        axios.get('https://api.nepalcovid19.org/states_daily.json'),
      

      ]);

      const [
        {data:latest},
        {data: datatimeline},
        {data:covid},
        {data: stateTestData},

      ] = await Promise.all([

        
        axios.get('https://nepalcorona.info/api/v1/data/nepal'),

        axios.get('https://api.nepalcovid19.org/latest_data.json'),
        axios.get("https://data.nepalcorona.info/api/v1/covid"),
        // axios.get('https://api.nepalcovid19.org/latest_data.json'),
        axios.get('https://api.nepalcovid19.org/state_test_data.json'), 

        
      ]);

      setStates(latest);


      const ts = parseStateTimeseries(statesDailyResponse);
      ts['TT'] = preprocessTimeseries(datatimeline.cases_time_series);
      
      // Testing data timeseries
      const testTs = parseStateTestTimeseries(stateTestData.states_tested_data);
      testTs['TT'] = parseTotalTestTimeseries(datatimeline.tested);

      // Merge
      const tsMerged = mergeTimeseries(ts, testTs);
      setTimeseries(tsMerged);
      setCovidData(covid);
    
    
      
    
    } catch (err) {
      console.log(err);
    }
  };


 

  return (
    <div><BurgerNavigation/>
      <div >
            <React.Fragment>
     
      <div className="Home">
       
        <div className="home-left">

        <div className="header fadeInUp" style={{ animationDelay: "1s" }}>
            <div className="actions">
              {covidData && <h5>Updated  {moment(new Date(states.updated_at)).fromNow()}</h5>}
            </div>
          </div>
          {states && <Level data={states}  />}
          {timeseries && <MiniGraph timeseries={timeseries['TT']} />}
       

          
        
        </div>
        <DistrictCases/>
    

  
      </div>
   
    </React.Fragment>
      </div>
    </div>
  );
}

export default Home;
