import createStore from 'redux-zero';
import axios from 'axios';

const store = createStore({ results: [], loadingResults: false, deviceId: '' });

const mapToProps = ({ results, loadingResults, deviceId }) => ({ results, loadingResults, deviceId });

const actions = ({ setState }) => ({
    getResults(state, value) {
        setState({ loadingResults: true });
        return axios.post(
            'http://workshop-ava.azurewebsites.net/api/Camera/RecognizeImage', 
            value
        )
        .then(response => {
            var data = JSON.parse(response.data);
            var product = data.Products[0];
            var result = {
                name: product.Name,
                description: product.Products[0].FullDescription,
                price: product.Products[0].Price
            };
            var results = [{ image: value, product: result }].concat(state.results);
            return { results: results, loadingResults: false, deviceId: state.deviceId };
        })
        .catch(error => {
            var results = [{ image: value, product: null }].concat(state.results);
            return { results: results, loadingResults: false, deviceId: state.deviceId };
        })
    },
    setDeviceId(state, value) { return { results: state.results, loadingResults: state.loadingResults, deviceId: value } }    
});

export { store, mapToProps, actions };
