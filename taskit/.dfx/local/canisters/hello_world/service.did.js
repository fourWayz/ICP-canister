export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'assignTask' : IDL.Func([IDL.Nat, IDL.Principal], [IDL.Bool], []),
    'completeTask' : IDL.Func([IDL.Nat], [IDL.Bool], []),
    'createTask' : IDL.Func([IDL.Text, IDL.Text], [IDL.Nat], []),
    'deleteTask' : IDL.Func([IDL.Nat], [IDL.Bool], []),
    'getAllTasks' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Nat,
              'title' : IDL.Text,
              'assignedTo' : IDL.Opt(IDL.Principal),
              'isCompleted' : IDL.Bool,
              'description' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'getTaskById' : IDL.Func(
        [IDL.Nat],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Nat,
              'title' : IDL.Text,
              'assignedTo' : IDL.Opt(IDL.Principal),
              'isCompleted' : IDL.Bool,
              'description' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'updateTask' : IDL.Func([IDL.Nat, IDL.Text, IDL.Text], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
