import React,{useState} from 'react'

const Calculator=()=>{
    const[result,setResult]=useState("");
    const clickHandler=(event)=>{
        setResult(result.concat(event.target.value))
    }

    const clearDisplay=()=>{
        setResult("");
    }
    const delDisplay=()=>{
        setResult(result.slice(0,-1));
    }

    const calcu=()=>{
        setResult(eval(result).toString());
    }
    
    return (
        <div className='calc'>
            <h1>Calculator</h1>
             <input type='text' id='answer' value={result}></input><br></br>
            <button  class="container const"onClick={clearDisplay}value='clear'>clear</button>
            <button  class="container const"onClick={delDisplay}value='del'>del</button>
            <button  class="container const"onClick={calcu}value='='>=</button>
            <button class="container const" onClick={clickHandler}value='/'>/</button><br></br>
            <button onClick={clickHandler}value='7'>7</button>
            <button onClick={clickHandler}value='8'>8</button>
            <button onClick={clickHandler}value='9'>9</button>
            <button onClick={clickHandler}value='*'>*</button><br></br>
            <button onClick={clickHandler}value='4'>4</button>
            <button onClick={clickHandler}value='5'>5</button>
            <button onClick={clickHandler}value='6'>6</button>
            <button onClick={clickHandler}value='+'>+</button><br></br>
            <button onClick={clickHandler}value='1'>1</button>
            <button onClick={clickHandler}value='2'>2</button>
            <button onClick={clickHandler}value='3'>3</button>
            <button onClick={clickHandler}value='0'>0</button></div>
    );}
    export default Calculator




