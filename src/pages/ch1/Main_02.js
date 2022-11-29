import "./Main_02.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Component = () => {

  const navigate = useNavigate();
  
  const woman = () => {
    document.getElementById('woman').src = '../group-331@2x.png';
    document.getElementById('man').src = '../group-330@2x.png';
    sessionStorage.setItem('user_sex', '여자');
  }

  const man = () => {
    document.getElementById('woman').src = '../Group 325.png';
    document.getElementById('man').src = '../Group 330.png';
    sessionStorage.setItem('user_sex', '남자');
  } 

  const storystart = () => {
   if(sessionStorage.getItem('user_sex') != null){
    navigate('/ch1start')
   }else{
    alert('성별을 선택해주세요');
   }
  }

  return (
    <div className="div-main2">
      <div className="rectangle-div-main2" />
      <img className="group-icon38-main2" alt="" src="../group-3285.svg" onClick={storystart}/>
      <img className="group-icon39-main2" alt="" src="../group-323.svg" />
      <img className="group-icon40-main2" id='woman' alt="" src='../Group 325.png' onClick={woman}/>
      <img className="group-icon41-main2" id='man' alt="" src='../group-330@2x.png' onClick={man}/>
    </div>
  );
};

export default Component;
