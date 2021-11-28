import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Agents,
  Listings,
  Login,
  Signup,
  Forgot,
  Agentt,
  Listing,
  Dashboard,
  UserProfile,
  Messages,
  Password,
  AddLisiting,
  AdminListingList,
  AdminAgentsList,
  AgentListing,
} from "./pages";
import React, { useState, useEffect } from "react";

// This is the Buidler EVM network id, you might change it in the buidler.config.js
// Here's a list of network ids https://docs.metamask.io/guide/ethereum-provider.html#properties
// to use when deploying to other networks.
const BUIDLER_EVM_NETWORK_ID = '42'; // kovan network

const App = () => {
  const [address, setAddress] = useState(undefined)

  async function connectWallet() {
    // This method is run when the user clicks the Connect. It connects the
    // dapp to the user's wallet, and initializes it.

    // To connect to the user's wallet, we have to run this method.
    // It returns a promise that will resolve to the user's address.
    const [address] = await window.ethereum.enable()
    setAddress(address)
    // Once we have the address, we can initialize the application.

    // First we check the network
    if (!_checkNetwork()) {
      return;
    }
  }

  // This method checks if Metamask selected network is Kovan
  async function _checkNetwork() {
    if (window.ethereum.networkVersion === BUIDLER_EVM_NETWORK_ID) {
      return true;
    }
    return false;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => (
          <Home {...props} address={address} connectWallet={connectWallet}/>
        )}/>
        {/* <Route exact path="/agents" component={Agents} /> */}
        <Route exact path="/listing" component={Listings} />
        {/* <Route exact path="/agent/:id" component={Agentt} /> */}
        <Route exact path="/property/:id" component={Listing} />
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot-password" component={Forgot} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/change-password" component={Password} />
        <Route path="/add-listing/:id?" component={AddLisiting} />
        <Route exact path="/all-listing" component={AdminListingList} />
        <Route exact path="/all-agents" component={AdminAgentsList} />
        <Route exact path="/mylisting" component={AgentListing} /> */}
      </Switch>
    </Router>
  );
};

export default App;
