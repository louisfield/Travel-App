import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal'
import classes from './ListHandler.css'
import Auxillary from '../../HOC/Auxillary'
import axios from "axios";
const testItems =[
    {
      id: 1,
      title: 'engerland',
      country: 'test',
      description: 'test test',
      time: '2021-06-24',
      complete: false
    },
    {
      id: 2,
      title: 'engerland2',
      country: 'test',
      description: 'test test',
      time: '2021-06-24',
      complete: false
    },
    {
      id: 3,
      title: 'engerland3',
      country: 'test',
      description: 'test test',
      time: '2021-06-24',
      complete: false
    },
    {
      id: 4,
      title: 'engerland4',
      country: 'test',
      description: 'test test',
      time: '2021-06-24',
      complete: false
    }
  ];

class ListHandler extends Component{

    state = {
        viewComplete: false,
        entryList: [],
        modal: false,
        activeItem: {
            title: "test",
            description: "testtest",
            complete: false,
        }
    }
    componentDidMount() {
        this.djangoRefresh();
      }
    djangoRefresh = () => {
        axios
            .get("/api/entrys")
            .then((res) => this.setState({ entryList: res.data}))
            .catch((err) => console.log(err));
    };
    createEntry = () => {
        const item = { title: "test", description: "testest", completed: false};
        this.setState({activeItem: item, modal: !this.state.modal})
    }
    displayCompleteEntries = (selected) => {
        if(selected){
            return this.setState({viewComplete: true})
        } else {
            return this.setState({viewComplete: false})
        }
    };
    renderList = () => {
        return (
            <div className="nav nav-tabs ">
                <span className={this.state.viewComplete ? "nav-link" : "nav-link active rounded-pill "} onClick={() => this.displayCompleteEntries(false)}> Incomplete </span>
                <span className={this.state.viewComplete ? "nav-link active rounded-pill" : "nav-link"} onClick={() => this.displayCompleteEntries(true)}> Complete </span>
            </div>
        )
    }
    handleChange = (e) => {
        let { name, value } = e.target;
    
        if (e.target.type === "checkbox") {
          value = e.target.checked;
        }
    
        const activeItem = { ...this.state.activeItem, [name]: value };
    
        this.setState({ activeItem });
        console.log(this.state.activeItem)
      };
    submit = () => {
        console.log(this.state.activeItem)
        if(this.state.activeItem.id){
            axios
            .put("http://localhost:8000/api/entrys/"+this.state.activeItem.id+"/",this.state.activeItem)
            .then((res) => this.djangoRefresh())
        } else{

        
        axios
            .post("http://localhost:8000/api/entrys/",this.state.activeItem)
            .then((res) => this.djangoRefresh())
        }
        
        this.setState({ modal: false})
        
       
    }
    renderItems = () => {
      
        const newItems = this.state.entryList.filter( (item) => item.complete === this.state.viewComplete);
        console.log(newItems)
        return newItems.map((item) => (
        
            <tr
                key={item.id}
                >
              
                    
                    
                        <td>{item.title} </td>
                        <td>{item.country}</td>
                        <td>{item.time}</td>
                        <td>{item.complete ? "Complete" : "False"}</td>
                    
                <span>
                    <button className="btn btn=-seconday mr-2" onClick={() => this.editEntry(item)}> Edit </button>
                    <button className="btn btn-danger" onClick={() => this.deleteEntry(item)}> Delete </button>
                </span>
            </tr>
          
        ))

    }
    backdropCancelHandler = () => {
        this.setState({modal: false});
    }
    editEntry = (item) => {
        this.setState({modal : true, activeItem: item})
    }
    deleteEntry = (item) => {
        axios
            .delete('http://localhost:8000/api/entrys/'+item.id+'/' , item)
            .then((res) =>  this.djangoRefresh());
        const newItems = this.state.entryList.filter( (obj) => obj.id != item.id);
        
        this.state.entryList = newItems
    }
    render() {
        
        return (
            <Auxillary>
                { this.state.modal ? <Modal
                    show={this.state.modal}
                    closeModal={this.backdropCancelHandler}
                    activeItem={this.state.activeItem}
                    handleChange={this.handleChange}
                    submit={this.submit}
                    >
                       
                    </Modal> : null}
                
                
                <div className="Table pt-5" >
                {this.renderList()}
                </div>
                {this.state.entryList.filter( (item) => item.complete === this.state.viewComplete).length ? 
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Country</th>
                        <th>Time</th>
                        <th>Completed?</th>
                    </tr>
                    {this.renderItems()}
                </table>
                : null}
                
                <div className="d-flex justify-content-center">
                <button className="btn btn-primary bg-success btn-lg btn-block w-25 rounded-pill" onClick={this.createEntry}> Add Entry</button>
                </div>
                
            
                
            
             
            </Auxillary>
        )
    }

}
export default ListHandler;