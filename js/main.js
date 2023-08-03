document.querySelector('button').addEventListener('click', getGames)

let date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()

let today = ''

if (month < 10 && day < 10) {
    today = `${year}-0${month}-0${day}`
} else if (month >= 10 && day < 10) {
    today = `${year}-${month}-0${day}`
} else if (month < 10 && day >= 10) {
    today = `${year}-0${month}-${day}`
} else {
    today = `${year}-${month}-${day}`
}


document.querySelector('input').value = today
getGames();

const teams = [
    {
        name: 'New York Giants',
        image: './images/Rob Carr-Getty Images.jpg'
    },
    {
        name: 'New York Jets',
        image: './images/Vincent Carchietta-USA TODAY Sports.jpg'
    },
    {
        name: 'New York Knicks',
        image: './images/chow.jpg'
    },
    {
        name: 'New York Nets',
        image: './images/Mikal.jpg'
    },
    {
        name: 'New York Yankees',
        image: './images/Jeter.jpg'
    },
    {
        name: 'New York Mets',
        image: './images/STIER-GETTY IMAGES.jpeg'
    },
    {
        name: 'New York Rangers',
        image: './images/msg.jpg'
    },
    {
        name: 'New York Islanders',
        image: './images/Bruce Bennett-GettyImages.jpg'
    },
    {
        name: 'New York Red Bulls',
        image: './images/Thierry_Henry_control_New_York_Red_Bulls_2010.jpg'
    },
    {
        name: 'New York City FC',
        image: './images/Talles-magno.jpeg'
    },
]

let teamIndex = 0

function startSlideShow() {
    teamIndex < 9 ? teamIndex++ : teamIndex = 0
    const image = document.querySelector('img')

    image.src = teams[teamIndex].image
}

setInterval(startSlideShow, 3000)

function getGames() {
    let date = document.querySelector('input').value

    // Get NFL Games


    // Get NBA Games
    fetch(`https://www.balldontlie.io/api/v1/games?team_ids[]=3&team_ids[]=20&dates[]=[${date}]`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if(data.meta.total_count == 0){
                document.querySelector('#nba-list').innerText = 'None'
            } else if(data.meta.total_count == 1) {
                const game = data.data[0]
                document.querySelector('#nba-list').innerText = game.home_team.abbreviation + ': ' + game.home_team_score + ' vs. ' + game.visitor_team.abbreviation + ': ' + game.visitor_team_score
            } else {
                const game1 = data.data[0]
                const game2 = data.data[1]

                document.querySelector('#nba-list').innerText = game1.home_team.abbreviation + ': ' + game1.home_team_score + ' vs. ' + game1.visitor_team.abbreviation + ': ' + game1.visitor_team_score + "\n" + game2.home_team.abbreviation + ': ' + game2.home_team_score + ' vs. ' + game2.visitor_team.abbreviation + ': ' + game2.visitor_team_score
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

    // Get MLB Games


    // Get NHL Games


    // Get MLS Games




    console.log(date)
}