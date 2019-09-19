module.exports = {
  title: 'Cosmos SDK Tutorials',
  description: 'Get started building with the Cosmos SDK by following these tutorials.',
  ga: '',
  dest: './dist',
  base: '/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'cosmos/sdk-tutorials',
    editLinks: true,
    docsDir: '',
    docsBranch: 'master',
    editLinkText: 'Edit this page on Github',
    lastUpdated: true,
    nav: [
      { text: 'Back to Cosmos', link: 'https://cosmos.network' },
      { text: 'SDK Documentation', link: 'https://cosmos.network/docs' }
    ],
    sidebar: [
      {
        title: 'Hellochain',
        collapsable: true,
        children: [
          '/hellochain/tutorial/00-intro.md',
          '/hellochain/tutorial/01-simple-app.md',
          '/hellochain/tutorial/02-simple-start.md',
          '/hellochain/tutorial/03-make.md',
          '/hellochain/tutorial/04-try-it-out.md',
          '/hellochain/tutorial/10-types.md',
          '/hellochain/tutorial/11-module.md',
          '/hellochain/tutorial/12-msgs.md',
          '/hellochain/tutorial/13-handler.md',
          '/hellochain/tutorial/14-keeper.md',
          '/hellochain/tutorial/15-querier.md',
          '/hellochain/tutorial/16-client.md',
          '/hellochain/tutorial/17-cli.md',
          '/hellochain/tutorial/18-full-cmd.md',
          '/hellochain/tutorial/19-full-app.md',
          '/hellochain/tutorial/20-complete.md'

        ]
      },
      {
        title: 'Nameservice',
        collapsable: true,
        children: [
          '/nameservice/tutorial/00-app-design',
          '/nameservice/tutorial/01-app-init',
          '/nameservice/tutorial/02-keeper',
          '/nameservice/tutorial/03-msg-handlers',
          '/nameservice/tutorial/04-set-name',
          '/nameservice/tutorial/05-buy-name',
          '/nameservice/tutorial/06-queriers',
          '/nameservice/tutorial/07-codec',
          '/nameservice/tutorial/08-cli',
          '/nameservice/tutorial/09-rest',
          '/nameservice/tutorial/10-app-complete',
          '/nameservice/tutorial/11-entrypoint',
          '/nameservice/tutorial/12-build-run',
          '/nameservice/tutorial/13-run-rest'
        ]
      }
    ]
  }
}
