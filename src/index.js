module.exports = function getZerosCount(number, base) {
   const factors = factorization(base);
   let maxNumber = Number.MAX_VALUE;

   for (let i = 0; i < factors.length; i++) {
      let res = 0;
      let power = 1;

      while (number / factors[i][0] ** power > 1) {
         res += Math.floor(number / factors[i][0] ** power);
         power++;
      }

      res /= factors[i][1];

      if (res <= maxNumber) {
         maxNumber = res;
      }
   }

   return Math.floor(maxNumber);
};

const factorization = base => {
   let result = [];
   for (let divider = 2; divider <= base; divider++) {
      let power = 0;
      let isDivided = false;
      while (base % divider == 0) {
         base /= divider;
         power++;
         isDivided = true;
      }
      if (isDivided) {
         result.push([divider, power]);
      }
   }

   return result;
};
