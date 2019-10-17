import React, { PureComponent } from 'react';

export class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async () =>  {
        const response = await fetch('http://localhost:4000/api/usersForm');
        const users = await response.json();
        this.setState({ users })
    }

    render() {
        const { users } = this.state;

        return (
            
            <div className="mt-5 container">
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}

                <div className="table-responsive">
                    <table className="table table-striped table-sm mt-5">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Id</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                return(
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.fullName}</td>
                                        <td>{user.numberDocument}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>

            </div>


        );
    }
}

export default index;
