export declare interface Epic<
  Input extends Action = any,
  Output extends Input = Input,
  State = any,
  Dependencies = any,
> {
  (
    action$: ActionsObservable<Input>,
    state$: StateObservable<State>,
    dependencies: Dependencies,
  ): Observable<Output>
}

export interface EpicMiddleware<
  T extends Action,
  O extends T = T,
  S = void,
  D = any,
> extends Middleware {
  run(rootEpic: Epic<T, O, S, D>): void
}

export declare function createEpicMiddleware<
  T extends Action,
  O extends T = T,
  S = void,
  D = any,
>(options?: Options<D>): EpicMiddleware<T, O, S, D>
