import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Card = styled.div`
  height: 160px;
  width: 370px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px solid gray;
  margin: 15px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

export const CardTitle = styled.div`
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.cardTitle};
  color: ${({ theme }) => theme.colors.text};
  padding: 6px;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CardBody = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBody};
  text-align: center;
  padding: 6px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  height: 100%;
`;
