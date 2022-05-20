import { gql, ApolloServer } from 'apollo-server';

const persons = [
  {
    id: 1,
    name: 'Leanne Graham',
    age: 18,
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    age: 45,
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    age: 32,
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
    website: 'ramiro.info',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    age: 17,
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',

    phone: '493-170-9623 x156',
    website: 'kale.biz',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    age: 27,
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    phone: '(254)954-1289',
    website: 'demarco.info',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    age: 40,
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    age: 34,
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    phone: '210.067.6132',
    website: 'elvis.io',
  },
];

const typeDefs = gql`
  type Person {
    id: ID!
    name: String!
    username: String!
    email: String!
    phone: String
    website: String
    employee: String!
    legalAge: Boolean!
  }

  type Query {
    personCount: Int!
    allPersons: [Person]!
    findPerson(username: String!): Person
  }
`;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
    findPerson: (_root, args) => {
      const { username } = args;
      return persons.find((person) => person.username === username);
    },
  },
  Person: {
    email: (root) => `${root.email}, ${root.phone}`,
    employee: () => 'yes',
    legalAge: (root) => root.age >= 18,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
