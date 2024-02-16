import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Streaming from './streaming.component';

type Props = {};

type State = {
    redirect: string | null;
    currentuser: string | null;
    secretToken: string | null;
};

export default class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            redirect: '',
            currentuser: null,
            secretToken: ''
        };
    }

    async componentDidMount() {
        // // FE being integrated with Cognito hosted UI, gets a Cognito code on succesful login
        // // the code is being used to get user details and move forward
        // var urlParams = new URLSearchParams(window.location.search);
        // var myParam = urlParams.get('code');
        // const loggedUser =  await AuthService.getCurrentUser(myParam);
        // this.setState({currentuser:loggedUser})
        // // secret token is used later to interface with web socket
        // this.setState({secretToken:AuthService.getSecretToken()})
    }

    componentWillUnmount() {
        // window.location.reload();
    }

    render() {
        //   var currentUser=this.state.currentuser
        //   console.log("this is current user "+currentUser)
        return (
            <Router>
                <Navigate to="/streaming" />
                <Routes>
                    <Route path="/streaming" Component={() => <Streaming />} />
                </Routes>
            </Router>
        );
    }
}
