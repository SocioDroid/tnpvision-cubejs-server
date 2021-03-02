cube(`AuthUser`, {
  sql: `SELECT * FROM test_db.auth_user`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [firstName, id, lastName, username, dateJoined]
    }
  },
  
  dimensions: {
    email: {
      sql: `email`,
      type: `string`
    },
    
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    dateJoined: {
      sql: `date_joined`,
      type: `time`
    },
    
    lastLogin: {
      sql: `last_login`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
