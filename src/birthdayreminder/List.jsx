import React from 'react';

const List = ({people}) => {
  const birthdayPeople=people.map((person)=>{
    const {id,name,image,age}=person;
    return <article className="person" key={id}>
      <img src={image} alt="" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  })
  return (
    <>
      <h2>list component</h2>
      {
        birthdayPeople
      }
    </>
  );
};

export default List;