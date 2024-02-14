// Copyright Epic Games, Inc. All Rights Reserved.

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require("webpack");
 //Start : AWS - allowed usage of  environment variables
require('dotenv').config();
//End : AWS - allowed usage of  environment variables

module.exports = merge(common, {
    //Start : AWS - allowed usage of  environment variables
    plugins: [
        new webpack.DefinePlugin({
            
            // Refer cloudformation output : Client ID for Cognito (CognitoClientID)
            'process.env.client_id_cog': JSON.stringify('46543dnc0tqtr3p8v5j7ff10r4'),
            // Refer cloudformation output : Domain URL for Cognito (CognitoDomainURL)
            'process.env.cognito_domain': JSON.stringify('https://unreal.auth.ap-southeast-1.amazoncognito.com'),
            // This information is not available in CloudFromation. Please navigate to AWS Console->Cognito. Click on user pool 'ueauthenticationpool'
            // Click on App Integration tab and scroll down to App client list. Click on App Client Name
            // You should be able to retrieve the client secret from the App client information widget by toggling the
            // show client secret button
            'process.env.client_secret_cog': JSON.stringify('1d1q050b2vhcpek4o3pr3uo0ddu9idv2si3slsa1eabi31v64qka'),
            // Refer cloudformation output : Callback URL for Cognito (CognitoCallBackURL)
            'process.env.callback_uri_cog': JSON.stringify('https://d3f8xlzqrtoe0c.cloudfront.net'),
            // Refer cloudformation output : Web socket endpoint for api server (APIGatewayWSAPI)
            'process.env.api_ws': JSON.stringify('wss://vyo8igzf1d.execute-api.ap-southeast-1.amazonaws.com/production?tokenId=abcd'),
            // Refer cloudformation output : Web socket endpoint for signalling server (SignallingServerWSAPI)
            'process.env.sig_ws': JSON.stringify('wss://signalling-545203809.ap-southeast-1.elb.amazonaws.com?'),
            // No need to change this. If you modify, make sure you also update clientSecret environment variable for requestSession lambda
            'process.env.sec_token': JSON.stringify(''),
            
            
    })
  ],
  //End : AWS - allowed usage of  environment variables
    mode: 'development',
    devtool: 'inline-source-map'
});
