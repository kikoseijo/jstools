import Jsona from 'jsona';

const json = {
  data: {
    type: 'town',
    id: '123',
    attributes: {
      name: 'Barcelona'
    },
    relationships: {
      country: {
        data: {
          type: 'country',
          id: '32'
        }
      }
    }
  },
  included: [
    {
      type: 'country',
      id: '32',
      attributes: {
        name: 'Spain'
      }
    }
  ]
};

const dataFormatter = new Jsona();

// const newJson = dataFormatter.serialize(json);
const town = dataFormatter.deserialize(json);

console.log(town);
