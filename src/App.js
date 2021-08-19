import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { simpleAction } from './actions/simpleAction'
import DataTable from 'react-data-table-component';


export const columns = [
  { name: "Title",selector: "id"},
  {name: "Name",selector: "name"},
  {name: "username",selector: "username"},
  {name: "phone",selector: "phone"},  
  {name: "website",selector: "website"},
];

class App extends Component {

  constructor(props){
    super(props);
    this.state={
        table_result:{}
    }
  }

 async componentDidMount(){
    const action = [
      this.props.simpleAction()
    ]
    
     await Promise.all(action).then(res=>{
       console.log(this.props.simpleReducer.result)
       this.setState({
         table_result:this.props.simpleReducer.result
       })

     })
      
    }
  render() {
      
      
      return (
        <div className="App">
      
          {/* <Table data={this.state.tableData}/> */}
          <DataTable
          title="USER DATA"
           columns={columns}
           data={this.state.table_result}
          ></DataTable>
         
        
        </div>
        
      );
  }
  
}

const mapStateToProps = state => ({
  simpleReducer:state.rootReducer
})
export default connect(mapStateToProps, {simpleAction})(App);