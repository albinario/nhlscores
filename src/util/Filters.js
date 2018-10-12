
export function getGames(json){
    return json.games.map((game)=>{
        const homeTeamInfo = json.references.teamReferences.filter((team) => { 
            return team.id === game.schedule.homeTeam.id; 
        });

        const awayTeamInfo = json.references.teamReferences.filter((team) => { 
            return team.id === game.schedule.awayTeam.id; 
        });

        return {
            gameId: game.schedule.id,
            homeTeamCity: homeTeamInfo[0].city,
            homeTeamName: homeTeamInfo[0].name,
            homeScore: game.score.homeScoreTotal,
            awayTeamCity: awayTeamInfo[0].city,
            awayTeamName: awayTeamInfo[0].name,
            awayScore: game.score.awayScoreTotal
          }

    }); 

}