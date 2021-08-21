import React, { useState } from 'react'
import people from "./data"
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'
function Review() {
    const [index,setIndex]=useState(0);
    const {id,name,job,image,text}=people[index];
    const checkNumber=(number)=>{
        if(number > people.length-1){
            return 0;
        }
        if(number <0){
            return people.length-1;
        }
        return number;
    }
    const randomCheck=()=>{
        let randomNumber=Math.floor(Math.random()*people.length);
        if(randomNumber===index){
            randomNumber=index+1;
        }
        setIndex(checkNumber(randomNumber))
    }
    const nextPerson=()=>{
        setIndex(prevIndex => {
           return  checkNumber(prevIndex-1)
            
        })
    }
    const prevPerson=()=>{
        setIndex(nextIndex =>{
            return checkNumber(nextIndex+1)
        })
    }
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name}  className="person-img"/>
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <div className="author">{name}</div>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <div className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </div>
                <div className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </div>
            </div>
            <div className="random-btn" onClick={randomCheck}>
                   suprise me
            </div>
        </article>
    )
}

export default Review
