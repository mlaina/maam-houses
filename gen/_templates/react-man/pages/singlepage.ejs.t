---
    to: ../app/pages/<%= name %>/<%= mayusname %>Page.js
---
import React from "react";
import User from "../../components/User/User";
import Grid from "@material-ui/core/Grid";
import {updateUser, deleteUser, getUser} from "../../api/UserApi";


class UserPage extends React.Component {
    state = {user: {}};

    async componentWillMount() {
        let user;
        console.log(this.props.match.params);
        if (this.props.match.params !== {}) {
            try{
                const id = this.props.match.params.id;
                user = await getUser(id);
                this.setState({user});
            }catch (error) {
                console.log(error);
            }
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
        let newUser;
        try {
            newUser = await updateUser(user);
            this.setState({newUser});
            console.log(newUser);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        let top = {marginTop:'64px'};
        return (
            <div>
                <Grid container direction="column" justify="space-between"
                      alignItems="stretch" spacing={5} style={top}>
                    <User extended value={this.state.user} onSave={this.handleSave.bind(this, this.state.user)} onDelete={this.handleDelete.bind(this, this.state.user.id)}/>
                </Grid>
            </div>
        );
    }
}

export default UserPage;