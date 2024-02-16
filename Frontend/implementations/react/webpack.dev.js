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
            'process.env.client_id_cog': JSON.stringify('63ac5pra1odviq3rh9lm4hb39q'),
            // Refer cloudformation output : Domain URL for Cognito (CognitoDomainURL)
            'process.env.cognito_domain': JSON.stringify('https://unreal.auth.ap-southeast-1.amazoncognito.com'),
            // This information is not available in CloudFromation. Please navigate to AWS Console->Cognito. Click on user pool 'ueauthenticationpool'
            // Click on App Integration tab and scroll down to App client list. Click on App Client Name
            // You should be able to retrieve the client secret from the App client information widget by toggling the
            // show client secret button
            'process.env.client_secret_cog': JSON.stringify('1sfne8ubvmpi4obf0r3pifg8vks898hflrrvgn5rtdhdks6gbiod'),
            // Refer cloudformation output : Callback URL for Cognito (CognitoCallBackURL)
            'process.env.callback_uri_cog': JSON.stringify('https://d1uerqgvyjipbk.cloudfront.net'),
            // Refer cloudformation output : Web socket endpoint for api server (APIGatewayWSAPI)
            'process.env.api_ws': JSON.stringify('wss://923909e9cd.execute-api.ap-southeast-1.amazonaws.com/production?tokenId=abcd'),
            // Refer cloudformation output : Web socket endpoint for signalling server (SignallingServerWSAPI)
            'process.env.sig_ws': JSON.stringify('wss://signalling-503190889.ap-southeast-1.elb.amazonaws.com?'),
            // No need to change this. If you modify, make sure you also update clientSecret environment variable for requestSession lambda
            'process.env.sec_token': JSON.stringify(''),
            
            
    })
  ],
  //End : AWS - allowed usage of  environment variables
    mode: 'development',
    devtool: 'inline-source-map'
});
