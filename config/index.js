import configValues from './config.json';

const getDbConnection = () => {
    return `mongodb+srv://${configValues.uname}:${configValues.pwd}@nodetodosample.36ng2hi.mongodb.net/?retryWrites=true&w=majority&appName=nodetodosample`;
};

export default getDbConnection;
