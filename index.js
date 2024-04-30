// import express from 'express'
//& same thing we can use import express or const express
// const express = require('express')

require('dotenv').config()
console.log(process.env)

const express = require('express')
const app = express()
const port = 4000
const githubData = {
    "login": "pranay-chhibber",
    "id": 125947775,
    "node_id": "U_kgDOB4HPfw",
    "avatar_url": "https://avatars.githubusercontent.com/u/125947775?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/pranay-chhibber",
    "html_url": "https://github.com/pranay-chhibber",
    "followers_url": "https://api.github.com/users/pranay-chhibber/followers",
    "following_url": "https://api.github.com/users/pranay-chhibber/following{/other_user}",
    "gists_url": "https://api.github.com/users/pranay-chhibber/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/pranay-chhibber/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/pranay-chhibber/subscriptions",
    "organizations_url": "https://api.github.com/users/pranay-chhibber/orgs",
    "repos_url": "https://api.github.com/users/pranay-chhibber/repos",
    "events_url": "https://api.github.com/users/pranay-chhibber/events{/privacy}",
    "received_events_url": "https://api.github.com/users/pranay-chhibber/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Pranay Chhibber",
    "company": null,
    "blog": "https://www.linkedin.com/in/pranay-chhibber",
    "location": null,
    "email": null,
    "hireable": true,
    "bio": "Aspiring software developer and passionate college student with a strong interest in programming.",
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2023-02-21T05:18:20Z",
    "updated_at": "2024-04-30T08:27:55Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter' , (req,res)=>{
    res.send('pranay-chhibber')
})
app.get('/login' , (req,res) =>{
    res.send('<h1>please login</h1>')
})
app.get('/youtube' , (req,res) =>{
    res.send('<h2>Chai aur Code</h2>')
})

app.get('/github' , (req,res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})