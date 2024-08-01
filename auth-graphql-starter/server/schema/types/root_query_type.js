const graphql = require('graphql');
const {GraphQLObjectType, GraphQLID} = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyFied: {type: GraphQLID},
  },
});

module.exports = RootQueryType;