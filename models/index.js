const User = require('./User');
const Contact = require('./Contact');

User.hasMany(Contact, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Contact.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Contact };
