module.exports = (sequelize,DataTypes) => {
  
  let alias = "Ticket";
  let cols = {
    ticket_id:{
      type: DataTypes.INTERGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    ticket_number:{
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    status:{
      type: DataTypes.INTERGER(4).UNSIGNED,
      allowNull: false
    },
    project_id: DataTypes.INTEGER(10).UNSIGNED,
    user_id: DataTypes.INTEGER(10).UNSIGNED,
    submitter_id: DataTypes.INTEGER(10).UNSIGNED
  };
  let config = {
    timestamps: false,
    deletedAt: false
  };

  const Ticket = sequelize.define(alias,cols,config);

  Ticket.associate = function(models){

    Ticket.belongsTo(models.User,{
      as: "users",
      foreignKey: "user_id"
    });

    Ticket.belongsTo(models.User,{
      as: "submitter",
      foreignKey: "submitter_id"
    });

    Ticket.belongsTo(models.Project,{
      as: "Projects",
      foreignKey: "project_id"
    });

  }

  return Ticket;

}