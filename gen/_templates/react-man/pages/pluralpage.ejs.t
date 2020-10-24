---
    to: ../app/pages/<%= name %>/<%= mayuspluralname %>Page.js
---
import React from 'react';
import User from "../../components/User/User";
import {updateUser, getUsers, deleteUser} from "../../api/UserApi";
import Grid from '@material-ui/core/Grid';
import { withStyles, createStyles } from '@material-ui/core';
import Loading from "../../components/common/Loading";
import AddUser from "../../components/User/AddUser";

const styles = (theme) => createStyles({
    root: {
        height: '9000px'
    },

});

class UsersPage extends React.Component {
    state = {users:[]};


    async componentDidMount() {
        try {
            let users = await getUsers();
            console.log(users);
            this.setState({users});
        } catch (error){
            console.log(error);
        }
    }

    async handleDelete(userId) {
        try {
            await deleteUser(userId);
            const users = this.state.users.filter(u => u.id !== userId);
            this.setState({users});
        } catch (error) {
            console.log(error);
        }
    }

    async handleSave(user) {
        try {
            let updatedUser = await updateUser(user);
            const users = this.state.users.map(u => u.id === updatedUser.id ? updatedUser : u);
            this.setState({users});
            console.log(users);
        } catch (error) {
            console.log(error);
        }

    }

    renderUsers(){
        let items = [];
        if(typeof this.state.users !== 'undefined' &&  this.state.users.length > 0){
            items =  this.state.users.map((user, key) =>
                <User key={key} value={user} onSave={this.handleSave.bind(this, user)} onDelete={this.handleDelete.bind(this, user.id)}/>
            );
            return items;
        }else{
            return <Loading />;
        }
    }

    render() {
        let renderUsers = this.renderUsers();
        return (
            <div>
                <Grid container direction="column" justify="space-between"
                      alignItems="stretch" spacing={5}>
        {renderUsers}
        </Grid>
            <AddUser />
            </div>
            );
    }
}

export default  withStyles(styles) (UsersPage);
