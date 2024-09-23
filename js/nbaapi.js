const url = 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2023&conference=east';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'your api key here',
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result); 
        displayStandings(result.response); 
    } catch (error) {
        console.error(error);
    }
}

function displayStandings(data) {
    const tableBody = document.querySelector(".standingsTable tbody");
    tableBody.innerHTML = ""; 

    data.sort((a, b) => a.conference.rank - b.conference.rank);

    /* Most of the team logos provided by the API are not updated, so I went ahead and manually updated them myself*/
    data.forEach(team => {
        if (team.team.name === "Boston Celtics") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500/bos.png";
        } else if (team.team.name === "New York Knicks") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500-dark/ny.png";
        } else if (team.team.name === "Milwaukee Bucks") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500-dark/mil.png";
        } else if (team.team.name === "Cleveland Cavaliers") {
            team.team.logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/cle.png";
        } else if (team.team.name === "Orlando Magic") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500/orl.png";
        } else if (team.team.name === "New York Knicks") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500-dark/ny.png";
        } else if (team.team.name === "Indiana Pacers") {
            team.team.logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/ind.png";
        } else if (team.team.name === "Philadelphia 76ers") {
            team.team.logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/phi.png";
        } else if (team.team.name === "Miami Heat") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500/mia.png";
        } else if (team.team.name === "Chicago Bulls") {
            team.team.logo = "https://content.sportslogos.net/logos/6/221/full/chicago_bulls_logo_primary_19672598.png";
        } else if (team.team.name === "Atlanta Hawks") {
            team.team.logo = "https://a2.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fatl.png";
        } else if (team.team.name === "Brooklyn Nets") {
            team.team.logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bkn.png";
        } else if (team.team.name === "Toronto Raptors") {
            team.team.logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/tor.png";
        } else if (team.team.name === "Charlotte Hornets") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500-dark/cha.png";
        } else if (team.team.name === "Washington Wizards") {
            team.team.logo = "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/wsh.png";
        } else if (team.team.name === "Detroit Pistons") {
            team.team.logo = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/det.png";
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

fetchData();