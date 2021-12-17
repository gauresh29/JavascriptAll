var SellingPrice = 199;
var ListingPrice = 799;
var DiscountPrice  = ((ListingPrice-SellingPrice)/ListingPrice) *100;

console.log(DiscountPrice);

RoundedDiscountPrice = Math.round(DiscountPrice);

console.log(RoundedDiscountPrice);
