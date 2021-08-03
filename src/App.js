import "./App.css";
import states from "./State";
import { Skills } from "./Skills";
import { Formik, Form, Field, ErrorMessage } from "formik";
const validateEmail = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
function App() {
  const handlerRating = (event, values) => {
    const a = +event.target.id;
    for (let i = 1; i <= a; i++) {
      document.getElementById(i).classList.add("starbg");
    }
    for (let j = a + 1; j <= 5; j++) {
      const b = document.getElementById(j);
      if (b.classList.contains("starbg")) {
        b.classList.remove("starbg");
      } else {
        continue;
      }
    }
  };
  return (
    <Formik
      initialValues={{
        fname: "",
        lname: "",
        addr1: "",
        addr2: "",
        city: "",
        state: "Tamil Nadu",
        zip: "",
        email: "",
        gender: "",
        skills: [],
        applyfor: "front-end",
        html: "",
        css: "",
        bootstrap: "",
        react: "",
        dom: "",
        mysql: "",
        mongodb: "",
        node: "",
        python: "",
        experience: "",
        comment: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.fname) errors.fname = "First Name is Required";
        if (!values.lname) errors.lname = "Last Name is Required";
        if (!values.addr1) errors.addr1 = "Address is Required";
        if (!values.addr2) errors.addr2 = "Address is Required";
        if (!values.city) errors.city = "city is Required";
        if (!values.zip) errors.zip = "zip is Required";
        if (!values.email) {
          errors.email = "E-mail is Required";
        } else if (!validateEmail.test(values.email)) {
          errors.email = "E-mail is invalid";
        }
        if (!values.gender) errors.gender = "Fill the Gender";
        if (values.skills[0] === undefined) {
          errors.skills = "Select the Skills";
        }
        // eslint-disable-next-line array-callback-return
        Skills.filter((obj) => {
          if (!values[obj]) {
            return (errors[obj] = (
              <>
                <span className="hide">hii</span>{" "}
                <i className="fas fa-exclamation-triangle"></i>
              </>
            ));
          }
        });
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(true);
        }, 500);
        console.log(values);
        alert("Check the given values in the console!");
      }}
    >
      {({ isSubmitting, values, handleReset }) => {
        return (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Form>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="fname">First Name</label>
                      <Field
                        id="fname"
                        name="fname"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage name="fname" />
                    </div>
                    <div className="col">
                      <label htmlFor="lname">Last Name</label>
                      <Field
                        id="lname"
                        name="lname"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage name="lname" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="addr1">Address</label>
                      <Field
                        id="addr1"
                        name="addr1"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage name="addr1" />
                    </div>
                    <div className="col">
                      <label htmlFor="addr2">Address 2</label>
                      <Field
                        id="addr2"
                        name="addr2"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage name="addr2" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="city">City</label>
                      <Field
                        name="city"
                        id="city"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage name="city" />
                    </div>
                    <div className="col">
                      <label htmlFor="state">State</label>

                      <Field
                        as="select"
                        name="state"
                        id="state"
                        className="form-control"
                      >
                        {states.map((obj, index) => {
                          return (
                            <option key={index} value={obj.name}>
                              {obj.name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                    <div className="col">
                      <label htmlFor="zip">Zip</label>
                      <Field
                        id="zip"
                        name="zip"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage name="zip" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="email">E-mail</label>
                      <Field
                        name="email"
                        id="email"
                        type="text"
                        className="form-control"
                      />
                      <ErrorMessage name="email" />
                    </div>
                    <div className="col">
                      <label htmlFor="gender">Gender</label>
                      <div>
                        <Field
                          type="radio"
                          id="gender"
                          name="gender"
                          value="male"
                        />
                        Male<span className="hide">hi</span>
                        <Field
                          type="radio"
                          id="gender"
                          name="gender"
                          value="female"
                        />
                        Female<span className="hide">hi</span>
                        <Field
                          type="radio"
                          id="gender"
                          name="gender"
                          value="other"
                        />
                        Other<span className="hide">hi</span>
                      </div>
                      <ErrorMessage name="gender" />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label htmlFor="skills">Skills</label>
                      <div>
                        <Field
                          type="checkbox"
                          name="skills"
                          value="Designing"
                        />
                        Designing<span className="hide">hi</span>
                        <Field type="checkbox" name="skills" value="MEAN" />
                        MEAN<span className="hide">hi</span>
                        <Field type="checkbox" name="skills" value="MERN" />
                        MERN<span className="hide">hi</span>
                      </div>
                      <ErrorMessage name="skills" />
                    </div>
                    <div className="col">
                      <label htmlFor="applyfor">Applying For:</label>
                      <Field
                        as="select"
                        name="applyfor"
                        id="applyfor"
                        className="form-control"
                      >
                        <option value="front-end">Front End</option>
                        <option value="back-end">Back End</option>
                        <option value="full-stack">Full Stack</option>
                      </Field>
                    </div>
                  </div>
                  <div className="row">
                    <label>How Familiar are you with ?</label>
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>Skills</th>
                          <th>Excellent</th>
                          <th>Good</th>
                          <th>Fair</th>
                          <th>Poor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Skills.map((obj, ind) => {
                          return (
                            <tr key={ind}>
                              <td>
                                {obj}
                                {/* {errors[obj] ? (
                                  <span>{errors[obj]}</span>
                                ) : null} */}
                                {<ErrorMessage name={obj} />}
                              </td>
                              <td>
                                <Field
                                  type="radio"
                                  name={obj}
                                  value="excellent"
                                />
                              </td>
                              <td>
                                <Field type="radio" name={obj} value="good" />
                              </td>
                              <td>
                                <Field type="radio" name={obj} value="fair" />
                              </td>
                              <td>
                                <Field type="radio" name={obj} value="poor" />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="Row">
                    <h3>Your Experience</h3>
                    <div>
                      <span>
                        <i
                          className="far fa-star fa-3x"
                          onClick={(event) => {
                            values.experience = event.target.id;
                            handlerRating(event);
                          }}
                          id="1"
                        ></i>
                      </span>
                      <span>
                        <i
                          id="2"
                          className="far fa-star fa-3x"
                          onClick={(event) => {
                            values.experience = event.target.id;
                            handlerRating(event);
                          }}
                        ></i>
                      </span>
                      <span>
                        <i
                          id="3"
                          className="far fa-star fa-3x"
                          onClick={(event) => {
                            values.experience = event.target.id;
                            handlerRating(event);
                          }}
                        ></i>
                      </span>
                      <span>
                        <i
                          id="4"
                          className="far fa-star fa-3x"
                          onClick={(event) => {
                            values.experience = event.target.id;
                            handlerRating(event);
                          }}
                        ></i>
                      </span>
                      <span>
                        <i
                          id="5"
                          className="far fa-star fa-3x"
                          onClick={(event) => {
                            values.experience = event.target.id;
                            handlerRating(event);
                          }}
                        ></i>
                      </span>
                    </div>

                    <p>
                      (If you're fresher or having experience witin 1 year press
                      1 star, more than 1 year select 2 stars, more than 5 years
                      select 5 stars)
                    </p>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="comments">Add Comment if you wish!</label>
                      <div></div>
                      <Field
                        as="textarea"
                        name="comment"
                        id="comments"
                        style={{ height: "100px", width: "50%" }}
                      />
                    </div>
                  </div>

                  <br />
                  <div className="row">
                    <div className="Col">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        submit
                      </button>
                      <button
                        type="reset"
                        onClick={handleReset}
                        className="btn btn-danger"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
export default App;
