export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'storeReview' : IDL.Func([IDL.Text], [], []),
    'storeSessionFeedback' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
