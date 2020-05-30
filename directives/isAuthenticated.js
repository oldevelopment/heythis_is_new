/* eslint-disable no-unused-vars */
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql/type/directives';

const IsAuthenticatedDirective = new GraphQLDirective({
  name: 'instrument',
  description:
    'Instrument the time it takes to resolve the field',
  locations: [
    DirectiveLocation.FIELD,
  ],
  args: {
    tag: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'A tag to store in the metrics store'
    }
  },
});
