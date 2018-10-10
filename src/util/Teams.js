import Connect from './Connect';

const Teams = {
  getTeamInfo(teamId) {
    return Connect.connectMainAPI().then(jsonResponse => {
      if (jsonResponse) {
        const teamInfo = jsonResponse.references.teamReferences.filter(id => {
          return teamId === id.id;
        });
        return teamInfo[0];



        // (team => {
        //   //console.log(team);
        //   return {
        //     city: team.city,
        //     name: team.name
        //   }
        // });
      }
       }).catch(err => {
         console.log(err);
       });
  }
}

export default Teams;
