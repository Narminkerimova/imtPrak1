import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";
import { MainContext } from "../../context/MainProvider";
import { useContext } from "react";


function AdminAdd() {
  const {url,postElement} = useContext(MainContext)
  return (
    <Formik
      initialValues={{ name: "", price: "", image: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .min(3, "Must be 3 characters or more")
          .required("Required"),
        price: Yup.string()
          .max(15, "Must be 15 characters or less")
          .min(3, "Must be 3 characters or more")
          .required("Required"),
        image: Yup.string()
          .max(15, "Must be 15 characters or less")
          .min(3, "Must be 3 characters or more")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        postElement(url,values)
        alert("Ugurla gonderildi!!!!")
        resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Product Name:</label>
        <Field name="name" type="text" className="inputFormik" />
        <div className="errorMes">
          <ErrorMessage name="name" />
        </div>

        <label htmlFor="price">Price:</label>
        <Field name="price" type="text" className="inputFormik" />
        <div className="errorMes">
          <ErrorMessage name="price" />
        </div>

        <label htmlFor="image">Image URL:</label>
        <Field name="image" type="text" className="inputFormik" />
        <div className="errorMes">
          <ErrorMessage name="image" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default AdminAdd;
