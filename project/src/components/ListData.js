import React, { useEffect, useRef, useState } from 'react'
import logo from '../logo.svg';
import '../App.css';
import { Button, Card, Form } from 'react-bootstrap';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

let num = 0;
let fnameData;
let lnameData;
const ListData =({ props })=>{   
   const [value, setValue] = useState({ getData: [] });  
   console.log(value.getData) 
    let val = props.qp;    
    const getData = [...value.getData];
    console.log("getData", getData)
    console.log(val)
    console.log(fnameData)
    console.log(lnameData)
    if ((val.firstName && val.lastName != '' && getData == '' )) {       
        console.log("val", val, JSON.stringify(getData))      
        getData.push(val)
        console.log("getData", getData);
        setValue({ getData: getData }) ;
        fnameData = getData[0].firstName;
        lnameData = getData[0].lastName;
    }
    else if(val.firstName != fnameData && val.lastName != lnameData){
        console.log("EIF",val)
        console.log("getData", getData);
        let data1 = new Object(val);
        console.log(data1)
        getData.push(data1)
        //Object.assign({}, obj)
        let numvalue = value.getData.length;
        setValue({ getData: getData }) ;
        fnameData = getData[numvalue].firstName;
        lnameData = getData[numvalue].lastName;
        console.log("else",fnameData)
        console.log("else",lnameData)
    }


    
    
    
  
    return (
        <React.Fragment>
         {JSON.stringify(props)}
        </React.Fragment>
    );
}


export default ListData;



  /**
   * const [value, setValue] = useState({ getData: [] });  
   console.log(value.getData) 
    let val = props.qp;   
    const getData = [...value.getData];
    console.log("getData", getData)
    console.log(val)
    if ((val.firstName && val.lastName != '' && getData == '' )) {       
        console.log("val", val, JSON.stringify(getData))      
        getData.push(val)
        console.log("getData", getData);
        setValue({ getData: getData }) 
    }  
   */


    /**
     * if ((val.firstName && val.lastName != '' && getData == '' )) {       
        console.log("val", val, JSON.stringify(getData))      
        getData.push(val)
        console.log("getData", getData);
        setValue({ getData: finalArray }) ;
        fnameData = getData[0].firstName;
        lnameData = getData[0].lastName;
    }  
    

    else if(val.firstName != fnameData && val.lastName != lnameData){
        console.log("EIF",val)
        getData.push(val)
        console.log("getData", value.getData.length);
        let numvalue = value.getData.length;
        setValue({ getData: getData }) ;
        fnameData = getData[numvalue].firstName;
        lnameData = getData[numvalue].lastName;
        console.log("else",fnameData)
        console.log("else",lnameData)
    }
     */