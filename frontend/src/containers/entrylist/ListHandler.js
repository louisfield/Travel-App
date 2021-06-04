import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Auxillary from '../../HOC/Auxillary'

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
        entryList: testItems,
        modal: false,
        activeItem: {
            title: "test",
            description: "testtest",
            completed: false,
        }
    }
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
            <div className="nav nav-tabs">
                <span className={this.state.viewComplete ? "nav-link" : "nav-link active"} onClick={() => this.displayCompleteEntries(false)}> Incomplete </span>
                <span className={this.state.viewComplete ? "nav-link active" : "nav-link"} onClick={() => this.displayCompleteEntries(true)}> Complete </span>
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
      };

    renderItems = () => {
        const newItems = this.state.entryList.filter( (item) => item.complete === this.state.viewComplete);
        return newItems.map((item) => (
            <div>
            <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center">
                <span
                    
                    title={item.description}
                    >
                        {item.title} 
                        
                    </span>
                <span>
                    <button className="btn btn=-seconday mr-2"> Edit </button>
                    <button className="btn btn-danger"> Delete </button>
                </span>
            </li>
            </div>
        ))

    }
    backdropCancelHandler = () => {
        this.setState({modal: false});
    }
    render() {
        return (
            <Auxillary>
                { this.state.modal ? <Modal
                    show={this.state.modal}
                    closeModal={this.backdropCancelHandler}
                    activeItem={this.state.activeItem}
                    handleChange={this.handleChange}
                    >
                       
                    </Modal> : null}
                

                <button className="btn btn-primary" onClick={this.createEntry}> Add Entry</button>
                {this.renderList()}
                <ul className="list-group list-group-flush border-top-0">
                    {this.renderItems()}
                </ul>
            
                
            
             
            </Auxillary>
        )
    }

}
export default ListHandler;