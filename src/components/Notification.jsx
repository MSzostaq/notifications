import React from "react";
import styled from "styled-components";

const StyledNotification = styled.li`
  background-color: ${({ type }) => (type === "error" ? "#ce5a5a" : "#76bd70")};
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 12px;
  width: 300px;
`;

const Notification = ({ className, notification }) => {
  const { type } = notification;
  return (
    <StyledNotification className={className} type={type}>
      {type}
    </StyledNotification>
  );
};

export default Notification;
