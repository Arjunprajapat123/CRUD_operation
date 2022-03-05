import { nanoid } from 'nanoid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function TablePractice() {
    const [name, setname] = useState("")
    const [amount, setamount] = useState("")
    const [id , setid] = useState(nanoid())
    const [details, setdetails] = useState([])

    useEffect(async()=>{
        try {
            const viewdata = await axios.get("http://localhost:8000/getdata")
            setdetails(viewdata.data)
        } catch (error) {
            console.log(error)
        }
    })

    const buttonHandler = async() => {


        setid(nanoid());

        try {
            await axios.post("http://localhost:8000/createdata" , {
                name , amount , id
            })
        } catch (error) {
            console.log(error)
        }

        let data = { name : name, amount : amount , id : id }
        setname("");
        setamount("");

      if(name != ""  && amount != ""){
        setdetails((el)=>{
            return [...el , data]
        })
      }

    }


    const HandleDelete = async(id)=>{
    //   console.log(id)
        try {
            await axios.delete("http://localhost:8000/deletedata" , {data : {id :id}})
        } catch (error) {
            console.log(error)
        }

        let del = details.filter((e)=> id != e.id)
        setdetails(del)
    }

    const HandleEdit = async(id)=>{
        // console.log(it)
        try {
            await axios.post("http://localhost:8000/updatedata" , {name , amount , id})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>
                <input type="text"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                    &nbsp; &nbsp; &nbsp; &nbsp;
                <input type="text"
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => setamount(e.target.value)}
                />
                  &nbsp; &nbsp; &nbsp; &nbsp;

                <Button variant="success" onClick={() => buttonHandler()}> Add input fild </Button>

                <table border="1" width="100%">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        { details.map((txn)=>{
                            return(
                                <tr>
                                    <td>{txn.name}</td>
                                    <td>{txn.amount}</td>
                                    <td><Button variant="danger"  onClick={()=> HandleDelete(txn.id)}> Delete </Button> 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button variant="success" onClick={() => HandleEdit(txn.id) }> Edit </Button></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>

        </>

    )
}
