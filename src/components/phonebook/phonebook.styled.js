import styled from '@emotion/styled';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 320px;
  margin: 16px auto;
  padding: 16px;
  border: 1px solid grey;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
`;

export const Field = styled(FormikField)`
  margin-left: 20px;
`;
