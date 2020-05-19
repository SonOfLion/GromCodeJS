import { user } from './user';
it('should return name of user', () => {
    let result = user.name;

    expect(result).toEqual('Tom');
});
it('should return hobby of user', () => {
    let result = user.hobby;

    expect(result).toEqual('football');
});
it('should check object is object', () => {
    let type = typeof user === 'object';

    expect(type).toEqual(true);
});