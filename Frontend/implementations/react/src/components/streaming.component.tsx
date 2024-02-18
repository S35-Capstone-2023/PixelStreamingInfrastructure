import { Component } from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { PixelStreamingWrapper } from './PixelStreamingWrapper';

type Props = {
    // loggedUser: string | null;
    // secretToken: string | null;
};

type State = {
    serverState: string | null;
    messageText: string | null;
    serverMessage: string | null;
    disableButton: boolean | false;
};

var ws = new WebSocket(process.env.api_ws);
// var signallingServer = process.env.sig_ws;

export default class Streaming extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            serverState: '',
            messageText: null,
            serverMessage: null,
            disableButton: false
        };
    }

    componentDidMount() {
        const serverMessagesList: string[] = [];
        ws.onopen = () => {
            this.setState({ serverState: 'Connected to the server' });
            console.log('Connected ! ');
        };
        ws.onclose = (e) => {
            this.setState({
                serverState: 'Disconnected. Check internet or server.'
            });
            console.log('Disconnected ! ');
        };
        ws.onerror = (e) => {
            console.log('Error on connection ' + e);
            this.setState({
                serverState: 'Error while establishing connection '
            });
        };
        ws.onmessage = (e) => {
            serverMessagesList.push(e.data);
            console.log('Message received ! ' + e.data);
            if (e.data.includes('signallingServer')) {
                // need to add error handling
                // var parsedMsg = e.data.split(':')[1].split('"')[1];
                // this.setState({ serverMessage: signallingServer + parsedMsg });
                let signallingServerUrl = JSON.parse(e.data).signallingServer;
                this.setState({
                    serverMessage:
                        'ws://ec2-54-255-92-241.ap-southeast-1.compute.amazonaws.com' // + signallingServerUrl
                });
                ws.close();
            } else {
                console.log('Waiting for session');
            }
        };
    }

    componentWillUnmount() {
        ws.close;
    }

    render() {
        const submitMessage = () => {
            // need to add error handling
            // ws.send(
            //     JSON.stringify({
            //         // user: this.props.loggedUser,
            //         action: 'reqSession'
            //         // bearer: this.props.secretToken
            //     })
            // );
            console.log('message sent !');
        };

        console.log('loading streaming component ! ');
        if (this.state.serverMessage != null) {
            return (
                <div
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <h1>
                        {' '}
                        Signalling Endpoint is: {this.state.serverMessage}{' '}
                    </h1>
                    <PixelStreamingWrapper
                        initialSettings={{
                            AutoPlayVideo: true,
                            AutoConnect: true,
                            ss: this.state.serverMessage,
                            StartVideoMuted: true,
                            HoveringMouse: true
                        }}
                    />
                </div>
            );
        } else {
            return (
                <div
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <h1>
                        {' '}
                        Lets start streaming !{' '}
                        {
                            // this.props.loggedUser
                        }{' '}
                        ----- {this.state.serverState}
                    </h1>

                    <input
                        type="Button"
                        value="Start"
                        onClick={submitMessage}
                    ></input>
                </div>
            );
        }
    }
}
