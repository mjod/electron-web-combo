//import MyInterface from "gui-interface";
import axios from 'axios';
var MyInterface = require("gui-interface").MyInterface;

class WebInterface extends MyInterface {
    /** @inheritdoc */
    async sum(a, b) {
        var response = null;
        try {
            console.log('a')
            response = await axios.get('http://localhost:5000/sum', {
                params: {
                    a: a,
                    b: b
                }
            });
            console.log('b')
            console.log(response);
            response = response.data
            console.log(response)

        } catch (error) {
            console.error(error);
        }
        return response;
    }
}

export default WebInterface;