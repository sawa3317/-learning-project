import { Component } from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            placeholderText: 'Как его зовут?',
            placeholderNum: 'З/П в $?'
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        
        e.preventDefault();

        if(this.state.name.length < 2 || this.state.salary.length === 0) {
            this.setState({
                name: '',
                salary: '',
                placeholderText: 'Имя должно быть больше 3 символов',
                placeholderNum: 'Введите хотябы 1 число'
                
            })
        } else {
            this.props.onAdd(this.state.name,this.state.salary)
            this.setState({
                name: '',
                salary: '',
                placeholderText: 'Как его зовут?',
                placeholderNum: 'З/П в $?'
            })
        }
        
        
    }


    render() {
        const {name,salary, placeholderText,placeholderNum} = this.state
        
        return (
            <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder= {placeholderText}
                    name='name'
                    value={name}
                    onChange={this.onValueChange} />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder={placeholderNum}
                    name='salary'
                    value={salary}
                    onChange={this.onValueChange} />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
        )
        
    }
}

export default EmployersAddForm;