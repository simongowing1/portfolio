import {person} from './documents/person'
import {page} from './documents/page'
import {project} from './documents/project'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import video from './objects/video'
import figure from './objects/figure'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  project,
  person,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
  video,
  figure
]
