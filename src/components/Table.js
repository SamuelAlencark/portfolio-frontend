import React, {Component} from 'react';
import MaterialTable from "material-table";

class Table extends Component {

    render() {
        
        const   { challenges } = this.props;
        
        return (
            <div className='material-table'>
                <MaterialTable
                    columns={[
                        { title: "Name", field: "name" },
                        { title: "Description", field: "description" },
                        { title: "Url", field: "url" },
                        {
                            title: "Repository",
                            field: "repository"
                        },
                        {
                            title: "Difficulty",
                            field: "difficulty"
                        }
                    ]}
                    data={challenges}
                    title=""
                    
                    />
            </div>
        );
    }
}

export default Table;