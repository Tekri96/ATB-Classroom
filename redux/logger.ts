export const logger = (content: any, identifier?: string): void => {
  console.log('[COMPLAIN]', identifier ?? 'UNKOWN CONTENT: ', content);
};
