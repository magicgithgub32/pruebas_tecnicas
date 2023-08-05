// (cost_per_minute) * (ride_time) + (cost_per_mile) * (ride_distance)

const solutionOne = (
  ride_time,
  ride_distance,
  cost_per_minute,
  cost_per_mile
) => {
  const numbers = [];
  const allCostPerMiles_per_distance = cost_per_mile.map(
    (individualCostPerMile) => {
      return individualCostPerMile * ride_distance;
    }
  );

  const allCostPerMinutes_per_time = cost_per_minute.map(
    (individualCostPerMinute) => {
      return individualCostPerMinute * ride_time;
    }
  );

  for (let i = 0; i < allCostPerMiles_per_distance.length; i++) {
    numbers.push(
      allCostPerMiles_per_distance[i] + allCostPerMinutes_per_time[i]
    );
  }
  return numbers.map((number) => number.toFixed(1));
};

console.log(solutionOne(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));

////////////////////////////////

const solutionTwo = (length, fares) => {
  const credit = 20;
  const rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
  const permittedRides = [];

  const priceForRides = fares.map((fare) => fare * length);

  for (let i = 0; i < priceForRides.length; i++) {
    if (priceForRides[i] <= credit) {
      permittedRides.push(rides[i]);
    }
  }

  return permittedRides[permittedRides.length - 1];
};

console.log(solutionTwo(30, [0.3, 0.5, 0.7, 1.1, 1.3]));
