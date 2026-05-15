import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: 'send-contact-email',
      event: {
        on: ['create'],
        filter: '_type == "contactSubmission"',
      },
    }),
  ],
})