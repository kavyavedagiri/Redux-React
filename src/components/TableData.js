import React, { Component } from 'react';
import axios from 'axios';
export default class TableData extends Component {
    constructor(){
        super();
        this.state={
            persons:[]
        }
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }
        componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            const persons = res.data;
            this.setState({persons})
            console.log(this.state.persons)
        })
        }
        getKeys = function(){
            return Object.keys(this.props.data[0])
        }
        
        getHeader = function(){
            var keys = this.getKeys();
            return keys.map((key, index)=>{
            return <th key={key}>{key.toUpperCase()}</th>
            })
        }
 
        getRowsData = function(){
            var items = this.props.data;
            var keys = this.getKeys();
            return items.map((row, index)=>{
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
            })
        }
    render() {
        return (
            <div>
              <table>
                  <thead>
                  <tr>{this.getHeader()}</tr>
                  </thead>
                <tbody></tbody>
              </table>
            </div>
        )
    }
}
const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
    })
   }