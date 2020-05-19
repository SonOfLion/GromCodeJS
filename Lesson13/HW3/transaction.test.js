import { transaction } from './transaction';

it('should return currency of transaction', () => {
    const result = transaction.currency;

    expect(result).toEqual('USD');
});
it('should return country of transaction', () => {
    const result = transaction.agent.country;

    expect(result).toEqual('Ukraine');
});
it('should return name of company', () => {
    const result = transaction.agent.company;

    expect(result).toEqual('NYSE');
});