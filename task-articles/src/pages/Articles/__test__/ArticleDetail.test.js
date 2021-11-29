import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import ArticleDetail from "../ArticleDetail";

// test("renders learn react link", () => {
//   render(
//     <ArticleDetail
//       articleItem={{
//         name: "Name",
//         description: "description",
//         author: "author",
//       }}
//       loading={true}
//     />
//   );
//   screen.debug();
// });

let container = null;
const myMethod = jest.fn();

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Article Detail", () => {
  it("renders with or without a Title", () => {
    act(() => {
      render(
        <Router>
          <ArticleDetail
            articleItem={{
              author: "dsfsdf",
              createDate: "2021-11-24T15:46:37.883Z",
              description: "gdfgdf",
              name: "3rwr12",
              uuid: "c053805e-4bd9-4ce3-9bc0-ee734519f68e",
            }}
            match={{ params: { uuid: "c053805e-4bd9-4ce3-9bc0-ee734519f68e" } }}
            getDataItemAction={myMethod}
          />
        </Router>,
        container
      );
    });
    //expect(container.querySelector(".article-conteiner")).toBe(true);
    expect(screen.getByText(/Back/i)).toBeInTheDocument();
  });
});
