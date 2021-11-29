import { runSaga } from "redux-saga";
//import { takeLatest, call, put } from "redux-saga/effects";
//import { cloneableGenerator } from "@redux-saga/testing-utils";
import {
  getArticlesSuccessAction,
  getArticlesStartAction,
  getArticlesErrorAction,
  articlesFetchStartSaga,
} from "../../actions/getArticlesAction";
import {
  watcherGetArticlesSaga,
  getArticlesSagaWorker,
} from "../getArticles-saga";
import * as api from "../../../../services/domain";

describe('getArticles-saga', () => {
    it('should call api and dispatch success action', async () => {
      const fakedArticle = [{ name: 'tests is pain' }];
      const requestArticles = jest
        .spyOn(api, 'getArticlesRequestSaga')
        .mockImplementation(() => Promise.resolve(fakedArticle));
      const dispatched = [];
      // const result =
      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        getArticlesSagaWorker,
      );
      expect(requestArticles).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([
        getArticlesStartAction(),
        getArticlesSuccessAction(fakedArticle),
      ]);
      requestArticles.mockClear();
    });
  
    // it('should call api and dispatch error action', async () => {
    //   const requestMagazines = jest
    //     .spyOn(api, 'getMagazines')
    //     .mockImplementation(() => Promise.reject());
    //   const dispatched = [];
    //   // const result =
    //   await runSaga(
    //     {
    //       dispatch: (action) => dispatched.push(action),
    //     },
    //     getMagazinesSaga,
    //   );
    //   expect(requestMagazines).toHaveBeenCalledTimes(1);
    //   expect(dispatched).toEqual([
    //     getMagazinesInProgressAction(),
    //     getMagazinesErrorAction(),
    //   ]);
    //   requestMagazines.mockClear();
    // });
  });