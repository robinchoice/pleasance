Sentry.init({
  dsn: "https://4681a517a4914ed6b38a0a20aace8142@glitchtip.pleasance.org/7",
  environment: 'production',
  dataCollection: {
    userInfo: false,
    cookies: false,
    httpHeaders: false,
    httpBodies: [],
    urlQueryParams: false,
    graphQL: { document: false, variables: false },
    genAI: { inputs: false, outputs: false },
    databaseQueryData: false,
    queues: false,
    stackFrameVariables: false,
    frameContextLines: 0,
  },
  maxBreadcrumbs: 0,
  tracesSampleRate: 0,
  sendClientReports: false,
  integrations: (defaults) => defaults.filter((integration) =>
    !['BrowserSession', 'Breadcrumbs', 'HttpContext'].includes(integration.name)),
  beforeSend(event) {
    delete event.request;
    delete event.user;
    return event;
  },
});
