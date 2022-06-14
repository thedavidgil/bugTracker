module.exports = (sequelize,DataTypes) =>{
  
  let alias = "Role";
  let cols = {
    role_id:{
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    role:{
      type: DataTypes.STRING(100),
      allowNull: false
    }
  };
  let config = {
    timestamps: false,
    deletedAt: false
  };

  const Role = sequelize.define(alias,cols,config);

  Role.associate = function(models){

    Role.hasMany(models.User,{
      as: "users",
      foreignKey: "role_id"
    })
    
  }

  return Role;
  
}