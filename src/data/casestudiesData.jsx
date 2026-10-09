import { MdOutlineFactory } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";




const casestudiesBtns= [
   {id:1 ,title: 'All Projects' , index:true} , 
   {id:2 ,title: 'Strategy & Growth' , index:false} , 
   {id:3 , title:'Operational Excellence', index:false} , 
    {id:4 , title:'Organizational Development', index:false} , 
   {id:5 , title: 'Process Optimization', index:false }, 
    {id:6 , title:'Change Management' , index:false}
] 





const casestudiesTable = [
         {id:'01', img:'dist/assets/img3-DWe2NzUF.png'
         ,shortTitle:'STRATEGY & TRANSFORMATION' , longTitle:'Industrial Group Strategy Transformation' , 
         description:'Helped a leading industrial group redefine its corporate strategy, optimize portfolio and build a clear growth roadmap for the next 5 years.' , type:'Manufacturing' , typeIcon:<MdOutlineFactory /> , loc:'Middle East' , locIcon:<CiLocationOn /> , firstNum:'25%' , firstTitle:'Review Growth (3years)'  ,
          secoundNum:'18%' , secoundTitle:'Cost Reduction' , thirdNum:'2.3x' , thirdTitle:'Return on Investment'} , 


         {id:'02', img:'dist/assets/img4-DodD54tT.png'
         ,shortTitle:'OPERATIONAL EXCELLENCE' , longTitle:'Process Optmization in Steel Complex' , 
         description:'Redesigned core production processes and implemented performance management systems to improve efficiency and reduce waste.' , type:'Steel Industry' , typeIcon:<MdOutlineFactory /> , loc:'Asia' , locIcon:<CiLocationOn /> 
          , firstNum:'30%' , firstTitle:'Increase in Productivity'  ,
          secoundNum:'22%' , secoundTitle:'Reduction in Costs' , thirdNum:'15%' , thirdTitle:'Improvement in Quality'
         }, 


         {id:'03', img:'dist/assets/img5-BqCzuzBb.png'
         ,shortTitle:'ORGANIZATIONAL DEVELOPMENT' , longTitle:'Culture Transformation Program' , 
         description:'Partnered with leadership to build a high-performance culture through leadership development, engagement strategies and change initiatives. ' , type:'Diversified Holding' , typeIcon:<MdOutlineFactory /> , loc:'Middle East' , locIcon:<CiLocationOn /> 
          , firstNum:'40%' , firstTitle:'Increase in Employing Engangement '  ,
          secoundNum:'35%' , secoundTitle:'Leadership Effectiveness' , thirdNum:'20%' , thirdTitle:'Reduction in Turnover'
         }, 
         {id:'04', img:'dist/assets/manufacturing-dashboard-1400x1100.jpg'
         ,shortTitle:'DIGITAL & PROCESS OPTIMIZATION' , longTitle:'Digital Transformation Roadmap' , 
         description:'Developed and executed a digital transformation roadmap , automating key process and enabling data-driven decision making.' ,type: 'Financial Services', typeIcon:<MdOutlineFactory /> , loc:'Europe' , locIcon:<CiLocationOn /> 
          , firstNum:'50%' , firstTitle:'Faster Process Execution'  ,
          secoundNum:'28%' , secoundTitle:'Operational Efficiency Gain' , thirdNum:'100%' , thirdTitle:'Data Visibility Improvement'
         }, 

         
         {id:'05', img:'dist/assets/growth-chart-1400x1100.jpg'
         ,shortTitle:'SALES & GROWTH STRATEGY' , longTitle:'Go-to-Market Strategy & Growth Acceleration' , 
         description:'Designed and executed a go-to-market strategy that expanded market share and significantly increased top-line growth.' ,type: 'Construction', typeIcon:<MdOutlineFactory /> , loc:'Middle East' , locIcon:<CiLocationOn /> 
          , firstNum:'35%' , firstTitle:'Market Share Growth'  ,
          secoundNum:'2.1x' , secoundTitle:"Sale 's Growth"   , thirdNum:'3.4x' , thirdTitle:'Pipeline Growth'
         }, 
]




export {casestudiesTable ,casestudiesBtns}