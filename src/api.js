import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export const fetchGraphData = () => {
    return axios.get('/patients/random');
};

export const fetchPredictedData = ({ queryKey }) => {
    const [_, age, operation_year, nb_pos_detected, surv] = queryKey;
    return axios.get('/patients/predict/', {
        params: {
            age,
            operation_year,
            nb_pos_detected,
            surv: surv ? 1 : 2,
        },
    });
};
