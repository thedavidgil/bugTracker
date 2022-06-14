module.exports = (sequelize,DataTypes) =>{
  let alias = "User";
  let cols = {

    user_id:{
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },

    name:{
      type: DataTypes.STRING(100),
      allowNull: false
    },

    avatar:DataTypes.STRING(100),

    email:{
      type: DataTypes.STRING(100),
      allowNull: false
    },

    role_id: DataTypes.INTEGER(10).UNSIGNED,

    password:{
      type: DataTypes.STRING(100),
      allowNull: false
    },

    team_id: DataTypes.INTEGER(10).UNSIGNED
  
  };
  let config = {
    timestamps: false,
    deletedAt: false
  };
 
  const User = sequelize.define(alias,cols,config);

  User.associate = function(models){

    User.belongsTo(models.Role,{
      as:"Roles",
      foreignKey:"role_id"
    });

    User.belongsTo(models.Team,{
      as:"Teams",
      foreignKey:"team_id"
    });

    User.hasMany(models.Ticket,{ 
      as: "Tickets", 
      foreignKey: "user_id"
    });

    User.hasMany(models.Ticket,{
      as:"submits",
      foreignKey: "user_id"
    })

    User.belongsToMany(models.Project,{ 
      as: "Projects",
      through: 'project_user',
      foreignKey: 'user_id',
      otherKey: 'project_id',
      timestamps: false
    })

  }

  return User;

}