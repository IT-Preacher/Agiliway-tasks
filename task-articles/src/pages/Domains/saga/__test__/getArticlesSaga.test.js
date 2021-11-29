import { call, put } from "redux-saga/effects";
import { cloneableGenerator } from "@redux-saga/testing-utils";
import { deepEqual } from "assert";
import * as api from "../../../../services/domain";
import { getArticlesSagaWorker } from "../getArticles-saga";
import {
  getArticlesSuccessAction,
  //getArticlesStartAction,
  getArticlesErrorAction,
} from "./../../actions/getArticlesAction";

describe("Saga test", () => {
  const generator = cloneableGenerator(getArticlesSagaWorker)();
  test("Positive Saga call test", () => {
    const clone = generator.clone();

    deepEqual(
      clone.next().value,
      call(api.getArticlesRequestSaga),
      "should call getArticlesRequest fetch"
    );

    deepEqual(
      clone.next().value,
      put(getArticlesSuccessAction()),
      "should add Success action"
    );
    const result = clone.next().done;
    deepEqual(result, true, "should be done after end");
  });
  // test("Negative Saga call test", () => {
  //   const clone = generator.clone();
  //   deepEqual(
  //     clone.next().value,
  //     put(getArticleSuccessAction()),
  //     "should add inProgress action first"
  //   );
  //   deepEqual(
  //     clone.throw().value,
  //     put(getArticlesErrorAction()),
  //     "should add Error action on error"
  //   );
  // });
});
