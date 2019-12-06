export function countPages(itemCount, itemsPerPage) {
  return Math.ceil(itemCount / itemsPerPage);
}

export function generateDistinct(nums) {
  return nums.length + 1;
}

export function generateLarger(nums) {
  let sum = 0;

  nums.forEach((num) => {
    sum += num;
  });

  return sum;
}

export function generateSmaller(nums) {
  let n = nums[0];

  while (nums.includes(n)) {
    n -= 1;
  }

  return n;
}

export function generateRandomInt(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}
