"use strict"

const axios = require('axios')
const { Favorite } = require('../models')

class Football {
    static getLeague(req, res, next) {
        axios({
            methods: 'get',
            url: 'https://api-football-v1.p.rapidapi.com/v2/leagues',
            headers: {
                "X-RapidAPI-Host": process.env.RAPID_HOST,
                "X-RapidAPI-Key": process.env.RAPID_KEY
            }
        })
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getFixtures(req, res, next) {
        const league_id = req.body.league_id
        const date = req.body.date
        console.log(date)
        axios({
            methods: 'get',
            url: `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${league_id}/${date}`,
            headers: {
                "X-RapidAPI-Host": process.env.RAPID_HOST,
                "X-RapidAPI-Key": process.env.RAPID_KEY
            }
        })
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getStandings(req, res, next) {
        const league_id = req.params.id
        axios({
            methods: 'get',
            url: `https://api-football-v1.p.rapidapi.com/v2/leagueTable/${league_id}`,
            headers: {
                "X-RapidAPI-Host": process.env.RAPID_HOST,
                "X-RapidAPI-Key": process.env.RAPID_KEY
            }
        })
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static addToFavorite(req, res, next) {
        const obj = {
            footballTeamAway: req.body.footballTeamAway,
            footballTeamHome: req.body.footballTeamHome,
            footballTeamAwayLogo: req.body.footballTeamAwayLogo,
            footballTeamHomeLogo: req.body.footballTeamHomeLogo,
            due_date: req.body.due_date,
            UserId: req.body.UserId
        }
        Favorite.create(obj)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })

    }
}

module.exports = Football