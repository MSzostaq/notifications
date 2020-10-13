import React from "react";
import styled from "styled-components";
import Notification from "./Notification";

const StyledNotifications = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: auto;

  @supports (display: grid) {
    height: 0;
  }
`;

const StyledNotification = styled(Notification)`
  margin-top: 4px;

  &:first-child {
    margin-top: 0;
  }
`;

const Notifications = ({ className, notifications }) => {
  return (
    <StyledNotifications className={className}>
      {notifications.map((notification) => (
        <StyledNotification key={notification.id} notification={notification} />
      ))}
    </StyledNotifications>
  );
};

export default Notifications;
