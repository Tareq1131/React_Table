import React, { useState } from 'react'

import "./table.css"

const Table = () => {
        let [array, setArrey] = useState([])
        let [inputdata, setInputdata]= useState({name:'', number:''});
        //for update
        let [index,setIndext]= useState()
        let [bolin,setBolin] = useState(false)

        function data(e){
            setInputdata({...inputdata,[e.target.name]:e.target.value})
        }

        let {name,number}= inputdata;
        function addinputData(){
            if(name==="" && number===""){
                alert('Enter name and Rool number')
            }
            else{
                setArrey([...array,{name,number}])
                console.log('inputData',inputdata)
                // setInputdata({name:'',number: ''})
            }
           
        }
        console.log('total array',array)

//delete row

        function detelebutton(i){
            console.log('delete',i);
            let total= [...array]
            total.splice(i,1)
            setArrey(total)
        }
//update row
        function updatebutton(i){
            let {name,number}= array[i] //this perticuler index no row data should be so we get this index no row data in name or number
            setInputdata({name,number})
            setBolin(true)
            setIndext(i)

        }
//know add data at perticuler index means update it on that index
function updateInfo(){
  let total=[...array]
  total.splice(index,1,{name,number})
  setArrey(total)
  setBolin(false)
  setInputdata({name:'',number: ''})
}

  return (
    <div>
       <input type='text' value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name'  onChange={data}/>
       <input type='number' value={inputdata.number || ""} name='number' placeholder='Enter Number' onChange={data}></input>
       <button onClick={!bolin?addinputData:updateInfo}>{!bolin?`Add data`:`Update data`}</button>

       <br/>

       <table border='1' width='100%'>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Number</td>
                <td>Update</td>
                <td>Delete</td>
            </tr>

            {
                array && array.map(
                    (item, i)=>{
                        return(
                           <tr key={i}>
                            <th>{item.name}</th>   
                            <th>{item.number}</th>   
                            <th><button onClick={()=>updatebutton(i)}>Update</button></th>   
                            <th><button onClick={()=>detelebutton(i)}>Delete</button></th>   
                           </tr> 
                        )
                    }
                )

            }




        </tbody>
       </table>
    </div>
  )
}

export default Table
