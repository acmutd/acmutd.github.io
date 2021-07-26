import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import homepage from './homepage';
import joinpage from './joinpage';
import eventspage from './eventspage';
import sponsorpage from './sponsorpage';
import scholarshippage from './scholarshippage';
import team from './team';
import program from './program';
import project from './project';
import projectlist from './projectlist';
import officer from './officer';
import officerlist from './officerlist';
import imagelist from './imagelist';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    homepage,
    joinpage,
    eventspage,
    sponsorpage,
    scholarshippage,
    team,
    program,
    officer,
    officerlist,
    project,
    projectlist,
    imagelist,
  ]),
});
