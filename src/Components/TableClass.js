import React, { Component } from "react";  
import "./App.css";


export default class Balance extends Component {

  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      remark: "",
      type:"income",
      transactions: []
    };

  }


  handleClick = () => {
    let amount = this.state.amount
    let remark = this.state.remark
    let type = this.state.type

    if (amount != "" && remark != "") {
      let transactions = [...this.state.transactions]
      transactions.push({  id: nanoid() , amount, remark, type})
      this.setState({ transactions: transactions, amount: "", remark: "" })
    }

  }

  handleDelete = (id) => {
    let transactions = [...this.state.transactions]
    let newArr = transactions.filter(el => el.id != id)
    this.setState({ transactions: newArr })
  }

  summary = ()=>{
    let sum = {income:0, expense:0, balance:0}
    this.state.transactions.forEach(txn=>{

      if(txn.type  == 'income'){
        sum.income += parseInt(txn.amount)
      }else{
        sum.expense += parseInt(txn.amount)
      }

    })
    sum.balance = sum.income - sum.expense
    return sum
  }

  render() {
    return (
      <>
{/* <Toggle id="toggle-default" />
      <Example> </Example> */}
        <div className="row mt-5">
          <div className="col-3">
            <input
              value={this.state.amount}
              onChange={(e) => {
                this.setState({ amount: e.target.value })
              }}
              className="form-control"
              placeholder="Amount"
            />

          </div>
          <div className="col-3">
            <input
              value={this.state.remark}
              onChange={(e) => {
                this.setState({ remark: e.target.value })
              }}
              className="form-control"
              placeholder="Remark"
            />

          </div>

          <div className="col-3">
            <select className="form-control" 
            value={this.state.type} 
            onChange={(e)=>this.setState({type:e.target.value})}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

          </div>

          <div className="col-3">
            <button
              className="btn btn-block btn-primary"
              onClick={this.handleClick}
            >Save</button>
          </div>

          <div className="col-12 mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>remark</th>
                  <th>type</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.transactions.map(txn => {
                    return (<tr key={txn.id}>
                      <td>{txn.amount}</td>
                      <td>{txn.remark}</td>
                      <td>{txn.type}</td>
                      <td>
                        <button className="btn btn-sm btn-danger" onClick={() => {
                          this.handleDelete(txn.id)
                        }}>delete</button>
                      </td>
                    </tr>)
                  })
                }
              </tbody>
            </table>
          </div>

          <div className="col-md-4">
            <div className="alert alert-info d-flex">
                <div className="flex-grow-1">Income</div>
                <div className="flex-grow-1">{this.summary().income}</div>
            </div>

            <div className="alert alert-danger d-flex">
                <div className="flex-grow-1">Expense</div>
                <div className="flex-grow-1">{this.summary().expense}</div>
            </div>

            <div className="alert alert-success d-flex">
                <div className="flex-grow-1">Balance</div>
                <div className="flex-grow-1">{this.summary().balance}</div>
            </div>
          </div>


        </div>
      </>
    );
  }
}