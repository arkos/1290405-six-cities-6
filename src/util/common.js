const roomTypeToNameMap = {
  [`apartment`]: `Apartment`,
  [`room`]: `Private Room`,
  [`house`]: `House`,
  [`hotel`]: `Hotel`
};

export const getRoomName = (type) => {
  return roomTypeToNameMap[type] || type;
};
