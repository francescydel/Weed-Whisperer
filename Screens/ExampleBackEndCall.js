import React from 'react';
import { Button } from 'react-native';
import axios from 'axios';

class ExampleBackEndCall extends React.Component {

  getData = () => {
    axios.get('https://dummy.restapiexample.com/api/v1/employees')
      .then(function (response) {
        // handle success
        
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <Button 
        onPress={this.getData}
        title="Fetch Data"
        color="#841584"
      />
    );
  }
}

export default ExampleBackEndCall;