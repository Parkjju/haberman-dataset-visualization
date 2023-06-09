import axios from 'axios';

// axios.defaults.baseURL = 'https://survival-analysis.site/';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

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

export const fetchKaplanData = () => {
    return axios.get('/patients/kaplan/');
};

export const fetchKaplanData2 = () => {
    return axios.get('/patients/kaplan2/');
};

export const fetchSummary = () => {
    return axios.get('/patients/summary/');
};
