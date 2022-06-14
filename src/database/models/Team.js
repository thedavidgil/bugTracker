module.exports = (sequelize,DataTypes) => {
  
  let alias = "Team";
  let cols = {
    team_id:{
      type:DataTypes.INTERGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    team_name:{
      type: DataTypes.STRING(100),
      allowNull: false
    }
  };
  let config = {
    timestamps: false,
    deletedAt: false
  };

  const Team = sequelize.define(alias,cols,config);

  Team.associate = function(models){

    Team.hasMany(models.User,{
      as: "users",
      foreignKey: "team_id"
    })
    
  }

  return Team;

}