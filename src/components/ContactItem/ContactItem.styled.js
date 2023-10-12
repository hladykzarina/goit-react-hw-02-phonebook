import styled from 'styled-components';

export const ContactItemEl = styled.li`
  width: 420px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  :hover {
    fill: orange;
  }
`;

export const ContactDelete = styled.button`
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid black;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const ContactData = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 25px;
  border: 1px solid darkorange;
  border-radius: 4px;
  margin-bottom: 6px;
`;

export const ContactImg = styled.svg`
  width: 17px;
  height: 17px;
`;

export const ContactName = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  color: black;
`;

export const ContactNumber = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;
