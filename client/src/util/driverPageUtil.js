// DRIVERPAGE UTILITY

const driverPageUtil = {
  // sorts order array by selected status
  sortBySelectedStatus: (orders) => {
    const sortedArray = orders.sort((a, b) => {
      if (a.inProgress > b.inProgress) {
        return -1;
      } else {
        return 1;
      }
    });
    return sortedArray;
  },
  // returns count of selected orders
  countSelectedOrders: (orders) => {
    let counter = 0;
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].inProgress) {
        counter++;
      }
    }
    return counter;
  }

};

export default driverPageUtil;
