import { Component } from 'react';

import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'John' , salary: 800, increase: false, rise:true, id:1},
                {name: 'Alex' , salary: 3000, increase: true, rise:false, id:2},
                {name: 'Yila' , salary: 5000, increase: false, rise:false, id:3}
                ],
                term: ''
        }
        this.maxId = 4;
    }

    addItem = (name,salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            rise:false,
            id: this.maxId++}

        this.setState(({data}) => {
            
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            
            return {
                data:data.filter(item => item.id !== id)
            
            }
        })
    }
    

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0,index), newItem, ...data.slice(index+1)]

        //     return {
        //         data: newArr
        //     }
        // })

         this.setState(({data}) => ({
            data: data.map((item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            }))
        }))
    }

    searhEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    
    
    render() {
        const {data, term} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length
        const visableData = this.searhEmp(data,term)
        return (
            <div className="app">
                <AppInfo
                employees = {employees}
                increased = {increased}/>
    
                <div className="search-panel">
                    <SearchPanel
                    visableData= {visableData}
                    onUpdateSearch= {this.onUpdateSearch}/>
                    <AppFilter/>
                </div>
                    <EmployersList
                        data = {visableData}
                        onDelete={this.deleteItem}
                        onToggleProp={this.onToggleProp}/>
                    <EmployersAddForm
                        onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;