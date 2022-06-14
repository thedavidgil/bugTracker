module.exports = (sequelize,DataTypes) =>{

  let alias = "Project";
  let cols = {
    project_id:{
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    projet_name:{
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    }
  };
  let config = {
    timestamps: false,
    deletedAt: false
  };

  const Project = sequelize.define(alias,cols,config);

  Project.associate = function(models){

    Project.hasMany(models.Ticket,{
      as: "Tickets",
      foreignKey: "ticket_id"
    });
  
    Project.belongsToMany(models.User,{ 
      as: "Users",
      through: 'project_user',
      foreignKey: 'project_id',
      otherKey: 'user_id',
      timestamps: false
    });

  }
  
  return Project;
  
}