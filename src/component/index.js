import React from 'react';
import { connect } from 'react-redux';
import FetchUsers from '../action/action_users';
import { bindActionCreators } from 'redux';

class UserList extends React.Component{
    componentWillMount(){
        this.props.FetchUsers();
    }
    renderUserList(){
        return this.props.Users.data.map((User) => {
            return(
                <tr key={User.id}>
                    <td>{User.id}</td>
                    <td>{User.name}</td>
                    <td>{User.username}</td>
                    <td>{User.email}</td>
                    <td>{User.address.street + ',' + User.address.suite + ',' + User.address.city + ',' + User.address.zipcode}</td>
                    <td>{User.phone}</td>
                    <td>{User.website}</td>
                    <td>{User.company.name}</td>
                </tr>
            );   
        });
    }
    render(){
        if(!this.props.Users){
            return false;
        }
        return(
            <div>
                <table className="table table-borderd">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>email</th>
                            <th>address</th>
                            <th>phone</th>
                            <th>website</th>
                            <th>company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserList()}
                    </tbody>
                </table>
            </div>
        );
    };
}

function mapsStateToProps(state){
    return{
        Users: state.Users
    }
}

function mapDespatchToPath(dispatch) {
    return bindActionCreators({FetchUsers},dispatch);
  }

export default connect(mapsStateToProps, mapDespatchToPath)(UserList);