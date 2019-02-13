const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Shlomi',
      room: 'NodeJS Development'
    }, {
      id: '2',
      name: 'Moshe',
      room: 'C# Development'
    }, {
      id: '3',
      name: 'Yulia',
      room: 'NodeJS Development'
    }];
  });

  it('Should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Shlomi',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it ('Should remove a user', () => {
    var id = '2';
    var userRemoved = users.removeUser(id);

    expect(userRemoved.id).toBe(id);
    expect(users.users.length).toBe(2);
  });

  it('Should not remove a user', () => {
    var id = '5';
    var userRemoved = users.removeUser(id);

    expect(userRemoved).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('Should find user', () => {
    var id = '1';
    var user = users.getUser(id);

    expect(user.id).toBe(id);
  });

  it('Should not find user', () => {
    var id = '5';
    var user = users.getUser(id);

    expect(user).toBeFalsy();
  });

  it('Should return names for nodejs development', () => {
    var userList = users.getUserList('NodeJS Development');

    expect(userList).toEqual(['Shlomi', 'Yulia']);
  });

  it('Should return names for C# development', () => {
    var userList = users.getUserList('C# Development');

    expect(userList).toEqual(['Moshe']);
  });
});
