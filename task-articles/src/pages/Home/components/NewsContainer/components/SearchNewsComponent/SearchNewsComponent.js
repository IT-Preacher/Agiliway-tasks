import React, { useState } from "react";
import { StyledHeaderConteiner } from "../../styled.components";
import { Select, Button } from "antd";
import { Form, Field } from "react-final-form";
import CustomInput from "./components/CustomInput/CustomInput";

const SearchNewsComponent = ({ onSearch, loading }) => {
  const [isOptions, setIsOptions] = useState(false);
  const { Option } = Select;
  return (
    <StyledHeaderConteiner>
      <div style={{ width: "100%" }}>
        <Form
          id="search"
          onSubmit={(values) => onSearch(values)}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} id="search">
              <div className="search-container" style={{ display: "flex" }}>
                {/* Cant get value from input on handleSubmit */}
                {/* <Field>
                  {(props) => {
                    console.log(props);
                    return (
                      <Input.Search
                        {...props.input.value}
                        name="q"
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        loading={loading}
                        onSearch={handleSubmit}
                      />
                    );
                  }}
                </Field> */}

                {/* Work correct on handleSubmit */}
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
                    Search options ⚙
                  </span>
                </div>
                {isOptions && (
                  <div
                    className="request-settings-container"
                    style={{ width: 300 }}
                  >
                    <div className="datepicker-container">
                      <div>
                        <labe>
                          Date from{" "}
                          <Field
                            name="dateFrom"
                            type="date"
                            component={"input"}
                          />
                        </labe>
                      </div>
                      <div>
                        <label>
                          Date to{" "}
                          <Field
                            name="dateTo"
                            type="date"
                            component={"input"}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="select-container">
                      <div>
                        <label>
                          {" "}
                          Sorting:{" "}
                          <Field name="sorting" component={"select"}>
                            <option value={null} />
                            <option value="relevancy">relevancy</option>
                            <option value="popularity">popularity</option>
                            <option value="publishedAt">published At</option>
                          </Field>
                        </label>
                      </div>
                      <div>
                        <label>
                          {" "}
                          Language:{" "}
                          <Field name="language" component={"select"}>
                            <option value={null} />
                            <option value="en">English</option>
                            <option value="ar">Arabic</option>
                            <option value="de">German</option>
                            <option value="ru">Russian</option>
                          </Field>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </form>
          )}
        />
      </div>
    </StyledHeaderConteiner>
  );
};
export default SearchNewsComponent;
