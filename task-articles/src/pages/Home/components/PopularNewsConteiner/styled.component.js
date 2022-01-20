import styled from "styled-components";

export const PopularNewsCarousel = styled.div`
  min-height: 500px;
  margin-bottom: 50px;

  .popular-article-card-container {
    height: 500px;

    .blure-background-layer {
      height: 100%;
      backdrop-filter: blur(4px);
      background-color: rgba(46, 45, 48, 0.6);
      padding: 20px 30px;
      color: white;

      section {
        display: flex;
        flex-direction: column;
        height: 100%;

        header {
          width: 100%;
          justify-content: center;
          border-bottom: 1px solid white;

          h2 {
            color: white;
            margin: 0;
          }
        }

        main {
          display: flex;
          flex-direction: column;
          align-items: baseline;
          font-size: 18px;
          flex-grow: 1;
          margin-top: 20px;

          .article-main-text {
            background-color: rgba(46, 45, 48, 0.6);
          }

          #show-more {
              cursor: pointer;
          }
        }

        footer {
          height: 30px;
          margin: 10px;
          display: flex;
          justify-content: end;
        }
      }
    }
  }
`;
