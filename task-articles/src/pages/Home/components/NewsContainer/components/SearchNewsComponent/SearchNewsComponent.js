import React, { useState } from "react";
import propTypes from "prop-types";
import {
  RequestSettingsContainer,
  StyledHeaderConteiner,
} from "../../styled.components";
import { Button } from "antd";
import { Form, Field } from "react-final-form";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import CustomInput from "./components/CustomInput/CustomInput";
import CustomSelect from "./components/CustomSelect/CustomSelect";

const SearchNewsComponent = ({ onSearch, loading }) => {
  const [isOptions, setIsOptions] = useState(false);
  const configObject = {
    language: {
      en: "English",
      ar: "Arabic",
      de: "German",
      ru: "Russian",
    },
    sorting: {
      relevancy: "Relevancy",
      popularity: "Popularity",
      publishedAt: "Publication Date",
    },
  };

  return (
    <StyledHeaderConteiner>
      <div style={{ width: "100%" }}>
        <Form
          id="search"
          onSubmit={(values) => onSearch(values)}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} id="search">
              <div className="search-container" style={{ display: "flex" }}>
                <Field name="q" component={CustomInput} />
                <Button
                  key="search"
                  form="search"
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                >
                  Search
                </Button>
              </div>
              <div>
                <div>
                  <span onClick={() => setIsOptions(!isOptions)}>
                    Search options{" "}
                    {isOptions ? <UpOutlined /> : <DownOutlined />}
                  </span>
                </div>
                {isOptions && (
                  <RequestSettingsContainer visibility={isOptions}>
                      <div>
                        <label>
                          Date from{" "}
                          <Field
                            name="from"
                            type="date"
                            component={"input"}
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          Date to{" "}
                          <Field
                            name="to"
                            type="date"
                            component={"input"}
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          {" "}
                          Sorting:{" "}
                          <Field
                            name="sorting"
                            configuration={configObject.sorting}
                            component={CustomSelect}
                          />
                        </label>
                      </div>
                      <div>
                        <label>
                          Language:{" "}
                          <Field
                            name="language"
                            configuration={configObject.language}
                            component={CustomSelect}
                          />
                        </label>
                      </div>
                  </RequestSettingsContainer>
                )}
              </div>
            </form>
          )}
        />
      </div>
    </StyledHeaderConteiner>
  );
};

SearchNewsComponent.propTypes = {
  onSearch: propTypes.func,
  loading: propTypes.bool,
};

export default SearchNewsComponent;
