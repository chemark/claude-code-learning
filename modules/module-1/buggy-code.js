// 练习文件：包含多个 bug，用于测试 Claude Code 的分析能力

// Bug 1: 变量命名错误
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < item.length; i++) {
    total += items[i].price;
  }
  return total;
}

// Bug 2: 类型错误和边界条件
function findMaxValue(numbers) {
  let max = 0;
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// Bug 3: 异步处理错误
function fetchUserData(userId) {
  fetch(`https://api.example.com/users/${userId}`)
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

// Bug 4: 内存泄漏风险
class DataManager {
  constructor() {
    this.listeners = [];
  }

  addEventListener(callback) {
    this.listeners.push(callback);
  }

  notify(data) {
    this.listeners.forEach(listener => listener(data));
  }
}

// Bug 5: 逻辑错误
function isValidPassword(password) {
  if (password.length > 8) {
    return true;
  }
  if (password.match(/[A-Z]/)) {
    return true;
  }
  if (password.match(/[0-9]/)) {
    return true;
  }
  return false;
}

// Bug 6: 性能问题
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Bug 7: 错误处理缺失
function divideNumbers(a, b) {
  return a / b;
}

// Bug 8: 对象属性访问错误
function getUserName(user) {
  return user.profile.name.firstName + ' ' + user.profile.name.lastName;
}

module.exports = {
  calculateTotal,
  findMaxValue,
  fetchUserData,
  DataManager,
  isValidPassword,
  removeDuplicates,
  divideNumbers,
  getUserName
};
