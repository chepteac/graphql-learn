const graphql = require('graphql');
const axios = require('axios');

const {GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt} = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    description: {type: GraphQLString},
  },
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    age: {type: GraphQLInt},
    company: {
      type: CompanyType,
      resolve(parentValue) {
        return axios
          .get(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then(({data}) => data);
      },
    },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {id: {type: GraphQLString}},
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then(({data}) => data);
      },
    },
  },
});

module.exports = new GraphQLSchema({query: RootQuery});
