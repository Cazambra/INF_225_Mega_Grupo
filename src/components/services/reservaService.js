import { api } from './helpers/api.js';

const basePath = 'api';

let config = {
    headers: {
       'Content-Type': 'application/json',
    } 
}

function getAll() { return api.get(`${basePath}/reservas`); }

function show(reservaId) { return api.get(`${basePath}/?id=${reservaId}`); }

function create(data) { return api.post(`${basePath}/reservas`, data,config); }

const reservaService = { getAll, show, create };
export default  reservaService;