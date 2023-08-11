# Veralink Smartshield App
Mobile app for interacting with veralink's URL verification services.

## Pre-requisites
If not done already, you would need to:
- Install [Node.js](https://nodejs.org/en/) @latest version
- Set up the development environment by following the ![React Native Docs](https://reactnative.dev/docs/environment-setup?guide=native). This is needed in order to compile the app.

## Getting started
- Clone the repository
```
git clone https://github.com/luisrowley/veralink-smartshield-app
```
- Install dependencies
```
cd veralink-smartshield-app
npm install
```
- Building and testing locally
```
npx react-native start
```

- Start the [Proxy Server](https://github.com/luisrowley/veralink-smartshield) and then the [Smartshield SDK](https://github.com/luisrowley/veralink-smartshield-sdk) server by following the instructions outlined in the docs for testing locally.

## Use cases
1. **QR Code scan** : If testing locally, simply navigate to **`http://localhost:3000/?url=http://localhost:3001`** and aim at the QR Code.

2. **Manual URL setting** : By clicking on "Or enter manually" on the app main screen and then pasting the URL you want to verify.

## Expected outcomes
- If the URL verification was successful it means the endpoint is safe to navigate to, and the user will be automatically redirected in the browser after the QR scan is made.

- Otherwise, the user will get notified that the URL's identity cannot be verified, and they may navigate to it at their own risk.