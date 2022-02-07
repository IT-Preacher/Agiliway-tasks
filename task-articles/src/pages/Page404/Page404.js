import React from "react";
import { Page404Container, BigTextSpan } from "./styled.component";

const Page404 = () => {
  return (
    <Page404Container>
      <BigTextSpan>Page Not Found 404</BigTextSpan>
      <p>
        The page you looking for could not be found. It might have been removed,
        renamed, or did not exist in the firs place.
      </p>
    </Page404Container>
  );
};

export default Page404;
