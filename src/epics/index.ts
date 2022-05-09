import { Epic, ofType, combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';
import { fromFetch } from 'rxjs/fetch'

import { Constants as C } from './constants'
import { RootState, AllActions } from './types'
import * as actions from './actions'

const startRequestTextEpic: Epic<AllActions, AllActions, RootState> = (
  action$,
  _store,
) =>
  action$.pipe(
    ofType(C.START_REQUEST_TEXT),
    mergeMap(() => {
      const REQUEST_URL: string =
        'https://baconipsum.com/api/?type=meat?paras=200'

      const sendRequest$ = fromFetch(REQUEST_URL)
      return sendRequest$.pipe(
        mergeMap((resp: Response) => {
          return from(resp.text()).pipe(
            mergeMap((text: string) => of(actions.finishRequestText(text))),
          )
        }),
        catchError((error: Error) =>
          of(actions.errorRequestText(error.message)),
        ),
      )
    }),
  )

const rootEpic: Epic<AllActions, AllActions, RootState> =
  combineEpics(startRequestTextEpic)

export default rootEpic
