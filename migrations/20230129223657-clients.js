module.exports = {
  async up(db, client) {
    db.createCollection('clients');
  },

  async down(db, client) {
    db.createCollection('clients').drop;
  }
};
