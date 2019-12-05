import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isLoading: true,
    users: [],
    error: null
    }
  }
  
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({
        users: data,
        isLoading: false,
      })
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({ error, isLoading: false }));
  }
 
 render(){
   const { isLoading, users, error} = this.state;
   return(
     <div class="counter">
      <React.Fragment>
      <h1>Fetch Users from API</h1>
      {error ? <p>{error.message}</p> : null}

      {!isLoading ? (
        users.map(user => {
          const { username, name, email } = user;
          return (
            <div key={username}>
              <p>Name: {name}</p>
              <p>Email Address: {email}</p>
              <hr />
            </div>
          );
        })
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>Loading...</h3>
      )}
    </React.Fragment>

     </div>
   )
 }

}