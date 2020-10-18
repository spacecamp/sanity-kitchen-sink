export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8b9db8084e2f3974a81a4e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qveks7mm',
                  apiId: '3b9f2591-754b-44d9-acc2-dae3b7f02118'
                },
                {
                  buildHookId: '5f8b9db90adf04014915833a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xyu55e5p',
                  apiId: '65dadd87-1274-4ec4-b4d6-94aec107c6ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spacecamp/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xyu55e5p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
