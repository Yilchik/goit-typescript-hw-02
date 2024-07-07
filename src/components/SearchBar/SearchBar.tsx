import React from "react";
import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  return (
    <header className={css.container}>
      <Toaster position="top-right" />
      <Formik
        initialValues={{ query: "" }}
        validationSchema={Yup.object({
          query: Yup.string().required("Please enter a search images"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          if (values.query.trim() === "") {
            toast.error("Please enter a search images");
          } else {
            onSubmit(values.query);
            console.log(values.query);
          }
          setSubmitting(false);
        }}
      >
        <Form className={css.form}>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
