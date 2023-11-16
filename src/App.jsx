import styles from './App.module.css'
import Screen from './components/screen';
import Buttons from './components/Buttons';
import { useState } from 'react';

const App = () => {

    const data=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

    const [currentData,setcurrentData]=useState('');

    const onClickButton = (items)=>
    {
      if(items==='C')
      {
        setcurrentData('');
      }
      else if(items==='=')
      {
        const newData=eval(currentData);

        setcurrentData(newData);
      }else{
        const newData=currentData+items;
        setcurrentData(newData);
      console.log(items);}
    }
  return(<center>
    <div className={styles.calculator}>
    
    <Screen screenData={currentData}/>
    <Buttons data={data}
    onclickbutton={onClickButton}
    />
    
</div>
  </center>);
}

export default App;