// 需要重构的购物车代码示例
// 问题：重复代码、长函数、缺少错误处理

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(productId, name, price, quantity) {
    // 重复的验证逻辑 1
    if (!productId) {
      console.log('Product ID is required');
      return;
    }
    if (!name) {
      console.log('Product name is required');
      return;
    }
    if (!price || price <= 0) {
      console.log('Valid price is required');
      return;
    }
    if (!quantity || quantity <= 0) {
      console.log('Valid quantity is required');
      return;
    }

    this.items.push({ productId, name, price, quantity });
  }

  updateQuantity(productId, newQuantity) {
    // 重复的验证逻辑 2
    if (!productId) {
      console.log('Product ID is required');
      return;
    }
    if (!newQuantity || newQuantity <= 0) {
      console.log('Valid quantity is required');
      return;
    }

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].productId === productId) {
        this.items[i].quantity = newQuantity;
        return;
      }
    }
    console.log('Product not found');
  }

  removeItem(productId) {
    // 重复的查找逻辑
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].productId === productId) {
        this.items.splice(i, 1);
        return;
      }
    }
    console.log('Product not found');
  }

  getTotal() {
    // 复杂的计算逻辑混在一起
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price * this.items[i].quantity;
    }

    // 硬编码的折扣逻辑
    if (total > 100) {
      total = total * 0.9; // 10% discount
    }
    if (total > 500) {
      total = total * 0.95; // additional 5% discount
    }

    return total;
  }

  applyPromoCode(code) {
    let discount = 0;

    // 硬编码的促销逻辑
    if (code === 'SAVE10') {
      discount = 0.1;
    } else if (code === 'SAVE20') {
      discount = 0.2;
    } else if (code === 'SAVE30') {
      discount = 0.3;
    } else {
      console.log('Invalid promo code');
      return;
    }

    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price * this.items[i].quantity;
    }

    return total * (1 - discount);
  }

  // 长函数，做了太多事情
  checkout(userInfo, paymentInfo, shippingAddress) {
    // 验证用户信息
    if (!userInfo || !userInfo.name || !userInfo.email) {
      console.log('Invalid user info');
      return;
    }

    // 验证支付信息
    if (!paymentInfo || !paymentInfo.cardNumber || !paymentInfo.cvv) {
      console.log('Invalid payment info');
      return;
    }

    // 验证地址
    if (!shippingAddress || !shippingAddress.street || !shippingAddress.city) {
      console.log('Invalid shipping address');
      return;
    }

    // 计算总价
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price * this.items[i].quantity;
    }

    // 处理支付
    console.log('Processing payment...');
    // ... 支付逻辑

    // 创建订单
    console.log('Creating order...');
    // ... 订单逻辑

    // 发送确认邮件
    console.log('Sending confirmation email...');
    // ... 邮件逻辑

    // 清空购物车
    this.items = [];

    return { success: true, total: total };
  }
}

module.exports = ShoppingCart;
