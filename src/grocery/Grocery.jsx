import React, { useEffect, useState } from 'react'
import Alert from './Alert';
import List from './List'
const getLocalStorage=()=>{
    return localStorage.getItem("lists")?JSON.parse(localStorage.getItem("lists")):[]
}
function Grocery() {
    const [name,setName]=useState('');
    const [lists,setLists]=useState(getLocalStorage());
    const [editId,setEditId]=useState(null);
    const [isEditing,setIsEditing]=useState(false);
    const [alert,setAlert]=useState({show:false,msg:"",type:""});
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name){
            alertCondition(true,"Please Enter a grocery","danger");
        }else if(name && isEditing){
            let newEditList=lists.map(item =>{
                if(item.id===editId){
                    item.title=name;
                }
                return item;
            })
            setLists([...newEditList]);
            setIsEditing(false);
            setEditId(null);
            alertCondition(true,"value changed","success")
            
        }else{
            alertCondition(true,"Added To Item","success")
            const newList={id:new Date().getTime().toString(),title:name};
            setLists([...lists,newList]);
        }
        setName('')
    }
    const alertCondition=(show=false,msg="",type="")=>{
        setAlert({show,msg,type})
    }
    const clearList=()=>{
        alertCondition("true","Empty List","danger")
        setLists([]);
    }
    const removeItem=(id)=>{
        alertCondition("true","Delete Item","danger")
        const filterLists=lists.filter((list)=>{
            return list.id!==id;
        })
        setLists(filterLists);
    }
    const editItem=(id)=>{
       let editValue=lists.find(item=>item.id===id);
       setIsEditing(true);
       setName(editValue.title);
       setEditId(id)
    }
    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(lists));
    },[lists])
    return (
        <section className="section-center">
            <form className="grocery-form" onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert={alertCondition} lists={lists}/>}
                <h3>Grocery Bud</h3>
                <div className="form-control">
                    <input type="text" className="grocery" placeholder="eg egg..." value={name} onChange={(e)=>setName(e.target.value)}/>
                    <button type="submit" className="submit-btn" >
                        {isEditing?"edit":"submit"}
                    </button>
                </div>
            </form>
            {
                lists.length>0 && <div className="grocery-container">
                <List lists={lists} removeItem={removeItem} editItem={editItem}/>
                <button className="clear-btn" onClick={clearList}>clear items</button>
            </div>
            }
            
        </section>
    )
}

export default Grocery
