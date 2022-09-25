// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import pageInfo from './pageInfo'
import skill from "./skill"
import project from "./project"
import social from './social'
import experience from './experience'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfo,
    skill,
    project,
    social,
    experience
  ]),
})
