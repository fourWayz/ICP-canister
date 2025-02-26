import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'assignTask' : ActorMethod<[bigint, Principal], boolean>,
  'completeTask' : ActorMethod<[bigint], boolean>,
  'createTask' : ActorMethod<[string, string], bigint>,
  'deleteTask' : ActorMethod<[bigint], boolean>,
  'getAllTasks' : ActorMethod<
    [],
    Array<
      {
        'id' : bigint,
        'title' : string,
        'assignedTo' : [] | [Principal],
        'isCompleted' : boolean,
        'description' : string,
      }
    >
  >,
  'getTaskById' : ActorMethod<
    [bigint],
    [] | [
      {
        'id' : bigint,
        'title' : string,
        'assignedTo' : [] | [Principal],
        'isCompleted' : boolean,
        'description' : string,
      }
    ]
  >,
  'updateTask' : ActorMethod<[bigint, string, string], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
