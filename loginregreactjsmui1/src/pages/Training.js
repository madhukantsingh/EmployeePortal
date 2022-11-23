import { getToken, storeToken } from '../services/LocalStorageService';
import React,{useState,useEffect,useStyles} from 'react'
import ReactPlayer from 'react-player'
import SideBar from "./SideBar";
//import "./Training.css";



const Training =()=> {
    const { access_token } = getToken()
	

	
    
		// const [classes] = useStyles()
		useEffect(() => {
			getProfiles()
		})
		
		const [profiles, setProfiles] = useState([])
	
		let imgLink = ''
	
		let getProfiles = async () => {
			let response = await fetch('http://127.0.0.1:8000/filelist/', {
				method: "GET", headers: {
					          'authorization': `Bearer ${access_token}`,
					        } 
			})
			let data = await response.json()
			// console.log(data[0].profile_image)
			imgLink = 'http://127.0.0.1:8000' + data[0].profile_image
			console.log(imgLink)
		}
			
	
		return (
			<div >
				<SideBar/>
				ProfilesPage
				<img alt='profile' src={imgLink} />
			</div>
		)
	}
	
	
	//  const downloadEmployeeData = () => {
	// 	fetch('http://127.0.0.1:8000/filelist/',{
            
    //         method: 'GET',
    
    //         headers: {
    //           'authorization': `Bearer ${access_token}`,
    //         } 
    //       }
	// 		.then(response => {
                
	// 			response.blob().then(blob => {
	// 				let url = window.URL.createObjectURL(blob);
	// 				let a = document.createElement('a');
	// 				a.href = url;
	// 				a.download = '';
	// 				a.click();
	// 			});
	// 			//window.location.href = response.url;
	// 	}));
        
	// };
	

	// 	return (
	// 		<div id="container">
	// 			<SideBar/>
	// 			   <div>
	// 			<button  className="rollbutton" onClick={() => downloadEmployeeData()}>Submit</button>
	// 			</div>
	// 			{/* <ReactPlayer url='https://www.youtube.com/watch?v=WT8ZUhPKPA4&ab_channel=AnyAudit'/> */}
	// 		</div>
	// 	)
	


export default Training;	

// import React, { Component } from 'react';
// //import { getToken, storeToken } from '../services/LocalStorageService';

// //import '../main/main.css';
//  const { access_token } = getToken()
// class Training extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			name: 'React',
// 			awsApiData: [],
			
// 		};
// 	}
	
	
// 	componentDidMount() {
// 		console.log('app mounted');
// 		/*global fetch */
// 		fetch(`http://127.0.0.1:8000/profilephoto/2`)
// 			.then(data => data.json())
// 			.then(data => this.setState({ awsApiData: data }, () => console.log(data)))
		
// 	}

// 	render() {
// 		const data = this.state.awsApiData;
// 		return (
// 			<div className="main-content container">
// 		 {(data && data.home) &&
// 			<div><h2>{data.home[0].title}</h2><br /><p>{data.home[0].body}</p>
// 			<img src={data.home[0].image} alt="image"></img>
// 			</div>
// 		}    
// 	</div>
// 		);
// 	}
// }
// export default Training;