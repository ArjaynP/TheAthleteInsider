const url2 = 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2023&conference=west';
const options2 = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'your api key here',
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
    }
};

async function fetchData2() {
    try {
        const response = await fetch(url2, options2);
        const result = await response.json();
        console.log(result); 
        displayStandings2(result.response); 
    } catch (error) {
        console.error(error);
    }
}

function displayStandings2(data) {
    const tableBody = document.querySelector(".standingsTable2 tbody");
    tableBody.innerHTML = ""; 

    data.sort((a, b) => a.conference.rank - b.conference.rank);

    data.forEach(team => {
        if (team.team.name === "Oklahoma City Thunder") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500/okc.png";
        } else if (team.team.name === "Denver Nuggets") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500-dark/den.png";
        } else if (team.team.name === "Minnesota Timberwolves") {
            team.team.logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/min.png";
        } else if (team.team.name === "LA Clippers") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500/lac.png";
        } else if (team.team.name === "Dallas Mavericks") {
            team.team.logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/dal.png";
        } else if (team.team.name === "Phoenix Suns") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500/phx.png";
        } else if (team.team.name === "New Orleans Pelicans") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500/no.png";
        } else if (team.team.name === "Los Angeles Lakers") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500/lal.png";
        } else if (team.team.name === "Sacremento Kings") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500/mia.png";
        } else if (team.team.name === "Golden State Warriors") {
            team.team.logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/gs.png";
        } else if (team.team.name === "Houston Rockets") {
            team.team.logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/hou.png";
        } else if (team.team.name === "Utah Jazz") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500-dark/utah.png";
        } else if (team.team.name === "Memphis Grizzlies") {
            team.team.logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mem.png";
        } else if (team.team.name === "San Antonio Spurs") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500-dark/sa.png";
        } else if (team.team.name === "Portland Trail Blazers") {
            team.team.logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/por.png";
        }
        
        const row = document.createElement("tr");

        row.innerHTML = `
            <td style="width: 10px;">${team.conference.rank}</td>
            <td style="display: flex; align-items: center; line-height: 1.5; padding: 6px 0;">
                <img src="${team.team.logo}" alt="${team.team.name}" width="30" height="30" style="margin-right: 2px;">
                <span>${team.team.name}</span>
            </td>
            <td>${team.conference.win}</td>
            <td>${team.conference.loss}</td>
            <td class="winpercentage">${(team.conference.win / (team.conference.win + team.conference.loss)).toFixed(3)}</td>
            <td class=""streak">${team.streak} ${team.winStreak ? 'W' : 'L'}</td>
        `;

        tableBody.appendChild(row);
    });
}


fetchData2();