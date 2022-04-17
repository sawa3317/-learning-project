

import './app-info.css';

const AppInfo = (props) => {
    
    const {increased, employees} = props
        
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании №</h1>
                <h2>Общие число сотрудников: {employees}</h2>
                <h2>Премию получат: {increased}</h2>
            </div>
        )
    
}

export default AppInfo;