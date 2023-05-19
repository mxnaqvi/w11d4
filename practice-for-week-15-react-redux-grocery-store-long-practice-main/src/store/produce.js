import produceData from '../mockData/produce.json';

export const populateProduce = () => {
  return {
    type: 'produce/POPULATE',
    produce: produceData
  };
};

const initialState = {};

export default function produceReducer(state = initialState, action) {
  switch (action.type) {
    case 'produce/POPULATE':
      const newState = {};
      action.produce.forEach(produce => {
        newState[produce.id] = produce;
      });
      return newState;
    default:
      return state;
  }
}
