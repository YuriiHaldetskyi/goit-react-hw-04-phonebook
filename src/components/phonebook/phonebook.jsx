import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Form, ErrorMessage, Field } from '../phonebook/phonebook.styled';
import { Button } from 'GlobalStyled';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(5, 'Too sort')
    .max(50, 'Too long')
    .required('Requied'),
});

export const Phonebook = ({ onSave }) => {
  const onSubmit = (values, actions) => {
    if (onSave({ ...values, id: nanoid() })) {
      actions.resetForm();
    }
  };
  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <label htmlFor="name">
            Сontact name:
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor="number">
            Phone number:
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="div" />
          </label>
          <Button type="submit"> Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};
