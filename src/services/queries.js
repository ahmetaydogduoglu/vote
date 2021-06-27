import { gql } from "@apollo/client"

import { query } from './client';

export const getCompanyEmpyloyees = () => {
  const queryString = gql`
    {
        company {
          id,
          name,
          employees {
            id,
            firstName,
            lastName,
            avatar,
            vote,
            jobTitle
          }
        }
      }
    `;

  return query(queryString);
};

export const getCompanyEmpyloyeeDetail = (employeeId) => {
  const queryString = gql`
    {
      employee(id: "${employeeId}") {
        id,
        firstName,
        lastName,
        address,
        avatar,
        jobitle,
        email
      }
      }
    `;

    return query(queryString);
}