import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import homepage from './homepage'
import joinpage from './joinpage'
import eventspage from './eventspage'
import team from './team'
import project from './project'
import officer from './officer'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([homepage, joinpage, eventspage, team, officer, project]),
})
