import { nanoid } from 'nanoid'
import "./App.css"
import React, { useState, useEffect } from 'react'

export default function Table() {
    const [name, setname] = useState("")
    const [amount, setamount] = useState("")
    const [id, setid] = useState(nanoid())
    const [trasaction, settrasaction] = useState([])

    const addamount = () => {

        setid(nanoid());

        const amountdetail = { nm: name, amt: amount, uniqid: id }
        setamount("");
        setname("");

        if (name != "" && amount != "") {
            settrasaction((el) => {
                return [...el, amountdetail]
            })
        }

    }

    const HandleDelete = (element) => {
        const newArray = trasaction.filter((e) => e.uniqid != element)
        settrasaction(newArray)
    }

    const HandleEdit = () => {
        <input
            type="text"
            placeholder="Edit Name"
            value={name}

        />
    }



    return (
        <>
            {/* {console.log(amount)} */}
            {/* {console.log(trasaction)} */}
            {/* {console.log(id)} */}

            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)
                    }
                />
                <input
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setamount(e.target.value)
                    }
                />



                <button variant="success" onClick={addamount}> Add Amount </button>

                <table border="1" width="100%">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                        </tr>

                    </thead>

                    <tbody>

                        {trasaction.map((txn) => {
                            return (
                                <tr>

                                    <td>{txn.nm}</td>
                                    <td>{txn.amt}</td>
                                    <td>
                                        <button variant="success" onClick={() => HandleEdit()}> Edit </button>
                                        <button variant="danger" onClick={() => HandleDelete(txn.uniqid)}> Delete </button>
                                    </td>
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


















