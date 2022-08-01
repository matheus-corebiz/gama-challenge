const formatPrice = (price) => {
  if(!price || isNaN(price)) return
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(price);
}

export default formatPrice