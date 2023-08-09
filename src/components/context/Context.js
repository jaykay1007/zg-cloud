import { useState, createContext } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  // initialize help status to false
  const [roomId, setRoomId] = useState(false);
  const [hasRoomId, setHasRoomId] = useState(false);

  // update help status
  const updateRoomId = (status) => {
    setRoomId(status);
    setHasRoomId(true)
  };

  // create context value object
  const contextValue = {
    roomId,
    updateRoomId,
    hasRoomId
  };

  // return context provider with value and children
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
