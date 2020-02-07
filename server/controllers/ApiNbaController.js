'use strict';

const axios = require('axios');

axios.defaults.baseURL = 'https://www.thesportsdb.com/api/v1/json/1';

class ApiNbaController {
    static listNBATeam(req, res, next) {
        axios({
            url: '/search_all_teams.php',
            method: 'get',
            params: {
                l: 'NBA'
            }
        })
        .then(({ data }) => {
            console.log('listNBATeam response ', data)
            res.status(200).json(data)
        })
        .catch(error => {
            console.log('listNBATeam error :', error)
        })
    }

    static listNBASeason(req, res, next) {
        axios({
            url: '/search_all_seasons.php',
            method: 'get',
            params: {
                id: '4387'
            }
        })
        .then(({ data }) => {
            console.log('listNBASeason response ', data)
            res.status(200).json(data)
        })
        .catch(error => {
            console.log('listNBASeason error :', error)
        })
    }

    static listNBANext15Events(req, res, next) {
        axios({
            url: '/eventsnextleague.php',
            method: 'get',
            params: {
                id: '4387'
            }
        })
        .then(({ data }) => {
            console.log('listNBANext15Events response ', data)
            res.status(200).json(data)
        })
        .catch(error => {
            console.log('listNBANext15Events error :', error)
        })
    }

    static searchNBAEvent(req, res, next) {
        let dateEvent = req.query.dateEvent;
        let fileName = 'NBA_' + dateEvent;
        axios({
            url: '/searchfilename.php',
            method: 'get',
            params: {
                e: fileName
            }
        })
        .then(({ data }) => {
            console.log('searchNBAEvent response ', data)
            res.status(200).json(data)
        })
        .catch(error => {
            console.log('searchNBAEvent error :', error)
        })
    }

    static searchTeam(req, res, next) {
        let teamName = req.query.teamName;

        axios({
            url: '/searchteams.php',
            method: 'get',
            params: {
                t: teamName
            },
        })
        .then(({ data }) => {
            console.log('searchTeam response ', data)
            res.status(200).json(data)
        })
        .catch(error => {
            console.log('searchTeam error :', error)
        })
    }
}

module.exports = ApiNbaController;