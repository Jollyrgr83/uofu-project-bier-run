let counter = 0;

const customerPageUtil = {
  toSimpleJSON: (serializedData) => {
    var ar1 = serializedData.split("&");
    var json = "{";
    for (var i = 0; i < ar1.length; i++) {
      var ar2 = ar1[i].split("=");
      json += i > 0 ? ", " : "";
      json += '"' + ar2[0] + '" : ';
      json += '"' + (ar2.length < 2 ? "" : ar2[1]) + '"';
    }
    json += "}";
    return JSON.parse(json);
  },

  addToOrderInstance: () => {
    const orderArray = Array.from(
      new FormData(document.getElementById("modalForm")),
      (e) => e.map(encodeURIComponent).join("=")
    )
      .join("&")
      .replace(/%20/g, " ")
      .replace(/%2C/g, ",");
    return orderArray;
  },

  removeBlankEntries: (orderJSON) => {
    const objKeys = Object.keys(orderJSON);
    let newArr = [];
    for (let i = 0; i < objKeys.length; i++) {
      if (orderJSON[objKeys[i]] !== "") {
        let nameArr = objKeys[i].split(",");
        let newName = nameArr[0] + " " + nameArr[1];
        let newPrice = parseFloat(nameArr[2]);
        newArr.push({ id: counter, name: newName, quantity: orderJSON[objKeys[i]], subtotal: (newPrice * orderJSON[objKeys[i]]).toFixed(2) });
        counter++;
      }
    }
    return newArr;
  }
};

export default customerPageUtil;